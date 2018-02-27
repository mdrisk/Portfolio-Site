import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/App.css";
import NavTest from "./navbar";
import ImgCarousel from "./img_carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PictureList from "./picture_list";
import PictureDetail from "./picture_detail";

var picture2 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1509667427/twitchPic_ef1q7j.png",
  title: "Twitch Status",
  id: 1,
  link: "https://codepen.io/mdrisk/full/WXrQdK"
};
var picture1 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1510585469/TTTPic_gxtkf8.png",
  title: "JS Tic-Tac-Toe",
  id: 2,
  link: "https://codepen.io/mdrisk/full/zPNdxj/"
};
var picture3 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1509117075/weather_f9r9wt.png",
  title: "Weather API",
  id: 3,
  link: "https://codepen.io/mdrisk/full/QOLJPd/"
};
var picture4 = {
  url:
    "https://res.cloudinary.com/mdrisk/image/upload/v1509371156/Capture4_fiosmi.png",
  title: "Wikipedia",
  id: 4,
  link: "https://codepen.io/mdrisk/full/OOJwbd/"
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
      <div className="App">
        <NavTest />
        <header className="App-header">
          <div className="App-title">
            <div>
              <h1>A Winding Journey</h1>
              <h2>A Developer&#39;s Tale</h2>
            </div>
          </div>
        </header>
        <div>
          <p className="App-intro">
            Don&#39;t wanna have your hand where your hip be at!
          </p>
          <div className="color-one spacer ">
            <div className="container selector-border">
              <div>
                <PictureDetail picture={this.state.selectedPicture} />
              </div>
              <div>
                <PictureList
                  onPictureSelect={selectedPicture =>
                    this.setState({ selectedPicture })
                  }
                  pictures={this.state.pictures}
                />
              </div>
            </div>
          </div>
          <div className="about-me-bg spacer d-flex align-items-center">
            <div className="container spacer ">
              <div className="row ">
                <div className="col-md-6 about-me">
                  <ImgCarousel className="Carousel" />
                </div>
                <div className="col-md-6 about-me">
                  <h1>About me!</h1>
                  <p>
                    lorim ipsum lorim ipsum lorim ipsum lorim ipsum lorim ipsum
                    lorim ipsum lorim ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
