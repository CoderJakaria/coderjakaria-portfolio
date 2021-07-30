import React from "react";
import "./ProjectBox.css";

const ProjectBox = ({ heading, description, imageURL, link }) => {
  return (
    <div className="projectBox">
      <img src={`${imageURL}`} alt={`${imageURL}`} />
      <div className="projectBox__info">
        <h1>{heading}</h1>
        <p>{description}</p>
        <a href={`${link}`}>Go Here</a>
      </div>
    </div>
  );
};

export default ProjectBox;
