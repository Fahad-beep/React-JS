import React from "react";

const Component2 = (props) => {
  const onClickHandler = () => props.onClickHandler(props.counter - 1);

  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={onClickHandler}>decrement</button>
    </div>
  );
};

export default Component2;
