import React from "react";
import "./imageSub-banner.styles.scss";

const ImageSubBanner = ({ img }) => {
  return (
    <>
      <div className="image-banner">
        <img className="img-background" src={img} alt="Alt"/>
      </div>
    </>
  );
};

export default ImageSubBanner;
