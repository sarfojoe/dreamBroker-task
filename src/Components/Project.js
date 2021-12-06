import React from "react";
import "./Project.css";
import Project1 from "../Assests/nian4.jpg";
import Project2 from "../Assests/sun.webp";
import Project3 from "../Assests/moon.jpg";
import Project4 from "../Assests/sun1.webp";

const Project = () => {
  return (
    <div id="subscribe">
      <div className="s-heading">
        <h1>Our New Projects</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          deleniti ut tenetur. Quasi nihil impedit voluptate odit amet. Quia
          molestias, sit ducimus soluta earum fugit eos itaque sed harum nobis!
        </p>
      </div>
      <div className="card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Project1} alt="" className="project__img" />
            </div>
            <div class="flip-card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi, qui officia sed laborum magni tempore, cum itaque fuga
                ipsum, veritatis ratione doloribus minus. Sequi repellat,
                necessitatibus ipsam eaque eum atque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Architecto, saepe quisquam odio
                aliquid molestias dolores officia, placeat magni, est odit
                distinctio hic sint doloremque exercitationem. Amet dolores hic
                consectetur ab autem animi asperiores esse deleniti, nisi quod
                soluta consequatur obcaecati iusto, praesentium earum culpa
                velit at cum. Minima, voluptatibus quo!
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Project2} alt="" className="project__img" />
            </div>
            <div class="flip-card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi, qui officia sed laborum magni tempore, cum itaque fuga
                ipsum, veritatis ratione doloribus minus. Sequi repellat,
                necessitatibus ipsam eaque eum atque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Architecto, saepe quisquam odio
                aliquid molestias dolores officia, placeat magni, est odit
                distinctio hic sint doloremque exercitationem. Amet dolores hic
                consectetur ab autem animi asperiores esse deleniti, nisi quod
                soluta consequatur obcaecati iusto, praesentium earum culpa
                velit at cum. Minima, voluptatibus quo!
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Project3} alt="" className="project__img" />
            </div>
            <div class="flip-card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi, qui officia sed laborum magni tempore, cum itaque fuga
                ipsum, veritatis ratione doloribus minus. Sequi repellat,
                necessitatibus ipsam eaque eum atque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Architecto, saepe quisquam odio
                aliquid molestias dolores officia, placeat magni, est odit
                distinctio hic sint doloremque exercitationem. Amet dolores hic
                consectetur ab autem animi asperiores esse deleniti, nisi quod
                soluta consequatur obcaecati iusto, praesentium earum culpa
                velit at cum. Minima, voluptatibus quo!
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Project4} alt="" className="project__img" />
            </div>
            <div class="flip-card-back">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi, qui officia sed laborum magni tempore, cum itaque fuga
                ipsum, veritatis ratione doloribus minus. Sequi repellat,
                necessitatibus ipsam eaque eum atque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Architecto, saepe quisquam odio
                aliquid molestias dolores officia, placeat magni, est odit
                distinctio hic sint doloremque exercitationem. Amet dolores hic
                consectetur ab autem animi asperiores esse deleniti, nisi quod
                soluta consequatur obcaecati iusto, praesentium earum culpa
                velit at cum. Minima, voluptatibus quo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
