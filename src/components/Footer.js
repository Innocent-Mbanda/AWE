import React from "react";
import logo from "../assets/img/awef.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img
              src={logo}
              alt="AWE logo"
              style={{ objectFit: "cover" }}
              className="logo"
            />
          </a>
          <ul className="social-links">
            <li>
              <a href="#" className="footer-link">
                <ion-icon
                  name="logo-instagram"
                  className="social-icon"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <ion-icon
                  name="logo-facebook"
                  className="social-icon"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <ion-icon
                  name="logo-twitter"
                  className="social-icon"
                ></ion-icon>
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy;<span className="year">2027</span> by AWE-Rwanda,
            Inc. All rights reserved
          </p>
        </div>
        <div class="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">623 Kacyiru St., 2nd Floor, Kigali Rwanda</p>
            <p>
              <a className="footer-link" href="tel:078-562-7690">
                078-562-7690
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@awerwanda.com">
                hello@awe-rwanda.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a href="#" className="footer-link">
                Create account
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                iOS app
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a href="#" className="footer-link">
                About AWE{" "}
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                For Business
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                partners
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a href="#" className="footer-link">
                AWE directory
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
