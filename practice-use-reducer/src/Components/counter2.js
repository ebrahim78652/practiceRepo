import React, { useReducer } from "react";
const initialState = {
  firstCounter: 5,
  secondCounter: 10,
};

const reducer = (count, action) => {
  switch (action.type) {
    case "increment":
      return { ...count, firstCounter: count.firstCounter + 1 };
    case "decrement":
      return { ...count, firstCounter: count.firstCounter - 1 };
    case "reset":
      return initialState;
    default:
      return 0;
  }
};
export default function Counter2() {
  const [currentCount, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>counter</div>
      <div>{currentCount.firstCounter}</div>
      <div>{currentCount.secondCounter}</div>
      <div
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        increment
      </div>
      <div
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        decrement
      </div>
      <div
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}
      >
        reset
      </div>
    </>
  );
}
