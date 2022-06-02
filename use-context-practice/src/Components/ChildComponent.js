import React from "react";
import { GrandChildComponent } from "./GrandChildComponent";
import { clickContext } from "../App.js";

export class ChildComponent extends React.Component {
  render() {
    return (
      <>
        <div>This is the child component!</div>
        <GrandChildComponent />
      </>
    );
  }
}
