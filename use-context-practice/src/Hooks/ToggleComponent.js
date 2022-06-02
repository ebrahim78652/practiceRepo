import React, { useState, useEffect } from "react";

export const toggleContext = React.createContext();

export const ToggleContext = ({ children }) => {
  const [color, setColor] = useState("black");

  const toggleColor = () => {
    console.log("toggle button was clicked!");
    color === "black" ? setColor("green") : setColor("black");
  };

  return (
    <toggleContext.Provider value={{ color, toggleColor }}>
      {children}
    </toggleContext.Provider>
  );
};
