import { render } from "@testing-library/react";
import React from "react";
import { clickContext } from "../App.js";

export class GrandChildComponent extends React.Component {
  render() {
    return (
      <clickContext.Consumer>
        {(onClick) => {
          return (
            <button onClick={onClick}>press this button for some magic</button>
          );
        }}
      </clickContext.Consumer>
    );
  }
}
