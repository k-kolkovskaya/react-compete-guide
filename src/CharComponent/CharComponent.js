import React from "react";
import "./charComponent.css";

const charComponent = props => {
  return (
    <div className="charComponent" onClick={props.click}>
      {props.title}
    </div>
  );
};

export default charComponent;
