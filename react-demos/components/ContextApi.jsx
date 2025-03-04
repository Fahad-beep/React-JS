import React from "react";
import { createContext } from "react";
import Component1 from "./Component1";

export const document = createContext();

const ContextApi = () => {
  const name = "habibi";

  return (
    <div>
      <document.Provider value={name}>
        <Component1 />
      </document.Provider>
    </div>
  );
};
export default ContextApi;
