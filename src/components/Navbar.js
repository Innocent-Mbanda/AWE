import React from "react";
import logo from "../assets/img/logo-removebg.png";

const Navbar = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={logo} className="logo" alt="awe-rwanda logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#" className="main-nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              About-US
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Program
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Contact-us
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link btn-apply-sm">
              Apply Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
