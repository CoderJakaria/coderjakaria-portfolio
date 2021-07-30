import React, { useEffect, useState } from "react";
import "./Skills.css";
import "react-circular-progressbar/dist/styles.css";
import SkillProgress from "../../components/skillProgress/SkillProgess";
import SkillBar from "../../components/skillBar/SkillBar";

const Skills = () => {
  const [isAnimations, setIsAnimations] = useState(false);

  useEffect(() => {
    setIsAnimations(true);

    return () => setIsAnimations(false);
  }, []);

  return (
    <div id="skills" className="skills">
      <h1 className="skills__title">Skills</h1>
      <div className="skills__boxes">
        {/* <SkillProgress progress={95} title="HTML" week={45} month={93} />
        <SkillProgress progress={90} title="CSS" week={39} month={87} />
        <SkillProgress
          progress={80}
          title="Javascript (JS)"
          week={30}
          month={76}
        />
        <SkillProgress progress={72} title="React JS" week={44} month={90} /> */}
      </div>

      <div className="skills__bars">
        <SkillBar isAnimations={isAnimations} progress={95} title="HTML5" />
        <SkillBar isAnimations={isAnimations} progress={90} title="CSS3" />
        <SkillBar
          isAnimations={isAnimations}
          progress={80}
          title="Javascript (JS)"
        />
        <SkillBar isAnimations={isAnimations} progress={72} title="React JS" />
        <SkillBar isAnimations={isAnimations} progress={65} title="Next JS" />
        <SkillBar isAnimations={isAnimations} progress={64} title="Node JS" />
      </div>
    </div>
  );
};

export default Skills;
