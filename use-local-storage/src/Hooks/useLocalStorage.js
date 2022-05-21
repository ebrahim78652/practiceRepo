import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

export function useLocalStorage() {
  const [nameLive, setLiveName] = useState("");

  //below logic checks if anything is in the local storage when the program starts.
  useEffect(() => {
    console.log("useEffect being called!");
    if (localStorage.getItem("name")) {
      console.log("we already have a name in the storage!");
      setLiveName(localStorage.getItem("name"));
    } else {
      console.log("nothing found in the local storage!");
      setLiveName("default");
    }
  }, []);

  function saveName(name) {
    localStorage.setItem("name", name);
  }

  return [nameLive, saveName];
}
