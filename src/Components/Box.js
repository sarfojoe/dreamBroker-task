import React from "react";

const Box = (props) => {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alte} />
      </div>
      <div className="s-b-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat
          facere optio quae magnam velit rerum.Porro voluptates eaque
          accusantium voluptas vitae excepturi!A ab tempora mollitia, sunt
          officiis neque repellat.
        </p>
        <a href="#" className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
};

export default Box;
