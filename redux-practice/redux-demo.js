const redux = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";

const actionCreator = () => {
  return {
    type: CAKE_ORDERED,
  };
};

//implememnt the initial state
initialState = {
  numCakes: 10,
};

//implement the reducer
const reducer = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case "CAKE_ORDERED":
      return { numCakes: state.numCakes - 1 };
    default:
      return state;
  }
};

//start by making a store.
const store = redux.createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("do some action after the update has happened!");
  console.log(`the initial state is: ${store.getState().numCakes}`);
});

const unsubscribe2 = store.subscribe(() => {
  console.log("COMPLETELY OTHER ACTION YOLOLOLO");
  console.log(`the initial state is: ${store.getState().numCakes}`);
});

store.dispatch(actionCreator());
store.dispatch(actionCreator());
store.dispatch(actionCreator());

unsubscribe();

store.dispatch(actionCreator());
store.dispatch(actionCreator());
store.dispatch(actionCreator());
