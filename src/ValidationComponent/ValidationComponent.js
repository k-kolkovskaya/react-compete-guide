import React from "react";

const validationComponent = props => {
  return <div>{props.length <= 5 ? <p>Too short!</p> : <p>It's ok</p>}</div>;
};

export default validationComponent;
