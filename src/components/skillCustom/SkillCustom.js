import React from "react";
import "./SkillCustom.css";

const SKillCustom = ({ progress, isAnimations }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progressive">
      <div
        className={`${isAnimations && "progressive-done"}`}
        style={style}
      ></div>
    </div>
  );
};

export default SKillCustom;
