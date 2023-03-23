import { combineReducers } from "redux";
import { addNewBookReducer } from "./addNewBook/reducer";
import { reducer } from "./BookList/reducer";

export const rootReducer = combineReducers({
  newBook: addNewBookReducer,
  bookList: reducer,
});
