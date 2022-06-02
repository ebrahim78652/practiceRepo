import React from "react";
import { GrandChildComponent } from "./GrandChildComponent";
import { clickContext } from "../App.js";

export const ChildComponent = () => {
  return (
    <>
      <div>This is the child component!</div>
      <GrandChildComponent />
    </>
  );
};
