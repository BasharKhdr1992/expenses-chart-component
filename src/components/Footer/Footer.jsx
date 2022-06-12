import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-title">Total this month</p>
      <div className="footer-main">
        <p className="monthly-spent">$478.33</p>
        <div className="lms">
          <p className="lms-amount">+2.4%</p>
          <p className="lms-text">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
