import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<FindUs />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
