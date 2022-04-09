import React from "react";
import logo from "../assets/img/awef.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            <img
              src={logo}
              alt="AWE logo"
              style={{ objectFit: "cover" }}
              class="logo"
            />
          </a>
          <ul class="social-links">
            <li>
              <a href="#" class="footer-link">
                <ion-icon name="logo-instagram" class="social-icon"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <ion-icon name="logo-facebook" class="social-icon"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <ion-icon name="logo-twitter" class="social-icon"></ion-icon>
              </a>
            </li>
          </ul>
          <p class="copyright">
            Copyright &copy;<span className="year">2022</span> by AWE-Rwanda,
            Inc. All rights reserved
          </p>
        </div>
        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">623 Kacyiru St., 2nd Floor, Kigali Rwanda</p>
            <p>
              <a class="footer-link" href="tel:078-562-7690">
                078-562-7690
              </a>
              <br />
              <a class="footer-link" href="mailto:hello@awerwanda.com">
                hello@awe-rwanda.com
              </a>
            </p>
          </address>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <a href="#" class="footer-link">
                Create account
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                iOS app
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a href="#" class="footer-link">
                About Omnifood{" "}
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                For Business
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Cooking partners
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a href="#" class="footer-link">
                Recipe directory
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Help center
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
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
