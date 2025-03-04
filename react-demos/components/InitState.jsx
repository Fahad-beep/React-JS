import React, { useState } from "react";

const InitState = () => {
  const [count, setCount] = useState(() => {
    const initCount = 10;
    return initCount;
  });
  const onClickHandler = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickHandler}>Increment</button>
    </div>
  );
};

export default InitState;
