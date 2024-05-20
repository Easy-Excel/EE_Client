// src/redux/rootReducer.js
import { combineReducers } from "redux";
import chatBotReducer from "./chatBotReducer";
import keyTableReducer from "./keyTableReducer";
import errorCodeReducer from "./errorCodeReducer";
import sidebarReducer from "./sideBarReducer";
const rootReducer = combineReducers({
  chatBot: chatBotReducer,
  keyTable: keyTableReducer,
  errorCode: errorCodeReducer,
  sideBar: sidebarReducer,
});

export default rootReducer;
