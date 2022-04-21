import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Bugesera from "../views/bugesera";
import About from "../views/about";
import Program from "../views/program";
import Kigali from "../views/kigali";
import Contact from "../views/contact";

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/program" element={<Program />}></Route>
      <Route exact path="/apply/bugesera" element={<Bugesera />}></Route>
      <Route exact path="/apply/kigali" element={<Kigali />}></Route>
      <Route exact path="/contact-us" element={<Contact />}></Route>
    </Routes>
  );
};
export default Index;
