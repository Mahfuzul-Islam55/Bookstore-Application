import { IAction, InitialState } from "./InitialState";
import {
  IDispatchDeleteBookType,
  IDispathAddBookType,
  IDispathType,
} from "./reduxType";
import { ADD_BOOK, DELETE_BOOK, GET_ALL_BOOKS } from "./type";

export const reducer = (
  state = InitialState,
  action: IDispathType | IDispathAddBookType | IDispatchDeleteBookType
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BOOKS:
      return payload.bookList;
    case ADD_BOOK:
      return [...state, payload.bookList];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== payload.id);
    default:
      return [...state];
  }
};
