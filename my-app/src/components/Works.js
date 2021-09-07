import React from "react";
import Dummy from "./DummyText";
import Back from "./BackButton";

function Works(props) {
  return (
    <div className="container content">
      <Back onBack={props.onBack} />
      <h1>Works</h1>
      <Dummy />
    </div>
  );
}

export default Works;
