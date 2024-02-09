// src/redux/rootReducer.js
import { combineReducers } from "redux";
import chatBotReducer from "./chatBotReducer";

const rootReducer = combineReducers({
  chatBot: chatBotReducer,
});

export default rootReducer;
