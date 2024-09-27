import {
  MotionValue,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";

interface Props {
  scrollProgress: MotionValue<number>;
}

const ScrollIndicator: React.FC<Props> = ({ scrollProgress }) => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]);

  return (
    <motion.div style={{ opacity }} className="scroll-indicator">
      <p style={{ padding: "5px 20px" }}>SCROLL DOWN</p>
      <motion.div className="bar" />
      <motion.div className="bar" style={{ scaleX: scrollProgress }} />
    </motion.div>
  );
};

export default ScrollIndicator;
