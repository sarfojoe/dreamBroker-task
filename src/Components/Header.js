import React from "react";
import Navbar from "./Navbar";
import ReactPlayer from "react-player";

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          DreamBroker<span>Live it. </span>Live.
        </h1>
        <p className="details">
          We revolutionise communication in a fun, natural and productive way,
          with video.
        </p>
        <div className="header-btns">
          {/* <a href="#" className="cv-btn">
            Book a Demo
          </a> */}
          <a href="https://www.youtube.com/watch?v=2xhyq7phj3Q" target="_blank">
            <button className="cv-btn1">Watch a Video</button>
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
};

export default Header;
