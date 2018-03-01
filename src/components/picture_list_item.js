import React from "react";

const PictureListItem = ({ picture, onPictureSelect }) => {
  //const video = props.video;
  const imageUrl = picture.url;

  return (
    <li
      onClick={() => onPictureSelect(picture)}
      className="list-group-item col-xs-6 "
      style={{ backgroundColor: "#EED8AE" }}
    >
      <div>
        <div>
          <img className="media-object" src={imageUrl} />
        </div>
        <div>
          <div className="media-heading">{picture.title}</div>
        </div>
      </div>
    </li>
  );
};

export default PictureListItem;
