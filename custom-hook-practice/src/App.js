import "./App.css";
import { MyComp } from "./components/myComp";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useHigherHook } from "./Hooks/useHigherHook";
function App() {
  //make our component with the increment and the decrement button
  console.log("App Function running");
  const { welcomeString, setName } = useHigherHook();

  useEffect(() => {
    console.log("App mounting!");

    return () => {
      console.log("App unmounting!");
    };
  }, []);

  return (
    <div className="App">
      <MyComp welcomeString={welcomeString} setName={setName} />
    </div>
  );
}

export default App;
