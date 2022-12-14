import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


export const store = createStore(rootReducer,compose(applyMiddleware(thunk, logger),ReactReduxDevTools));