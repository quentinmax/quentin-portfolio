import {
  MotionValue,
  useScroll,
  useTransform,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef } from "react";
import img1 from "../../public/gallery/Details.png";
import img2 from "../../public/gallery/Energieberater.png";
import img3 from "../../public/gallery/Landing.jpeg";

const ProjectGallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2]);
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 3.1]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.25]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 3.5]
  );

  //TODO: Change image resolution

  return (
    <div>
      <div ref={container} className="gallery-container">
        <Column images={[img2, img3, img1]} y={y1} />
        <Column images={[img1, img3, img2]} y={y2} />
        <Column images={[img3, img2, img1]} y={y3} />
        <Column images={[img2, img1, img3]} y={y4} />
      </div>
    </div>
  );
};

const Column = ({
  images,
  y,
}: {
  images: string[];
  y: MotionValue<number>;
}) => {
  return (
    <motion.div style={{ y }} className="gallery-column">
      {images.map((src, index) => {
        return (
          <div key={index} className="column-image-container">
            <img
              // src={`https://picsum.photos/id/${
              //   (index + 1) * Math.floor(Math.random() * 20)
              // }/450/600`}
              src={src}
              alt="image"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ProjectGallery;
