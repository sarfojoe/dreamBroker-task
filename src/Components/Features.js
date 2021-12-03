import React from "react";
import featureimage from "../Assests/db-laptop.jpg";
const Features = () => {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>
          Nian is here! A safe video messenger for
          <span>staying in touch with your loved </span> ones is now available.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          itaque culpa nam quae ad nobis dicta necessitatibus recusandae,
          asperiores velit, aperiam laudantium quas a eligendi rerum perferendis
          labore dolore eaque eos quo. Enim nemo quasi, corporis laboriosam
          laborum ea quas voluptas dolor, blanditiis nesciunt dolore harum!
          Nihil voluptatum accusantium consectetur.
        </p>
        <button>View More Features</button>
      </div>
    </div>
  );
};

export default Features;
