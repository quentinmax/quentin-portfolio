import React from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import CTAButton from "../components/CTAButton";

const Footer = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.8, 1], [0, 0]);

  return (
    <motion.div className="footer-container" style={{ y }}>
      <h1>
        I caught your interest?
        <br /> Let's talk!
      </h1>
      {/* <CTAButton title={"Contact"} action={() => {}} /> */}
      <hr />
      <div className="footer-content">
        <div className="nav-buttons">
          <Link to={"/work"}>Work</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
      <div className="footer-info">
        <p>Copyright © 2023 | Made by Quentin Höhne with ♥️ and React</p>
        <p>Version 0.4</p>
      </div>
    </motion.div>
  );
};

export default Footer;
