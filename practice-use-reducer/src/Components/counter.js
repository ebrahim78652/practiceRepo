import React, { useReducer } from "react";
const initialState = 0;

const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initialState;
    default:
      return 0;
  }
};
export default function Counter() {
  const [currentCount, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>counter</div>
      <div>{currentCount}</div>
      <div
        onClick={() => {
          dispatch("increment");
        }}
      >
        increment
      </div>
      <div
        onClick={() => {
          dispatch("decrement");
        }}
      >
        decrement
      </div>
      <div
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </div>
    </>
  );
}
