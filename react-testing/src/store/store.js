import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const createStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
