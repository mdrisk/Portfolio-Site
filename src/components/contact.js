import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="color-one">
      <h4>
        <a href="mailto:mdrisk@yahoo.com">
          <span className="fa-stack fa-lg icons">
            <i className=" icons fa fa-circle-thin fa-stack-2x" />
            <i className="fa fa-envelope fa-stack-1x" />
          </span>
        </a>
        <a target="_blank" href="https://github.com/mdrisk">
          <span className="fa-stack fa-lg icons">
            <i className=" icons fa fa-circle-thin fa-stack-2x" />
            <i className="fa fa-github fa-stack-1x" />
          </span>
        </a>
        <a target="_blank" href="https://twitter.com/therisuka?lang=en">
          <span className="fa-stack fa-lg icons">
            <i className=" icons fa fa-circle-thin fa-stack-2x" />
            <i className="fa fa-twitter fa-stack-1x" />
          </span>
        </a>
      </h4>
    </div>
  );
};
export default Contact;
