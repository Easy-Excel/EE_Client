// src/redux/rootReducer.js
import { combineReducers } from "redux";
import chatBotReducer from "./chatBotReducer";
import keyTableReducer from "./keyTableReducer";
const rootReducer = combineReducers({
  chatBot: chatBotReducer,
  keyTable: keyTableReducer,
});

export default rootReducer;
