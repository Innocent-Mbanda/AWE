import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import women from "../assets/img/wpmen.avif";
import women1 from "../assets/img/women.jpg";
import women2 from "../assets/img/graduate.JPG";

const Kigali = () => {
  return (
    <>
      <Navbar />
      <div className="kigali-container">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Kigali Application</h2>
        </div>
        <div className="row">
          <div className="col-1">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Academy Women Entrepreneur Kigali
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              officiis reprehenderit provident velit distinctio itaque harum.
              Quaerat repudiandae animi quam enim fuga eos, accusamus nobis rem,
              perferendis accusantium distinctio libero.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Academy Women Entrepreneur Kigali
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
          <div className="col-2">
            <div className="composition">
              <img
                src={women1}
                alt="graduate img"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={women}
                alt="sit graduate student img"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={women2}
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
export default Kigali;
