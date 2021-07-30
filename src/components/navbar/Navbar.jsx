import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import DehazeIcon from "@material-ui/icons/Dehaze";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [active, isActive] = useState(false);
  const [show, handleShow] = useState(false);

  const openMenu = () => {
    isActive(!active);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <a href="#home">
        <img
          src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"
          alt=""
          className="navbar__logo"
        />
      </a>

      <div className={`navbar__items ${active && "navbar__menuActive"}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
      </div>

      {active ? (
        <CloseIcon onClick={openMenu} className="navbar__menuIcon" />
      ) : (
        <DehazeIcon onClick={openMenu} className="navbar__menuIcon" />
      )}
    </div>
  );
};

export default Navbar;
