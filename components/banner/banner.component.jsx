import React from "react";
import { motion } from "framer-motion";
import "./banner.styles.scss";

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <div className="background-image" />
      <div className="content">
        <h1 className="title"> {title} </h1>
        <span className="subtitle"></span>
      </div>
    </div>
  );
};

export default Banner;
