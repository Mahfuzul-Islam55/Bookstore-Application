import { IAction, IInitialState, InitialState } from "./InitialState";
import {
  IDispatchDeleteBookType,
  IDispatchSearchBookType,
  IDispatchUpdateBookType,
  IDispathAddBookType,
  IDispathType,
} from "./reduxType";
import {
  ADD_BOOK,
  DELETE_BOOK,
  GET_ALL_BOOKS,
  SEARCH_BOOK,
  UPDATE_BOOK,
} from "./type";

export const reducer = (
  state = InitialState,
  action:
    | IDispathType
    | IDispathAddBookType
    | IDispatchDeleteBookType
    | IDispatchUpdateBookType
    | IDispatchSearchBookType
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_BOOKS:
      return payload.bookList;
    case ADD_BOOK:
      return [...state, payload.bookList];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== payload.id);
    case UPDATE_BOOK:
      return state.map((book) => {
        if (book.id === payload.id) {
          return {
            id: payload.id,
            name: payload.book?.name,
            author: payload.book?.author,
            thumbnail: payload.book?.thumbnail,
            price: payload.book?.price,
            rating: payload.book?.rating,
            featured: payload.book?.featured,
          };
        }
        return {
          ...book,
        };
      });
    case SEARCH_BOOK:
      return state.filter((book: IInitialState) =>
        book.author.toLowerCase().includes(payload!.searchText!)
      );
    default:
      return [...state];
  }
};
