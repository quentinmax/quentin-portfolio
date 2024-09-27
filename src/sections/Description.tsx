import React, { useRef } from "react";
import CTAButton from "../components/CTAButton";
import { useNavigate } from "react-router-dom";
import ElevateText from "../components/ElevateText";

const Description = () => {
  const navigate = useNavigate();
  const containerRef = useRef();

  return (
    // @ts-ignore
    <section className="description-wrapper" ref={containerRef}>
      <div className="content-wrapper">
        <ElevateText delay={0} containerRef={containerRef} inView={true}>
          <p className="description-inner">
            I bring a blend of <span className="highlight">creativity</span> and{" "}
            <span className="highlight">technical expertise</span>
          </p>
        </ElevateText>
        <ElevateText delay={0.2} containerRef={containerRef} inView={true}>
          <p className="description-inner">
            to every project, delivering robust applications
          </p>
        </ElevateText>
        <ElevateText delay={0.4} containerRef={containerRef} inView={true}>
          <p className="description-inner">that make a difference.</p>
        </ElevateText>
      </div>
      <div className="content-wrapper">
        <CTAButton title="About Me" action={() => navigate("/about")} />
      </div>
    </section>
  );
};

export default Description;
