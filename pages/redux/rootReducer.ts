import { combineReducers } from "redux";
import { addNewBookReducer } from "./addNewBook/reducer";

export const rootReducer = combineReducers({
  newBook: addNewBookReducer,
});
