import React from "react";
import Dummy from "./DummyText";
import Back from "./BackButton";

function About(props) {
  return (
    <div className="container content">
      <Back onBack={props.onBack} />
      <h1>About Me</h1>
      <Dummy />
    </div>
  );
}

export default About;
