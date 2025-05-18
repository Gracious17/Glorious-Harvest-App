import React, { createContext, useState } from "react";
const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [obj, setObj] = useState({
    name: "kingsley",
    number: 8376363737,
    career: "software developer",
  });
  const updatedObj = (newData) => {
    setObj((prevObj) => ({
      ...prevObj,
      ...newData,
    }));
  };
  return (
    <MyContext.Provider value={{ obj, updatedObj }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyProvider };
