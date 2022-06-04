const store = require("./app/store");
const actions = require("./app/features/cake/cakeSlice").cakeActions;

console.log(`initial state: ${store.getState().numCakes}`);
const unsubscribe = store.subscribe(() => {
  console.log(`state: ${store.getState().numCakes}`);
});
store.dispatch(actions.ordered());
store.dispatch(actions.ordered());
store.dispatch(actions.ordered());

store.dispatch(actions.restocked(3));

unsubscribe();
