import React from "react";
import { document } from "./ContextApi";

const Component1 = (props) => {
  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.onClickHandler}>Increment</button>
      <document.Consumer>
        {(name) => {
          return <h1>Name Came from ContextAPI: {name}</h1>;
        }}
      </document.Consumer>
    </div>
  );
};

export default Component1;
