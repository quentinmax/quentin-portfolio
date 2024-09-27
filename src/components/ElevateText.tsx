import React, { ReactNode, useState } from "react";
import {
  AnimatePresence,
  Variants,
  inView,
  motion,
  useInView,
} from "framer-motion";
import animation from "../constants/animation";

interface Props {
  textClassName?: string;
  delay?: number;
  inView?: boolean;
  containerRef?: any;
  children: ReactNode;
}

const textVariants: Variants = {
  initial: {
    translateY: 100,
  },
  animate: (delay: number) => ({
    translateY: 0,
    transition: {
      delay: delay,
      duration: 1,
      ease: animation.EASING,
    },
  }),
  exit: {
    translateY: 100,
    transition: {
      duration: 1,
      ease: animation.EASING,
    },
  },
};

const ElevateText: React.FC<Props> = ({
  delay = 0,
  textClassName,
  containerRef,
  inView,
  children,
}) => {
  const isInView = useInView(containerRef);

  return (
    <AnimatePresence mode="wait">
      <div className={`text-container`}>
        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          initial="initial"
          exit={"exit"}
          custom={delay}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ElevateText;
