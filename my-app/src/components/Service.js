import React from "react";
import Dummy from "./DummyText";
import Back from "./BackButton";

function Service(props) {
  return (
    <div className="container content">
      <Back onBack={props.onBack} />
      <h1>Service</h1>
      <Dummy />
    </div>
  );
}

export default Service;
