import React from "react";
import "./sub.styles.scss";

const Sub = ({ title, content, img }) => {
  return (
    <>
      <div className="sub-banner">
        <div className="title">
          <br />
          <h1>{title}</h1>
        </div>
        <div className="body">
          <p className="content">{content}</p>
          {img ? <img className="optional" src={img} /> : null}
        </div>
      </div>
    </>
  );
};

export default Sub;
