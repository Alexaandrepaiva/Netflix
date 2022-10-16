import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from ".././img/logo-nobg.png";
import avatar from ".././img/avatar-hero.png";

export default function Nav() {
  const [show, handleShow] = useState(false);
  
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className="nav_contents">
      <img
        className="nav_logo"
        src={logo}
        alt="logo"
      />
      <img
        className="nav_avatar"
        src={avatar}
        alt="avatar"
      />
      </div>
    </div>
  );
}
