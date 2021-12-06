import React from "react";
import featureimage from "../Assests/nian1.webp";
import ReactPlayer from "react-player";
const About = () => {
  return (
    <div id="features">
      {/* <div className="features-model">
        <img src={featureimage} alt="feature-image" />
      </div> */}
      <ReactPlayer
        controls
        // width="480"
        // height="240px"
        url="https://www.youtube.com/watch?v=C0o51OQ4LQc"
        className="about__img"
      />
      <div className="features-text">
        <h2>About Us</h2>
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
          Nihil voluptatum accusantium consectetur. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quam mollitia eius harum numquam eaque
          dolore dolor, aliquid qui autem perspiciatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          reprehenderit aut dolor. Magni odio est voluptates natus corrupti
          repellendus? Quasi illo culpa numquam iste quaerat eum vel nemo
          doloribus ipsa!
        </p>
        <button>View More Features</button>
      </div>
    </div>
  );
};

export default About;
