import "./App.css";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import ReactDOM from "react-dom/client";

function App() {
  //introduce the variable to save the name:
  //const [nameLive, setLiveName] = useState("");
  const [nameInLocalStorage, setNameInLocalStorage] = useLocalStorage();
  const [nameLive, setLiveName] = useState(nameInLocalStorage);

  const saveButtonClicked = (event) => {
    console.log("save button clicked!");
    console.log(nameInLocalStorage);
    setNameInLocalStorage(nameLive);
  };

  const inputChanged = (event) => {
    console.log("input changed!");
    console.log(event.target.value);
    setNameInLocalStorage(event.target.value);
  };

  useEffect(() => {
    setLiveName(nameInLocalStorage);
  }, [nameInLocalStorage]);

  return (
    <div className="App">
      <input
        onChange={inputChanged}
        placeholder="type your name here"
        type="text"
      />
      <button onClick={saveButtonClicked}>Save</button>
    </div>
  );
}

export default App;
