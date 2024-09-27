import React, { useEffect, useState } from "react";
import projects from "../data/projects";
import RecentProjectListItem from "../components/Work/RecentProjectListItem";
import CTAButton from "../components/CTAButton";
import { useNavigate } from "react-router-dom";
import {
  AnimatePresence,
  Variants,
  cubicBezier,
  motion,
  useMotionValue,
  useSpring,
  useWillChange,
} from "framer-motion";
import animation from "../constants/animation";
import useData from "../client/hooks/useData";
import { client } from "../client/sanityClient";

const thumbnail: Variants = {
  initial: (dir: number) => ({
    translateY: 400 * dir,
  }),
  animate: {
    translateY: 0,
    transition: {
      duration: 0.4,
      ease: animation.EASING,
    },
  },
  exit: (dir: number) => ({
    translateY: -400 * dir,
    transition: {
      duration: 0.4,
      ease: animation.EASING,
    },
  }),
};

const thumbnailContainer: Variants = {
  initial: {
    opacity: 0,
    scale: 0.1,
    transition: {
      duration: 0.3,
      ease: animation.EASING,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: animation.EASING,
    },
  },
};

const OFFSET_Y = 150;
const OFFSET_X = 400;

const RecentProjects = () => {
  const [lastHovered, setLastHovered] = useState(0);
  const [currentHover, setCurrentHover] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const { projects, error } = useData();

  const willChange = useWillChange();
  const navigate = useNavigate();

  // const selectedProjects = [projects[0], projects[1], projects[2], projects[3]];

  const mouseX = useSpring(0, {
    bounce: 0,
    stiffness: 300,
    damping: 50,
    mass: 1,
  });
  const mouseY = useSpring(0, {
    bounce: 0,
    stiffness: 300,
    damping: 50,
    mass: 1,
  });

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.set(event.clientX - OFFSET_X);
    mouseY.set(event.clientY - OFFSET_Y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="projects-wrapper">
      <div className="recent-projects-container">
        <p>SELECTED WORK</p>
        <hr />
        <motion.div
          className="project-thumbnail"
          variants={thumbnailContainer}
          initial="initial"
          animate={isHovering ? "animate" : "initial"}
          style={{ x: mouseX, y: mouseY }}
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentHover}
              variants={thumbnail}
              animate="animate"
              exit={"exit"}
              initial="initial"
              style={{ willChange }}
              custom={lastHovered > currentHover ? 1 : -1}
              src={projects[currentHover]?.thumb.asset.url}
            />
          </AnimatePresence>
        </motion.div>
        {projects.map((item, index) => (
          <RecentProjectListItem
            setIsHovering={setIsHovering}
            item={item}
            key={index}
            index={index}
            lastHovered={lastHovered}
            setCurrentHover={setCurrentHover}
            setLastHovered={setLastHovered}
          />
        ))}
        <span style={{ marginBottom: "3rem" }} />
        <CTAButton action={() => navigate("/projects")} title="More Projects" />
      </div>
    </div>
  );
};

export default RecentProjects;
