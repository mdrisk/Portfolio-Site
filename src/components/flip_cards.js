import React, { Component } from 'react';
import FlexFlipCard from './flex_flipcard';

class FlipCard extends Component {
  render() {
    return (
      <ul className="d-flex row justify-content-around">
        <li className="card-li">
          <FlexFlipCard
            frontBackgroundColor="rgba(227, 189, 119, 0.4)"
            backBackgroundColor="rgba(227, 189, 119, 0.4)"
            frontContainerStyle={{
              width: '200px',
              height: '230px',
              borderRadius: '10px'
            }}
            backContainerStyle={{
              width: '200px',
              height: '230px',
              borderRadius: '10px'
            }}
          >
            <div ref="flipper">
              <img
                className="img-thumbnail"
                src="http://res.cloudinary.com/mdrisk/image/upload/v1519829825/compass_kpvb6r.png"
                alt="Compass"
                style={{ borderRadius: '10px' }}
              />
              <div className="caption">
                <h4>Java</h4>
              </div>
            </div>
            <div ref="flipper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </FlexFlipCard>
        </li>
        <li className="card-li">
          <FlexFlipCard
            frontBackgroundColor="rgba(227, 189, 119, 0.4)"
            backBackgroundColor="rgba(227, 189, 119, 0.4)"
            frontContainerStyle={{
              width: '200px',
              height: '230px',
              borderRadius: '10px'
            }}
            backContainerStyle={{
              width: '200px',
              height: '230px',
              borderRadius: '10px'
            }}
          >
            <div ref="flipper">
              <img
                className="img-thumbnail"
                src="http://res.cloudinary.com/mdrisk/image/upload/v1519831197/compass3_gpaux0.png"
                alt="Compass2"
                style={{ borderRadius: '10px' }}
              />
              <div className="caption">
                <h4>Java</h4>
              </div>
            </div>
            <div ref="flipper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </FlexFlipCard>
        </li>
        <li className="card-li">
          <FlexFlipCard
            frontBackgroundColor="rgba(227, 189, 119, 0.4)"
            backBackgroundColor="rgba(227, 189, 119, 0.4)"
            frontContainerStyle={{
              width: '200px',
              height: '230px',
              borderRadius: '10px'
            }}
            backContainerStyle={{
              width: '200px',
              height: '230px',
              borderRadius: '10px'
            }}
          >
            <div ref="flipper">
              <img
                className="img-thumbnail"
                src="http://res.cloudinary.com/mdrisk/image/upload/v1519831122/compass2_udazsf.png"
                alt="Compass3"
                style={{ borderRadius: '10px' }}
              />
              <div className="caption">
                <h4>Java</h4>
              </div>
            </div>
            <div ref="flipper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </FlexFlipCard>
        </li>
      </ul>
    );
  }
}
export default FlipCard;
