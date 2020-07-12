import React from "react";
import "./media.styles.scss";

const Media = () => {
  return (
    <div className="media-container">
      <ul>
        <li>
          <a href="https://github.com/Ktoxcon">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/KennethToxcon1">Twitter</a>
        </li>
        <li>
            Gmail
          <ul>
              <li>kennethtoxro@gmail.com</li>
          </ul>
        </li>
        <li>
            Protonmail
          <ul>
              <li>ktoxcon@protonmail.com</li>
          </ul>
        </li>
        
      </ul>
    </div>
  );
};

export default Media;
