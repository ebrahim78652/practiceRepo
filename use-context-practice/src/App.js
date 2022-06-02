import "./App.css";
import { ChildComponent } from "./functionalComponents/ChildComponent";
import { SecondChildComponent } from "./functionalComponents/SecondChildComponent";
import { ToggleComponent } from "./Hooks/ToggleComponent";

import React, { useState, useEffect } from "react";

export function App() {
  return (
    <div className="App">
      <ToggleComponent>
        <ChildComponent />
      </ToggleComponent>

      {/* make a second component to reuse the logic */}

      <ToggleComponent>
        <ChildComponent />
      </ToggleComponent>
    </div>
  );
}
