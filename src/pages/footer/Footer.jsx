import React from "react";
import "./Footer.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import FooterArrBox from "../../components/footerArrowBox/FooterArrBox";
import { useSelector } from "react-redux";

const Footer = () => {
  const info = useSelector(state => state.info.infos[0]);

  return (
    <div className="footer">
      <div className="footer__boxes">
        <div className="footer__box">
          <h2>About</h2>
          <div className="footer__links__box">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="footer__socialBox">
              <a href={info.twitterLink} target="_blank">
                <TwitterIcon className="footer__socialBox__icon" />
              </a>
              <a href={info.facebookLink} target="_blank">
                <i className="fab fa-facebook-f footer__socialBox__icon"></i>
              </a>
              <a href={info.instagramLink} target="_blank">
                <InstagramIcon className="footer__socialBox__icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__box">
          <h2>Links</h2>
          <div className="footer__links__box">
            <FooterArrBox text="Home" />
            <FooterArrBox text="About" />
            <FooterArrBox text="Services" />
            <FooterArrBox text="Projects" />
            <FooterArrBox text="Blogs" />
            <FooterArrBox text="Contat" />
          </div>
        </div>

        <div className="footer__box">
          <h2>Service</h2>
          <div className="footer__links__box">
            <FooterArrBox text="Web Design" />
            <FooterArrBox text="Web Development" />
            <FooterArrBox text="Graphic Design" />
            <FooterArrBox text="React App" />
            <FooterArrBox text="Single Page App" />
            <FooterArrBox text="Ecommerce Web" />
          </div>
        </div>

        <div className="footer__box">
          <h2>Have a Question?</h2>
          <div className="footer__links__box">
            <div className="footer__links__box__con">
              <LocationOnIcon className="footer__lefts__icon" />
              {info.address}
            </div>
            <a href="#" className="footer__left__anchors">
              <PhoneIcon className="footer__lefts__icon" /> {info.phone}
            </a>
            <a href="#" className="footer__left__anchors">
              <EmailIcon className="footer__lefts__icon" /> {info.email}
            </a>
          </div>
        </div>
      </div>
      <p className="footer__copyRightText">
        Copyright ©2021 All rights reserved | This Website is made with by
        <a href="#">CoderJakaria</a>
      </p>
    </div>
  );
};

export default Footer;
