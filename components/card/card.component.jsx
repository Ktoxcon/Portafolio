import React from "react";
import { motion } from "framer-motion";
import "./card.styles.scss";

const Card = ({ title, grade, imageUrl, size }) => {
  return (
    <div className={`${size} card`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle">{grade}</span>
      </div>
    </div>
  );
};

export default Card;
