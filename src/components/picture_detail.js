import React from "react";

const PictureDetail = ({ picture }) => {
  if (!picture) {
    return <div>Loading...</div>;
  }
  //
  // const pictureId = picture.id;
  // const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="col-md-8">
      <img className="img-fluid" src={picture.url} />
      <div className="details">
        <div>{picture.title}</div>
      </div>
    </div>
  );
};

export default PictureDetail;
