import { combineReducers } from "redux";
import { cardsReducer } from "./cardReducer";
const reducers = combineReducers({
  allCards: cardsReducer,
});
export default reducers;
