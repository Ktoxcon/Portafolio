import React from "react";
import { motion } from "framer-motion";
import "./banner.styles.scss";

const Banner = ({ title }) => {
  return (
    <div className="banner">
      <div className="background-image" />
      <div className="content">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0.5 }}
        >
          <h1 className="title"> {title} </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
