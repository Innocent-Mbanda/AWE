import React from "react";
import "./HomeLayout.css";
import Navbar from "./Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="home-container">
      <div style={{ minHeight: "100vh" }}>
        <Navbar />

        {children}
        <div className="home-text-box">
          <h1 className="home-text-title">
            Academy for Women Entrepreneur Rwanda
          </h1>
          <p className="home-text-paragraph">
            Are you a Rwandan Woman Entrepreneurs willing to be Empowered &
            Equiped with necessary skills to boost your business? The Academy
            for Women Entrepreneurs, is here for you.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeLayout;
