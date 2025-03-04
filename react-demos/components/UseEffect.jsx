import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState(() => {
    const localName = localStorage.getItem("name");
    return localName ? JSON.parse(localName) : "";
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClearName = () => setName("");

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleClearName}>Clear Name</button>
    </div>
  );
};

export default UseEffect;
