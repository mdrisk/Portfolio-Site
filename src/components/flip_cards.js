import React, { Component } from "react";
import { FlexyFlipCard } from "flexy-flipcards";

class FlipCard extends Component {
  render() {
    return (
      <div>
        <FlexyFlipCard
          frontBackgroundColor="#B96aC9"
          backBackgroundColor="#231b1b"
        >
          <div className="card" ref="flipper">
            {/* Pass in whatever you want to be rendered on the front side of the card. Just make sure that somewhere in the component subtree, one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
          </div>
          <div className="card" ref="flipper">
            {/* Pass in whatever you want to be rendered on the back side of the card. Just make sure that somewhere in the component subtree, one child has a ref='flipper' attribute. An 'onClick' function will be added to it. */}
          </div>
        </FlexyFlipCard>
      </div>
    );
  }
}
export default FlipCard;
