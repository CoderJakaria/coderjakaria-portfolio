import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div id="services" className="service">
      {/* <div className="service__headerTitle"> */}
      <h2 className="service__title">My Services</h2>
      {/* </div> */}

      <div className="service__boxs">
        <div className="service__box">
          <i class="fas fa-code"></i>

          <h2>Front-End</h2>
          <p>I can use React JS for front-end and also use next JS.</p>
        </div>

        <div className="service__box">
          <i class="fas fa-cogs"></i>

          <h2>Back-End</h2>
          <p>
            I can use Node JS for front-end and for database i will mongoDB.
          </p>
        </div>

        <div className="service__box">
          <i class="far fa-chart-bar"></i>

          <h2>Web Development</h2>
          <p>
            I can use all front-end and back-end technology for web development
          </p>
        </div>

        <div className="service__box">
          <i class="fas fa-drafting-compass"></i>

          <h2>Graphic Designing</h2>
          <p>
            I know little bit of graphic designing for simple work like making
            logo. background removing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
