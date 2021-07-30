import React from "react";
import "./FooterArrBox.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const FooterArrBox = ({ text }) => {
  return (
    <a href="#" className="footerArrBox">
      <ArrowRightAltIcon className="footerArrBox__icon" />
      {text}
    </a>
  );
};

export default FooterArrBox;
