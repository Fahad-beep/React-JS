import React from "react";
const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>InValid Password</h1>;
const items = ["apple", "orange", "blue", "green"];

const Password = () => {
  return (
    <div>
      <PassCheck valid={false} />
      {items.length > 0 && <h1>items are not empty</h1>}
    </div>
  );
};

const PassCheck = (props) =>
  props.valid ? <ValidPassword /> : <InValidPassword />;

export default Password;
