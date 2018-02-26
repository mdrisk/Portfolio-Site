import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/App.css";
import NavTest from "./navbar";
import HeaderCarousel from "./header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PictureList from "./picture_list";
import PictureDetail from "./picture_detail";

var picture1 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1509667427/twitchPic_ef1q7j.png",
  title: "Twitch Status Board",
  id: 1
};
var picture2 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1510585469/TTTPic_gxtkf8.png",
  title: "JS Tic-Tac-Toe",
  id: 2
};
var picture3 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1509117075/weather_f9r9wt.png",
  title: "Weather API",
  id: 3
};
var picture4 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1509371156/Capture4_fiosmi.png",
  title: "Wikipedia Searcher",
  id: 4
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [picture1, picture2, picture3, picture4],
      selectedPicture: picture1
    };
  }

  render() {
    return (
      <div className="App container">
        <NavTest />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Risk-React</h1>
        </header>
        <p className="App-intro">
          Don&#39;t wanna have your hand where your hip be at!
        </p>
        <div className="row">
          <PictureDetail picture={this.state.selectedPicture} />
          <PictureList
            onPictureSelect={selectedPicture =>
              this.setState({ selectedPicture })
            }
            pictures={this.state.pictures}
          />
        </div>
        <div className="col-md-6">
          <HeaderCarousel className="Carousel" />
        </div>
      </div>
    );
  }
}

export default App;
