import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import instar from "../assets/images/instar.png";
import git from "../assets/images/git.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrap">
        <div className="contact-header">Contact Us</div>
        <div className="contact-main">
          <div className="contact-logo">
            <img src={logo} alt="로고" />
          </div>
          <div className="contact-logo2">EASY EXCEL</div>
          <div className="contact-git">
            <img src={git} alt="로고" />
          </div>
          <div className="contact-instar">
            <img src={instar} alt="로고" />
          </div>
        </div>
      </div>
    </div>
  );
}
