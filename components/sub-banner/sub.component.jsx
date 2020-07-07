import React from "react";
import "./sub.styles.scss";

const Sub = ({ title, content }) => {
  return (
    <>
      <div className="sub-banner">
        <div className="title">
          <br />
          <h1>{title}</h1>
        </div>
        <div className="body">
          <p className="content">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Sub;
