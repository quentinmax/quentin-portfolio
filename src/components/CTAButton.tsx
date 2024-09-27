import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props {
  title: string;
  action: Function;
  style?: "dark" | "light";
}

const CTAButton: React.FC<Props> = ({ title, action, style = "dark" }) => {
  return (
    <button className="cta-btn" onClick={() => action()}>
      <div className="cta-btn-inner">
        <p>{title}</p>
        <HiOutlineArrowNarrowRight size={25} />
      </div>
      <span
        style={{ backgroundColor: style === "dark" ? "#1e1e1e" : "white" }}
      />
    </button>
  );
};

export default CTAButton;
