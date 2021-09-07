import React from "react";

function Back(props) {
  return (
    <button onClick={() => props.onBack()} className="back-btn">
      {" "}
      &#8592; Back
    </button>
  );
}

export default Back;
