import React from "react";
import "./SkillProgress.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const SkillProgress = ({ progress, title, week, month }) => {
  return (
    <div className="skillProgress">
      <h3>{title}</h3>
      <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth="4"
          styles={buildStyles({
            rotation: 100,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `#007BFF`,
            textColor: "#222",
            trailColor: "#EEEEEE",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>

      <div className="skillProgress__timed">
        <div className="skillProgress__time">
          <h3>{week}%</h3>
          <p>Last Week</p>
        </div>
        <div className="skillProgress__time">
          <h3>{month}%</h3>
          <p>Last Month</p>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
