import React, { useEffect } from "react";
import logo from "../assets/img/awef.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const current = new Date();
  const date = current.getFullYear();

  return (
    <footer
      className="footer"
      // data-aos="fade-left"
      // data-aos-easing="linear"
      // data-aos-duration="1000"
    >
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="/" className="footer-logo">
            <img
              src={logo}
              alt="AWE logo"
              style={{ objectFit: "cover" }}
              className="logo-footer"
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
              <a
                href="https://twitter.com/AWERwanda
              "
                className="footer-link"
              >
                <ion-icon
                  name="logo-twitter"
                  className="social-icon"
                ></ion-icon>
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy;<span className="year">{date}</span> by AWE-Rwanda,
            Inc. All rights reserved
          </p>
        </div>
        <div class="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">623 Kacyiru St., 2nd Floor, Kigali Rwanda</p>
            <p>
              <a className="footer-link" href="tel:+250-788-737-287">
                +250-788-737-287
              </a>
              <br />
              <a className="footer-link" href="mailto:awerwanda@gmail.com">
                awerwanda@gmail.com
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
                {/* iOS app */}
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                {/* Android app */}
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a href="/about" className="footer-link">
                About AWE{" "}
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                For Business
              </a>
            </li>
            <li>
              <a href="#partner" className="footer-link">
                partners
              </a>
            </li>
            <li>
              <a href="/program" className="footer-link">
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
