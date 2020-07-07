import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./card.styles.scss";

const Card = ({ title, grade, bgColor, size, link }) => {
  return (
    <div className={`${size} card`}>
      <div
        className="background-image"
        style={{
          backgroundColor: `${bgColor}`,
        }}
      />
      <div className="content">
        <h1 className="title">
          <Link href={link}>
            <a className="title">{title} </a>
          </Link>
        </h1>
        <span className="subtitle">{grade}</span>
      </div>
    </div>
  );
};

export default Card;
