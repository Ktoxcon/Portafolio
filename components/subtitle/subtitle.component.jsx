import React from "react";
import "./subtitle.styles.scss";

const SubTitle = ({ subtitle }) => {
  return (
    <>
      <div className="sub-title">
        <div className="content">
          <h2>{subtitle}</h2>
        </div>
      </div>
    </>
  );
};

export default SubTitle;
