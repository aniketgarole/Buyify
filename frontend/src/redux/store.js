import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
 


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));