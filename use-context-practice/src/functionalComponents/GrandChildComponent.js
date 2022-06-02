import { render } from "@testing-library/react";
import React, { useContext } from "react";
import { toggleContext } from "../Hooks/ToggleComponent";

export const GrandChildComponent = () => {
  const { color, toggleColor } = useContext(toggleContext);

  return (
    <>
      <button onClick={toggleColor}>press this button for some magic</button>
      <div style={{ backgroundColor: color, height: "100px" }} on></div>
    </>
  );
};
