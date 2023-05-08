import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as ProductReducer } from "./productReducer/reducer";
import { reducer as CartReducer } from "./Cart/Reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  CartReducer,
  ProductReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
