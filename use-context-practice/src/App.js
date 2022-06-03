import "./App.css";
import { ChildComponent } from "./functionalComponents/ChildComponent";
import { ToggleContext } from "./Hooks/ToggleComponent";

import React, { useState, useEffect } from "react";

export function App() {
  return (
    <div className="App">
      <ToggleContext>
        <ChildComponent />
      </ToggleContext>

      {/* make a second component to practise reusing the component */}

      <ToggleContext>
        <ChildComponent />
      </ToggleContext>
    </div>
  );
}


