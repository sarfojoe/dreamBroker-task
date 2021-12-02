import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          DreamBroker<span>Live it. </span>Live.
        </h1>
        <p>
          We revolutionise communication in a fun, natural and productive way,
          with video.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
