import React, { useEffect, useState } from "react";
import PreLoader from "../../components/preloader/PreLoader";
import ProjectBox from "../../components/projectBox/ProjectBox";
import { db } from "../../firebase";
import "./Project.css";

const Project = () => {
  const [projectBox, setProjectBox] = useState([]);
  const [loader, isLoader] = useState(false);

  useEffect(() => {
    db.collection("projects").onSnapshot(snapshot => {
      setProjectBox(snapshot.docs.map(doc => doc.data()));
      isLoader(true);
    });
  }, []);

  return (
    <div id="projects" className="project">
      <h2 className="project__title">My Projects</h2>
      <div className="project__boxes">
        {loader ? (
          projectBox
            ?.slice(0, 8)
            .map(project => (
              <ProjectBox
                heading={project.heading}
                description={project.description}
                imageURL={project.imageURL}
                link={project.link}
              />
            ))
        ) : (
          <PreLoader />
        )}
      </div>
      <a href="#" className="project__seeAllBtn">
        See All...
      </a>
    </div>
  );
};

export default Project;
