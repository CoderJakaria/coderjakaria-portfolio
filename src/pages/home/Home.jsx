import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import Typed from "typed.js";
import { useSelector } from "react-redux";

const Home = () => {
  const typeTarget = useRef(null);
  const info = useSelector(state => state.info.infos[0]);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "Programmer",
        "Web Developer",
        "Javascript Developer",
        "React Developer",
      ],
      typeSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="home">
      <div className="home__details">
        <h3>HEY! I AM</h3>
        <h1>{info.homeName}</h1>
        <h2>
          I'm a <span ref={typeTarget}></span>
        </h2>
      </div>
    </div>
  );
};

export default Home;
