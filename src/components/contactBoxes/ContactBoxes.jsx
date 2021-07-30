import React from "react";
import "./ContactBoxes.css";

const ContactBoxes = ({ Icon, title, description, isLink }) => {
  return (
    <div className="contactBoxes">
      <Icon className="contactBoxes__logo" />
      <h3>{title}</h3>
      <p className={`${isLink && "contactBoxes__isLink"}`}>{description}</p>
    </div>
  );
};

export default ContactBoxes;
