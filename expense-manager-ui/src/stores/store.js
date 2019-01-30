import { combineReducers } from "redux";
import { expenses } from "../reducers/expense.reducer";
import { createStore } from "redux";

const combinedReducers = combineReducers({ expenses });

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
