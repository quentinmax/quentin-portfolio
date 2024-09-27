import React, { useEffect, useState } from "react";

const MagicText = () => {
  const [index, setIndex] = useState(0);
  const interval = 1500;

  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + 1;

  const animate = (star: any) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };

  useEffect(() => {
    for (const star of document.getElementsByClassName("magic-star")) {
      //   setTimeout(() => {
      //     animate(star);
      //     setInterval(() => animate(star), interval);
      //   }, rand(100, 900));
      setInterval(() => animate(star), interval);
    }
  }, []);

  return (
    <p className="magic-text-effect">
      Based in{" "}
      <span className="magic">
        <span className="magic-star">
          <svg viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </span>
        {/* <span className="magic-star">
          <svg viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </span>
        <span className="magic-star">
          <svg viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </span> */}
        <span className="magic-text">Germany</span>
      </span>
    </p>
  );
};

export default MagicText;
