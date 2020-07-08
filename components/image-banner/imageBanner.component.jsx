import React from "react";
import "./image-banner.styles.scss";

const ImageBanner = ({ img }) => {
  return (
    <>
      <div className="img-banner" style={{ backgroundImage: `${img}` }}></div>
    </>
  );
};

export default ImageBanner;
