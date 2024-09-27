import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import React, { useEffect, useState } from "react";

const Curve = () => {
  const { scrollYProgress } = useScroll();
  const [width, setWidth] = useState(window.innerWidth);

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const endPath = `
    M0 0 
    L ${width} 0 
    L ${width} 100 
    Q ${width / 2} -100 0 100
  `;

  const initialPath = `
    M0 0
    L ${width} 0
    L ${width} 100
    Q ${width / 2} 100 0 100
  `;
  const path = useTransform(scrollYProgress, [0.9, 1], [initialPath, endPath]);

  return (
    <svg className="svg-curve" viewBox={`0 0 ${width} ${100}`}>
      <motion.path
        d={path}
        // filter={"url(#turbulence)"}
        shapeRendering={"crispEdges"}
      ></motion.path>
    </svg>
  );
};

export default Curve;
