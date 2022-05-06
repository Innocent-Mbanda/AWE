import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./queries.css";
import "./apply.css";
import graduate from "../assets/img/graduate.JPG";
import sitGraduate from "../assets/img/sitGraduate.JPG";
import cake from "../assets/img/cake.JPG";
import women from "../assets/img/aweStudentBackgroundImg.jpg";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
const Bugesera = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <div className="bugesera-container">
        <div
          className="u-center-text u-margin-bottom-big"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h2 className="heading-secondary">Bugesera Application</h2>
        </div>
        <div className="row">
          <div
            className="col-1"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <h3 className="heading-tertiary u-margin-bottom-small">
              Academy Women Entrepreneur Bugesera
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              officiis reprehenderit provident velit distinctio itaque harum.
              Quaerat repudiandae animi quam enim fuga eos, accusamus nobis rem,
              perferendis accusantium distinctio libero.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Academy Women Entrepreneur Bugesera
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              officiis reprehenderit provident velit distinctio itaque harum.
              Quaerat repudiandae animi quam enim.
            </p>
            <a href="#" class="btn-text">
              Apply Now &rarr;
            </a>
          </div>
          <div
            className="col-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <div className="composition">
              <img
                src={cake}
                alt="graduate img"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={sitGraduate}
                alt="sit graduate student img"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={women}
                alt="cake graduate img"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Bugesera;
