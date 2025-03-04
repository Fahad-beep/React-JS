import React, { useState } from "react";

const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setToDo([...toDo, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter To Do Task"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {toDo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
