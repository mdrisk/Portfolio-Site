import React, { Component } from "react";
import FlexFlipCard from "./flex_flipcard";

class FlipCard extends Component {
  render() {
    return (
      <ul className="d-flex row justify-content-center">
        <li className="card-li">
          <FlexFlipCard
            frontBackgroundColor="#FFFAF0"
            backBackgroundColor="#FFFAF0"
            frontContainerStyle={{
              width: "250px",
              height: "300px",
              borderRadius: "10px"
            }}
            backContainerStyle={{
              width: "250px",
              height: "300px",
              borderRadius: "10px"
            }}
          >
            <div ref="flipper">
              <img
                className="img-thumbnail"
                src="http://res.cloudinary.com/mdrisk/image/upload/v1519829825/compass_kpvb6r.png"
                alt="Compass"
                style={{ borderRadius: "10px" }}
              />
              <div className="caption">
                <h3>Python</h3>
              </div>
            </div>
            <div ref="flipper">
              <ul style={{ padding: "40px 10px 25px 10px" }}>
                <li>
                  <h5>- Taught Python in HS</h5>
                </li>
                <li>
                  <h5>- Taught Django in HS</h5>
                </li>
              </ul>
              <h5 style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                My python usage has been academic. I am currently continuing my
                Django studies on Udemy.
              </h5>
            </div>
          </FlexFlipCard>
        </li>
        <li className="card-li">
          <FlexFlipCard
            frontBackgroundColor="#FFFAF0"
            backBackgroundColor="#FFFAF0"
            frontContainerStyle={{
              width: "250px",
              height: "300px",
              borderRadius: "10px"
            }}
            backContainerStyle={{
              width: "250px",
              height: "300px",
              borderRadius: "10px"
            }}
          >
            <div ref="flipper">
              <img
                className="img-thumbnail"
                src="http://res.cloudinary.com/mdrisk/image/upload/v1519831197/compass3_gpaux0.png"
                alt="Compass2"
                style={{ borderRadius: "10px" }}
              />
              <div className="caption">
                <h3>Java</h3>
              </div>
            </div>
            <div ref="flipper">
              <ul style={{ padding: "40px 10px 25px 10px" }}>
                <li>
                  <h5>- Taught Java in HS</h5>
                </li>
                <li>
                  <h5>- Taught Android Studio</h5>
                </li>
              </ul>
              <h5 style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                My Java usage has been academic in nature. I have guided
                students in App creation in Android Studio.
              </h5>
            </div>
          </FlexFlipCard>
        </li>
        <li className="card-li">
          <FlexFlipCard
            frontBackgroundColor="#FFFAF0"
            backBackgroundColor="#FFFAF0"
            frontContainerStyle={{
              width: "250px",
              height: "300px",
              borderRadius: "10px"
            }}
            backContainerStyle={{
              width: "250px",
              height: "300px",
              borderRadius: "10px"
            }}
          >
            <div ref="flipper">
              <img
                className="img-thumbnail"
                src="http://res.cloudinary.com/mdrisk/image/upload/v1519831122/compass2_udazsf.png"
                alt="Compass3"
                style={{ borderRadius: "10px" }}
              />
              <div className="caption">
                <h3>Front End</h3>
              </div>
            </div>
            <div ref="flipper">
              <ul style={{ padding: "40px 10px 25px 10px" }}>
                <li>
                  <h5>- FreeCodeCamp Front End Course completed</h5>
                </li>
                <li>
                  <h5>- FE Dev tools in conjuction with Django</h5>
                </li>
              </ul>
              <h5 style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                I have been immersing myself in the FE Dev frameworks React and
                Angular.
              </h5>
            </div>
          </FlexFlipCard>
        </li>
      </ul>
    );
  }
}
export default FlipCard;
