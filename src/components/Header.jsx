import React from "react";

const Header = () => {
  return (<header id="hi">
    <ul className="header-ul">
      <div className="row">
        <li className="header-li"><a href="#hi">Hi</a></li>
        <li className="header-li"><a href="#work">Work</a></li>
        <li className="header-li"><a href="#skills">Skills</a></li>
        <li className="header-li"><a href="#contact">Contact</a></li>
      </div>
      <li id="logo-in-header" className=""><a href="https://instagram.com/tysanteon"><img src="./assets/logo-red.png" alt="logo" width="70" /></a> </li>
    </ul>
  </header>);
};

export default Header;