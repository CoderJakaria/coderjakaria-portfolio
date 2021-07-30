import React from "react";
import ContactBoxes from "../../components/contactBoxes/ContactBoxes";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

import BusinessIcon from "@material-ui/icons/Business";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import PublicIcon from "@material-ui/icons/Public";
import { useSelector } from "react-redux";

const Contact = () => {
  const info = useSelector(state => state.info.infos[0]);

  const [state, handleSubmit] = useForm("xzbyjezn");
  // if (state.succeeded) {
  //   // setTimeout(() => {
  //   //   state.succeeded = false;
  //   // }, 5000);
  // }

  return (
    <div id="contact" className="contact">
      <div className="contact__headTitles">
        <h2 className="contact__title">Contact Me</h2>
        <p>
          For more information you can contact me throw email or phone. Happy
          Coding.
        </p>
      </div>
      <div className="contact__boxes">
        <ContactBoxes
          Icon={BusinessIcon}
          title="Address"
          description={info.address}
        />
        <ContactBoxes
          Icon={PhoneIcon}
          title="Contact Number"
          description={info.phone}
          isLink
        />
        <ContactBoxes
          Icon={SendIcon}
          title="Email Address"
          description={info.email}
          isLink
        />
        <ContactBoxes
          Icon={PublicIcon}
          title="Website"
          description={info.website}
          isLink
        />
      </div>
      <div className="contact__inputes">
        <div className="contact__imgCon">
          <img src={info.photo} alt="" />
        </div>

        <div className="contact__inputInfo">
          {state.succeeded && (
            <div className="contact__form_submit_success">
              <p>Submitting Successfully</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Your Name" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              type="text"
              id="email"
              placeholder="Your Email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            {/* <input type="text" placeholder="Subject" /> */}

            <textarea
              placeholder="Message"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
