import { IAction, InitialState } from "./InitialState";
import { IDispathAddBookType, IDispathType } from "./reduxType";
import { ADD_BOOK, GET_ALL_BOOKS } from "./type";

export const reducer = (
  state = InitialState,
  action: IDispathType | IDispathAddBookType
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BOOKS:
      return payload.bookList;
    case ADD_BOOK:
      return [...state, payload.bookList];
    default:
      return [...state];
  }
};
