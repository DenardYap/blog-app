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
    <footer className="footer">
      <div className="footer-normal">
        <IconContext.Provider value={{ className: "icons" }}>
          <a
            href="https://www.facebook.com/kahhuan.yap.5"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/DenardYap"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/bernutyap123/"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/bernard-yap/"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <FaTwitterSquare />
          </a>
        </IconContext.Provider>
        <h4 className="footer-font">
          Designed and programmed by Bernard Kah Huan Yap
        </h4>
        <h5 className="footer-font-2">
          Copyright @ 2022 - 2023 | All rights reserved |{" "}
          <a href="#">Terms and condition</a>
        </h5>
      </div>
      <div className="footer-contact">
        <h3>Contact information</h3>
        <span className="email-wrapper">
          <a href="mailto:bernerd@umich.com">
            <h4>bernerd@umich.edu</h4>
          </a>
          <a href="mailto:bernerd@umich.com">
            <AiOutlineMail size={"30%"} cursor={"pointer"} />
          </a>
        </span>
        <h5>+1734-934-2963 | ANN ARBOR, MI 48105</h5>
      </div>
    </footer>
  );
};

export default Footer;
