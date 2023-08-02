import { combineReducers, createStore } from "redux";
import { ArrayReducer } from "./ArrayReducer";

const rootReducer = combineReducers({
  data: ArrayReducer,
});

export const store = createStore(rootReducer);
