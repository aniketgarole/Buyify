import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as ProductReducer}from "./productReducer/reducer"
import { reducer as cartReducer } from "./Cart/cart.reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cartReducer,ProductReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
