const redux = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
  };
};

const restockCake = (quantity) => {
  return {
    type: CAKE_RESTOCK,
    payload: quantity,
  };
};

//implememnt the initial state
initialState = {
  numCakes: 10,
};

//implement the reducer
const reducer = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case CAKE_ORDERED:
      return { ...state, numCakes: state.numCakes - 1 };
    case CAKE_RESTOCK:
      return { ...state, numCakes: state.numCakes + actionObj.payload };
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

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(restockCake(3));

unsubscribe();

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
