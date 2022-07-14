import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducer/index";

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;