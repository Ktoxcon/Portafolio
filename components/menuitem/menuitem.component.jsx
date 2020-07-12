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
        <h1 className="menu-title"> {title.toUpperCase()} </h1>
        <span className="menu-subtitle">{percent}</span>
      </div>
    </div>
  );
};

export default MenuItem;
