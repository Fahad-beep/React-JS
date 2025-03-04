import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>phone: {props.phone}</h2>
      <h3>Price: {props.price}</h3>
    </div>
  );
};

export default Person;
