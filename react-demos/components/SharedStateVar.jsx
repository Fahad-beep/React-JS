import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
const SharedStateVar = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Component1
        counter={counter}
        onClickHandler={() => setCounter(counter + 1)}
      />
      <Component2 counter={counter} onClickHandler={setCounter} />
      {/* sharing setCounter state function to Component2 */}
    </div>
  );
};

export default SharedStateVar;
