const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const MAKING_REQUEST = "MAKING_REQUEST";
const RECIEVED_SUCCESS = "RECIEVED_SUCCESS";
const RECEIVED_FAILURE = "RECEIVED_FAILURE";

//make the action creators.
//there will be 3 action creators.
//1. when the request is dispatched.
//2. when the request is succedful
//3.when the request comes back with an error
const makingRequest = () => {
  return {
    type: MAKING_REQUEST,
  };
};
const receivedSuccess = (content) => {
  return {
    type: RECIEVED_SUCCESS,
    payload: {
      content: content,
    },
  };
};
const recievedFailure = (errorMessage) => {
  return {
    type: RECEIVED_FAILURE,
    payload: {
      error: errorMessage,
    },
  };
};

//make the reducer function
const initialState = {
  isLoading: false,
  content: {},
  error: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RECIEVED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: action.payload.content,
      };
    case RECEIVED_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
  }
};

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

//make the store
//and add the middleware for the thunk.
const store = redux.createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware)
);

//make the function that will return a function,
//the store.dispatch will be called with this function as the argument
//the thunk middleware will then catch the function and then run it.

const fetchUsers = () => {
  return (dispatch, getStatus) => {
    //before doing the requrest, ste the state to be loading:
    dispatch(makingRequest());

    //in this function we will make the async request.
    axios.get("https://jsonplaceholder.typicode.com/usersuuuuu").then(
      (response) => {
        console.log("repsonse success!");
        dispatch(receivedSuccess(response.data));
      },
      (responseRejected) => {
        console.log("the server rejected your request. its wrong!");
        dispatch(recievedFailure(responseRejected.code));
      }
    );
  };
};

store.dispatch(fetchUsers());
