import React from "react";
import "./menuitem.styles.scss";

const MenuItem = ({ title, imageUrl, size, percent }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content-menuitem">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle">{percent}</span>
      </div>
    </div>
  );
};

export default MenuItem;
