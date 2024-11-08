import React from "react";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import CTAButton from "../components/CTAButton";
import * as packageJson from "../../package.json";

const Footer = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0.8, 1], [400, 0]);

  return (
    <motion.div className="footer-container" style={{ y }}>
      <h1>
        I caught your interest?
        <br />{" "}
        <Link to={"/contact"} className="contact-link">
          Let's talk!
        </Link>
      </h1>
      <div className="underline" />
      {/* <CTAButton title={"Contact"} action={() => {}} /> */}
      <hr />
      <div className="footer-content">
        <div className="nav-buttons">
          <Link to={"/projects"}>Work</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
      <div className="footer-info">
        <p>Copyright © 2023 | Made by Quentin Höhne with ♥️ and React</p>
        <p>{`Version ${packageJson.version}`}</p>
      </div>
    </motion.div>
  );
};

export default Footer;
