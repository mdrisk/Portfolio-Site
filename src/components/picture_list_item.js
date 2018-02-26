import React from "react";

const PictureListItem = ({ picture, onPictureSelect }) => {
  //const video = props.video;
  const imageUrl = picture.url;

  return (
    <li onClick={() => onPictureSelect(picture)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{picture.title}</div>
        </div>
      </div>
    </li>
  );
};

export default PictureListItem;
