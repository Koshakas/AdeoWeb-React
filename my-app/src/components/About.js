import React from "react";
import Dummy from "./DummyText";
import Back from "./BackButton";

function About() {
  return (
    <div className="container content">
      <Back />
      <h1>About Me</h1>
      <Dummy />
    </div>
  );
}

export default About;
