import React, { useEffect, useState } from "react";
import {
  VariantLabels,
  Variants,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface Props {
  setLoading: Function;
}

const content: Variants = {
  initial: {
    translateY: 200,
    opacity: 0,
    height: 50,
    scale: 1,
  },
  animate: {
    translateY: 0,
    opacity: 1,
    height: 100,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
  exit: {
    translateY: -200,
    height: 400,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const container: Variants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: 0.5,
    transition: {
      duration: 1.2,
      delay: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const contentInner: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1 / 0.5,
    transition: {
      duration: 1.2,
      delay: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};
const span: Variants = {
  initial: {
    height: 0,
  },
  exit: {
    height: "100%",
    transition: {
      duration: 1,
      delay: 0,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const inner: Variants = {
  initial: {
    translateY: 0,
  },
  exit: {
    translateY: -1000,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const Loader: React.FC<Props> = ({ setLoading }) => {
  const [loadingProgress, setLoadingProgress] = useState(-10);
  const [animationState, setAnimationState] = useState("initial");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("loader", "finished");
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loadingProgress >= 100) {
      setAnimationState("animate");
    }

    const counter = setTimeout(() => {
      if (loadingProgress < 100) {
        const increment = Math.floor(Math.random() * 10) + 1;
        setLoadingProgress(Math.min(loadingProgress + increment, 100));
      }
    }, Math.floor(Math.random() * 200));

    return () => clearTimeout(counter);
  }, [loadingProgress]);

  return (
    <div className="loader-background">
      <motion.div
        className="loader-container"
        variants={container}
        initial={"initial"}
        animate={animationState}
        exit={"exit"}
      >
        {/* <motion.span
          variants={span}
          initial={"initial"}
          animate={animationState}
          exit={"exit"}
        /> */}
        <motion.div
          className="loader"
          variants={inner}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          <div className="loader-content-wrapper">
            <motion.div
              variants={content}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              className="loader-content"
            >
              <motion.div
                variants={contentInner}
                initial={"initial"}
                animate={animationState}
                exit={"exit"}
                className="loader-content-inner"
              >
                <motion.p
                  //   variants={span}
                  initial={"initial"}
                  animate={animationState}
                >
                  {loadingProgress}
                </motion.p>
                <motion.h5
                  //   variants={text}
                  initial={"initial"}
                  animate={animationState}
                >
                  Quentin Höhne
                </motion.h5>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
