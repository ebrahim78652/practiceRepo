import React from "react";
import { GrandChildComponent } from "./GrandChildComponent";
import { clickContext } from "../App.js";

export const clickContext2 = React.createContext();

export const SecondChildComponent = () => {
  return (
    <>
      <div>This is the second child component!</div>
    </>
  );
};
