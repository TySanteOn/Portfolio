import React from "react";

const Header = () => {
  return (<header className="header" id="header">
    <ul className="header-ul column">
      <li className="header-li"><a href="#hi">Hi</a></li>
      <li className="header-li"><a href="#work">Work</a></li>
      <li className="header-li"><a href="#skills">Skills</a></li>
      <li className="header-li"><a href="#contact">Contact</a></li>
      <li id="logo-in-header" className="logo-in-header"><a href="#content"><img src="./assets/logo.png" alt="logo" width="100" /></a> </li>
    </ul>
  </header>);
};

export default Header;