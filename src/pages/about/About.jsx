import React from "react";
import { useSelector } from "react-redux";
import "./About.css";

const About = () => {
  const info = useSelector(state => state.info.infos[0]);
  return (
    <div id="about" className="about">
      <div className="about__image">
        <img src={info.photo} alt="" />
      </div>

      <div className="about__allDetails">
        <h1>About Me</h1>
        <p>
          Hello iam Md Jakaria. Iam from Bangladesh. and iam a React Developer
        </p>

        <div className="about__bioItems">
          <p>
            <strong>Name:</strong> <span>{info.nickName}</span>
          </p>
          <p>
            <strong>Address:</strong> <span>{info.address}</span>
          </p>
          <p>
            <strong>Email:</strong> <span>{info.email}</span>
          </p>
          <p>
            <strong>Profession:</strong> <span>Programmer</span>
          </p>
        </div>

        <h2>
          <span>55</span>Project Complete
        </h2>

        <button>Dowload CV</button>
      </div>
    </div>
  );
};

export default About;
