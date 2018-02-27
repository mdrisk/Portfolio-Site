import React, { Component } from "react";
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

class PictureCombo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [picture1, picture2, picture3, picture4],
      selectedPicture: picture1
    };
  }

  render() {
    return (
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
    );
  }
}

export default PictureCombo;
