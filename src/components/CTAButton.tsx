import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface Props {
  title: string;
  action: Function;
  style?: "dark" | "light";
  type?: "submit" | "button" | "reset";
}

const CTAButton: React.FC<Props> = ({
  title,
  action,
  style = "dark",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`cta-btn ${style === "light" ? "light" : ""}`}
      onClick={() => action()}
    >
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
