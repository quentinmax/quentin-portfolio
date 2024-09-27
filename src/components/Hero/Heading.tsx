import React, { useState } from "react";
import {
  MotionValue,
  Variants,
  motion,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import animation from "../../constants/animation";

const letters: Variants = {
  initial: {
    translateY: 300,
  },
  animate: (index: number) => ({
    translateY: 0,
    transition: {
      delay: 0.02 + index * 0.03,
      duration: 2,
      ease: animation.EASING,
    },
  }),
};

interface Props {
  scrollProgress: MotionValue<number>;
}

const Heading: React.FC<Props> = ({ scrollProgress }) => {
  const HEADLINE = "Full-Stack-Developer";

  const translation = useTransform(scrollProgress, [0, 1], [0, -1500]);

  return (
    <motion.div className="heading" style={{ translateX: translation }}>
      {HEADLINE.split("").map((letter, index) => {
        return (
          <motion.h1
            variants={letters}
            initial="initial"
            animate="animate"
            key={index}
            custom={index}
          >
            {letter}
          </motion.h1>
        );
      })}
    </motion.div>
  );
};

export default Heading;
