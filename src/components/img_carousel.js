import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

export default class ImgCarousel extends Component {
  render() {
    return (
      <div className="about-me-bg spacer d-flex align-items-center">
        <div className="container spacer ">
          <div className="row ">
            <div className="col-md-6 about-me">
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                showThumbs={false}
                showIndicators={false}
              >
                <div>
                  <img src="https://res.cloudinary.com/mdrisk/image/upload/v1519580787/solar_n9qfhq.jpg" />
                  <p className="legend">Pic 1</p>
                </div>
                <div>
                  <img src="https://res.cloudinary.com/mdrisk/image/upload/v1519580380/pic_n1rbhn.jpg" />
                  <p className="legend">Pic 2</p>
                </div>
                <div>
                  <img src="https://res.cloudinary.com/mdrisk/image/upload/v1519580787/fam1_zdwaxl.jpg" />
                  <p className="legend">Pic 3</p>
                </div>
              </Carousel>
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
    );
  }
}
