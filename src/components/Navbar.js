import React, { useState } from "react";
import logo from "../assets/img/logo-removebg.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className="header">
      <a href="#">
        <img src={logo} className="logo" alt="awe-rwanda logo" />
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <nav className="main-nav">
        <ul className={click ? "main-nav-list active" : "main-nav-list"}>
          <li>
            <a href="#" className="main-nav-link" onclick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link" onclick={closeMobileMenu}>
              About-US
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link" onclick={closeMobileMenu}>
              Program
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link" onclick={closeMobileMenu}>
              Contact-us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="main-nav-link btn-apply-sm"
              onclick={closeMobileMenu}
            >
              Apply Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
