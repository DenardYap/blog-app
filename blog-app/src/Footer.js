import React from "react";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-normal">
        <IconContext.Provider value={{ className: "icons" }}>
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaLinkedin />
          <FaTwitterSquare />
        </IconContext.Provider>
        <h4 className="footer-font">
          Design and programmed by Bernard Kah Huan Yap
        </h4>
        <h5 className="footer-font-2">
          Copyright @ 2022 - 2023 | All rights reserved |{" "}
          <a href="#">Terms and condition</a>
        </h5>
      </div>
      <div className="footer-contact">
        <h3>Contact information</h3>
        <span className="email-wrapper">
          <h4>bernerd@umich.edu</h4>
          <AiOutlineMail size={"10%"} />
        </span>
        <h5>+1734-934-2963 | ANN ARBOR, MI 48105</h5>
      </div>
    </div>
  );
};

export default Footer;
