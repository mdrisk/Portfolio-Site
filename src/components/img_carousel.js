import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

export default class ImgCarousel extends Component {
  render() {
    return (
      <div className="about-me-bg d-flex align-items-center">
        <div className="container spacer ">
          <div className="row ">
            <div className="col-md-6 ">
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                showThumbs={false}
                showIndicators={false}
                style={{ borderRadius: "20px" }}
              >
                <div>
                  <img
                    className="about-me-left"
                    src="https://res.cloudinary.com/mdrisk/image/upload/v1519580787/solar_n9qfhq.jpg"
                  />
                </div>
                <div>
                  <img
                    className="about-me-left"
                    src="https://res.cloudinary.com/mdrisk/image/upload/v1519580380/pic_n1rbhn.jpg"
                  />
                </div>
                <div>
                  <img
                    className="about-me-left"
                    src="https://res.cloudinary.com/mdrisk/image/upload/v1519580787/fam1_zdwaxl.jpg"
                  />
                </div>
              </Carousel>
            </div>
            <div className="col-md-6 about-me-right-title">
              <h1>About me!</h1>
              <p className="about-me-right-body">
                Hello and Welcome! Pull up a chair, a seat, a stool and gather
                &#39;round as I weave my tale. Stories of adventure! From living
                and teaching in Japan, to living and teaching here in the
                states. And now I set forth on my greatest adventure yet,
                becoming a professional developer! I have a wonderful family and
                a thirst for learning!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
