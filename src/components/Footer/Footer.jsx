import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} movies.az</p>
        <ul className="footer-links">
          <li><a href="#about">Haqqımızda</a></li>
          <li><a href="#services">Xidmətlər</a></li>
          <li><a href="#contact">Əlaqə</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
