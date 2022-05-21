import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useLowerHook } from "./useLowerHook";

export function useHigherHook() {
  console.log("useHigherHook being called!");
  const [name, setName] = useLowerHook();
  const [welcomeString, setWelcomeString] = useState("Hello: " + name);
  console.log("Higher Hook State is :" + name + " : " + welcomeString);

  useEffect(() => {
    console.log("use Effect in higherHook is running!");
    setWelcomeString("Hello: " + name);
  }, [name]);

  return {
    welcomeString,
    setName,
  };
}
