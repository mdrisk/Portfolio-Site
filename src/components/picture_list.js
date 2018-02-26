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

  return <ul className="col-md-4 list-group">{pictureItems}</ul>;
};

export default PictureList;
