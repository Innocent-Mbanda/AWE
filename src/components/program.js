import React, { useEffect } from "react";
import bugesera from "../assets/img/bugesera.jpeg";
import kigali from "../assets/img/kigali.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Program = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <div className="program-section" id="program">
        <div className="container">
          <div className="program">
            <h2
              className="program-title"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              About
              <br />
              <sup>
                <ion-icon
                  name="star-half-outline"
                  className="program-icon"
                ></ion-icon>
              </sup>
              <span>AWE &mdash; Program </span>
              <sup>
                <ion-icon
                  name="star-half-outline"
                  className="program-icon"
                ></ion-icon>
              </sup>
            </h2>
            <p
              className="program-first-paragraph"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              U.S. Embassy Kigali announces the opening of applications for the
              2nd cohort of the Academy for Women Entrepreneurs (AWE) training
              program, a Department of State initiative to support women
              entrepreneurs globally. Through the academy, Rwanda women
              entrepreneurs aged 18-35 will receive personalized business
              mentorship, as well as professional knowledge, tools and networks,
              in order to turn their ideas into successful businesses.
            </p>
          </div>
          <div className="program-container" id="apply">
            <div
              className="card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card-img">
                <img src={bugesera} alt="bugesera " className="program-img" />
                <div className="program-title-position">
                  <h3 className="program-location-title">Bugesera Campus</h3>
                </div>
              </div>

              <div className="program-content">
                <p className="program-paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Unde, a voluptates odit excepturi aliquid quisquam quae, ab
                  sint neque adipisci illo deserunt mollitia delectus quaerat
                  consequatur dolores. Dolorem, in dolor?
                </p>
                <div className="btn-program-sm">
                  <a href="/apply/bugesera" className="btn-text">
                    Apply Now &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="card-img">
                <img src={kigali} alt="kigali " className="program-img" />
                <div className="program-title-position">
                  <h3 className="program-location-title">Kigali Campus</h3>
                </div>
              </div>
              <div className="program-content">
                <p className="program-paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Unde, a voluptates odit excepturi aliquid quisquam quae, ab
                  sint neque adipisci illo deserunt mollitia delectus quaerat
                  consequatur dolores. Dolorem, in dolor?
                </p>
                <div className="btn-program-sm">
                  <a href="/apply/kigali" className="btn-text">
                    Apply Now &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Program;
