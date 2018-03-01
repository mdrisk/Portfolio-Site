import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/App.css";

import NavTest from "./navbar";
import ImgCarousel from "./img_carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./header.js";
import PictureCombo from "./picture_combo";
import FlipCard from "./flip_cards";
import Contact from "./contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <div className="mid-content">
            <div className="d-flex justify-content-center">
              <h2 className="mid-lvl-text">Skills</h2>
            </div>
            <FlipCard id="skills" />
          </div>
          <PictureCombo id="projects" />
          <ImgCarousel id="about-me" />
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;
// <NavTest />
