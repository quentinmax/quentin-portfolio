import React from "react";

type Props = {
  href: string;
  title: string;
};

const AnimatedLink: React.FC<Props> = ({ href, title }) => {
  return (
    <div className="animated-link">
      <a href={href} target="_blank">
        {title}
      </a>
      <span className="link-arrow">{"\u2197"}</span>
    </div>
  );
};

export default AnimatedLink;
