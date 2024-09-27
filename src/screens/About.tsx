import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CTAButton from "../components/CTAButton";

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  return (
    <div className="projects-container">
      <h2>About me</h2>
      <hr color="#c8bdb5" />
      <CTAButton title="Back" action={() => navigate("/")} />
    </div>
  );
};

export default About;
