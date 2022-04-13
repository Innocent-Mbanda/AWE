import React from "react";
import HomeLayout from "../components/HomeLayout";
import "./style.css";
import Footer from "../components/Footer";
import america from "../assets/img/america.png";
import igire from "../assets/img/igire.png";
import rwanda from "../assets/img/rwanda.svg";
import noble from "../assets/img/noble.jpeg";
import "./queries.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <HomeLayout />
      </div>

      <div className="about-container" id="about">
        <div className="container">
          <div className="about">
            <h2 className="about-title">
              About
              <br />
              <sup>
                <ion-icon
                  name="star-half-outline"
                  className="about-icon"
                ></ion-icon>
              </sup>
              <span>AWE &mdash; Rwanda </span>
              <sup>
                <ion-icon
                  name="star-half-outline"
                  className="about-icon"
                ></ion-icon>
              </sup>
            </h2>
            <p className="about-first-paragraph">
              U.S. Embassy Kigali announces the opening of applications for the
              2nd cohort of the Academy for Women Entrepreneurs (AWE) training
              program, a Department of State initiative to support women
              entrepreneurs globally. Through the academy, Rwanda women
              entrepreneurs aged 18-35 will receive personalized business
              mentorship, as well as professional knowledge, tools and networks,
              in order to turn their ideas into successful businesses.
            </p>
          </div>
        </div>
        <div className="other-part">
          <div className="video-part">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/C09DUw_JNDo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-right-part">
            <h2 className="video-heading">
              <ion-icon
                name="trophy-outline"
                className="about-icon"
                style={{ color: "#cb3349" }}
              ></ion-icon>{" "}
              AWE Achievement
            </h2>
            <p className="video-paragraph">
              The program will be carried out by the U.S. Embassy, in
              partnership with Igire Rwanda Organization and Noble Women. AWE
              uses DreamBuilder, an online training program on women’s
              entrepreneurship developed through a partnership between Arizona
              State University’s Thunderbird School of Management and
              Freeport-McMoRan. The curriculum teaches women to create their own
              business plans, understand how to raise capital, and connect with
              networks of successful business owners.
            </p>
          </div>
        </div>
      </div>

      <div className="section-partner">
        <div className="container">
          <h2 className="heading-partner-in">Partner With</h2>
          <div className="logos">
            <img src={america} alt="america flag" />
            <img src={igire} alt="igire flag" />
            <img src={noble} alt="noble flag" />
            <img src={rwanda} alt="rwanda flag" />
          </div>
        </div>
      </div>
      <div className="program-section" id="program">
        <div className="container">
          <h2 className="program-title">our program</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
