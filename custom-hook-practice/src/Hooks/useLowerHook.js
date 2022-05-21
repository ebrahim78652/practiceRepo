import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export function useLowerHook() {
  console.log("useLowerHook being called!");
  const [name, setName] = useState("TOM");
  console.log("Lower Hook State is :" + name);

  return [name, setName];
}
