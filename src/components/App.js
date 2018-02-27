import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/App.css";

import NavTest from "./navbar";
import ImgCarousel from "./img_carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./header.js";
import PictureCombo from "./picture_combo";
import FlipCard from "./flip_cards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavTest />
        <Header />
        <div>
          <FlipCard />
          <p className="App-intro">
            Don&#39;t wanna have your hand where your hip be at!
          </p>
          <PictureCombo />
          <ImgCarousel />
        </div>
      </div>
    );
  }
}

export default App;
