import React from "react";
import "./SkillBar.css";
import SKillCustom from "../../components/skillCustom/SkillCustom";

const SkillBar = ({ progress, title, isAnimations }) => {
  return (
    <div className="skillBar">
      <div className="skillBar__texts">
        <p>{title}</p>
        <p>{progress}%</p>
      </div>
      <div className="skillBar_bar">
        <SKillCustom isAnimations={isAnimations} progress={progress} />
      </div>
    </div>
  );
};

export default SkillBar;
