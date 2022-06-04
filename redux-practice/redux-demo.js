const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;
const immer = require("immer");

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

const numInitialCakes = 10;
const numInitialIcecreams = 20;

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
const orderIcecream = () => {
  return {
    type: ICECREAM_ORDERED,
  };
};
const restockIcecream = (quantity) => {
  return {
    type: ICECREAM_RESTOCK,
    payload: quantity,
  };
};

//implement the initial state for cakes
const initialCakes = {
  numCakes: numInitialCakes,
};
//implememnt the initial state for icecreams
const initialIcecreams = {
  numIceCreams: numInitialIcecreams,
};

//implement the reducer for cakes
const cakeReducer = (state = initialCakes, actionObj) => {
  switch (actionObj.type) {
    case CAKE_ORDERED:
      return immer.produce(state, (draft) => {
        draft.numCakes = draft.numCakes - 1;
      });
    case CAKE_RESTOCK:
      return immer.produce(state, (draft) => {
        draft.numCakes = draft.numCakes + actionObj.payload;
      });
    default:
      return state;
  }
};
//implement the reducer for ICCREAMS
const iceCreamReducer = (state = initialIcecreams, actionObj) => {
  switch (actionObj.type) {
    case ICECREAM_ORDERED:
      return immer.produce(state, (draft) => {
        draft.numIceCreams = draft.numIceCreams - 1;
      });
    case ICECREAM_RESTOCK:
      return immer.produce(state, (draft) => {
        draft.numIceCreams = draft.numIceCreams + actionObj.payload;
      });
    default:
      return state;
  }
};

//combine the reducers:
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

//start by making a store.
const store = redux.createStore(rootReducer);
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

const unsubscribe = store.subscribe(() => {
  console.log("do some action after the update has happened!");
  console.log(
    `the initial state of the cakes is: ${store.getState().cake.numCakes}`
  );

  console.log(
    `the initial state of the ice creams is: ${
      store.getState().icecream.numIceCreams
    }`
  );
});

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(3);

actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();

actions.restockIcecream(45);
