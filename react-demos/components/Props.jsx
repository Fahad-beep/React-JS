import React from "react";

const Props = () => {
  return (
    <div>
      <Users name="Habibi" age={19} />
    </div>
  );
};
const Users = (props) => {
  return (
    <section>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </section>
  );
};

export default Props;
