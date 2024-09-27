import React, { Dispatch, SetStateAction, useState } from "react";
import projects from "../../data/projects";
import { Variants, motion } from "framer-motion";
import animation from "../../constants/animation";
import { useNavigate } from "react-router-dom";

interface Props {
  item: Project;
  index: number;
  lastHovered: number;
  setLastHovered: Function;
  setIsHovering: Dispatch<SetStateAction<boolean>>;
  setCurrentHover: Dispatch<SetStateAction<number>>;
}

const text: Variants = {
  initial: {
    translateX: 0,
    color: "#1e1e1e",
    transition: {
      duration: 0.6,
      ease: animation.EASING,
    },
  },
  hover: (direction: number) => ({
    translateX: direction * 30,
    color: "#c8bdb5",
    transition: {
      duration: 0.6,
      ease: animation.EASING,
    },
  }),
};

const RecentProjectListItem: React.FC<Props> = ({
  item,
  index,
  lastHovered,
  setLastHovered,
  setIsHovering,
  setCurrentHover,
}) => {
  const [animationState, setAnimationState] = useState("initial");

  const navigate = useNavigate();

  const hoverStart = () => {
    setIsHovering(true);
    setAnimationState("hover");
    setCurrentHover(index);
  };

  const hoverEnd = () => {
    setAnimationState("initial");
    setIsHovering(false);
    setLastHovered(index);
  };

  return (
    <motion.li
      className="list-item"
      onHoverEnd={hoverEnd}
      onHoverStart={hoverStart}
      onClick={() => navigate(`/project/${item.slug.current}`)}
    >
      <div className="list-item-content">
        <motion.h3
          variants={text}
          animate={animationState === "hover" ? "hover" : "initial"}
          initial="initial"
          custom={-1}
        >
          {item?.name}
        </motion.h3>
        <motion.p
          variants={text}
          animate={animationState === "hover" ? "hover" : "initial"}
          initial="initial"
          custom={1}
        >
          {item?.services.join(" & ")}
        </motion.p>
      </div>
      <hr />
    </motion.li>
  );
};

export default RecentProjectListItem;
