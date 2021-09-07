import React from "react";
import "../css/welcome.scss";
import banner from "../assets/alexandra-gorn-unsplash.jpg";

function Welcome() {
  return (
    <div className="container welcome">
      <div id="narrow-box">
        <div className="content">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint, deleniti, quia ullam, quisquam maxime quod perspiciatis consectetur
            impedit aliquam asperiores!
          </p>
        </div>
        <button>Learn More</button>
      </div>
      <div id="wide-box">
        <img src={banner} alt="UI/UX design splash"></img>
        <div className="content">
          <h2>UI/UX Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias eius quidem ratione, eligendi nam sequi debitis iure, illo
            facere unde. Alias nulla rerum eos quisquam laudantium mollitia sapiente sunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias eius quidem ratione, eligendi nam sequi debitis iure, illo
            facere unde. Alias nulla rerum eos quisquam laudantium mollitia sapiente sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
