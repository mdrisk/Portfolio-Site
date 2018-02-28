import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';

import NavTest from './navbar';
import ImgCarousel from './img_carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './header.js';
import PictureCombo from './picture_combo';
import FlipCard from './flip_cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavTest />
        <Header />
        <div>
          <div className="d-flex justify-content-center">
            <h2 className="App-intro ">
              Hello and Welcome! Pull up a chair, a seat, a stool and gather
              &#39;round as I weave my tale. Stories of adventure! From living
              and teaching in Japan, to living and teaching here in the states.
              And now I set forth on my greatest adventure yet, becoming a
              professional developer!
            </h2>
          </div>
          <FlipCard />
          <PictureCombo />
          <ImgCarousel />
        </div>
      </div>
    );
  }
}

export default App;
