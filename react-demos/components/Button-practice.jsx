import React from "react";
const Button = () => {
  const onClick = () => {
    console.log(Math.random() * 10);
  };
  return <button onClick={onClick}>Click Me</button>;
};
const ButtonPractice = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default ButtonPractice;
