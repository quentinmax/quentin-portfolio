import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/Hero/Heading";
import {
  Variants,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import animation from "../constants/animation";
import ScrollIndicator from "../components/ScrollIndicator";
import Description from "./Description";

const container: Variants = {
  initial: {
    translateY: window.innerHeight,
  },
  animate: {
    translateY: 0,
    transition: {
      duration: 1,
      ease: animation.EASING,
    },
  },
};

interface Props {
  setScrollFinished: Function;
  scrollFinished: any;
}

const Hero: React.FC<Props> = ({ setScrollFinished, scrollFinished }) => {
  const [startY, setStartY] = useState(0);
  const [scrollDone, setScrollDone] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const scrollProgress = useSpring(0, {
    bounce: 0,
    stiffness: 300,
    damping: 50,
    mass: 1,
  });

  const handleWheel = (event: WheelEvent) => {
    const dir = Math.sign(event.deltaY);
    const min = Math.max(scrollProgress.get() + 0.2 * dir, 0);
    const newScroll = Math.min(min, 1);

    //Handle heading scroll, so when scrolling up ScrollProgress won't change
    if (!scrollDone && scrollProgress.get() < 1) {
      setScrollFinished(false);
      setScrollDone(false);
      scrollProgress.set(newScroll);
    } else if (scrollYProgress.get() <= 0.51 && dir < 0) {
      scrollProgress.set(newScroll);
    }
    if (newScroll === 1) {
      setScrollFinished(true);
      setScrollDone(true);
    }
  };
  const handleTouchStart = (event: TouchEvent) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (startY !== null) {
      //   const deltaY = event.touches[0].clientY - startY;
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    console.log(event.changedTouches);
    const deltaY = event.changedTouches[0].clientY - startY;
    const dir = deltaY > 400 ? 1 : -1;
    console.log("Delta", deltaY);
    scrollProgress.set(dir * scrollProgress.get() + 0.2);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <motion.div
      ref={heroRef}
      variants={container}
      initial="initial"
      animate="animate"
      className="hero-container"
    >
      <Heading scrollProgress={scrollProgress} />
      <ScrollIndicator scrollProgress={scrollProgress} />
    </motion.div>
  );
};

export default Hero;
