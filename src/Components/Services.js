import React from "react";
import Box from "./Box";
import image1 from "../Assests/nian4.jpg";
import image2 from "../Assests/nian3.jpg";

const Services = () => {
  return (
    <div id="services">
      <div className="s-heading">
        <h1>Services</h1>
        <p> Here are some services provided by DreanBroker </p>
      </div>
      <div className="b-container">
        <Box image={image1} alte="image1" button="LOCATION" />
        <Box image={image2} alte="image2" button="VIDEO MESSAGE" />
      </div>
    </div>
  );
};

export default Services;
