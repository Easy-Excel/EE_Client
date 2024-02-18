// src/redux/rootReducer.js
import { combineReducers } from "redux";
import chatBotReducer from "./chatBotReducer";
import keyTableReducer from "./keyTableReducer";
import errorCodeReducer from "./errorCodeReducer";
const rootReducer = combineReducers({
  chatBot: chatBotReducer,
  keyTable: keyTableReducer,
  errorCode: errorCodeReducer,
});

export default rootReducer;
