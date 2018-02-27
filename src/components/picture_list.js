import React from "react";
import PictureListItem from "./picture_list_item";
import "../style/App.css";

const PictureList = props => {
  const pictureItems = props.pictures.map(picture => {
    return (
      <PictureListItem
        onPictureSelect={props.onPictureSelect}
        key={picture.id}
        picture={picture}
      />
    );
  });

  return <ul className="list-group-horizontal">{pictureItems}</ul>;
};

export default PictureList;
