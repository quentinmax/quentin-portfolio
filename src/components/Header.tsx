import React from "react";
import ArrowLeft from "../assets/images/arrow-left.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="back-btn" onClick={() => navigate("/..")}>
        <img src={ArrowLeft} height={30} />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
