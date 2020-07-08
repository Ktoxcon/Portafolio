import React from "react";
import "./imageSub-banner.styles.scss";

const ImageSubBanner = ({ img }) => {
  return (
    <>
      <div className="img-banner" style={{ backgroundImage: `${img}` }}></div>
    </>
  );
};

export default ImageSubBanner;
