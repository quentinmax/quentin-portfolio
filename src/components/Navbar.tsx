import React from "react";
import { Link } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import animation from "../constants/animation";

const Navbar = () => {
  const navbar: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 2,
        ease: animation.EASING,
      },
    },
  };

  return (
    <motion.nav
      variants={navbar}
      animate="animate"
      initial="initial"
      className="navbar"
    >
      <Link to={"/"}>Quentin Höhne</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/projects"}>Work</Link>
      <Link to={"/contact"}>Contact</Link>
    </motion.nav>
  );
};

export default Navbar;
