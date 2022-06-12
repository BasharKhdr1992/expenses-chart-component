import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <p className="header-title">My balance</p>
        <p className="header-balance">$921.48</p>
      </div>
      <div className="header-right">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
