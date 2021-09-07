import React from "react";
import Dummy from "./DummyText";
import Back from "./BackButton";

function ContactPage(props) {
  return (
    <div className="container content">
      <Back onBack={props.onBack} />
      <h1>Contact</h1>
      <Dummy />
    </div>
  );
}

export default ContactPage;
