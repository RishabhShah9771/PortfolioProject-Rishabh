/* eslint-disable no-unused-vars */
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">&lt;Rishabh Shah/&gt;</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="http://www.linkedin.com/in/rishabh-shah-9bb242aa"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/RishabhShah9771"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Rishabh Shah. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
