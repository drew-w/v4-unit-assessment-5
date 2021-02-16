import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "react-redux";
import reducer from "./reducer";

export default createStore(reducer);
