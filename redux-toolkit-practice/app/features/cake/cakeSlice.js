const createSlice = require("@reduxjs/toolkit").createSlice;

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numCakes: 10,
  },
  reducers: {
    ordered: (state) => {
      state.numCakes = state.numCakes - 1;
    },
    restocked: (state, action) => {
      state.numCakes = state.numCakes + action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
