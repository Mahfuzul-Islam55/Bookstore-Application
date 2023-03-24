import { ADD_NEW_BOOK, UPDATE_BOOK } from "./actionType";
import { InitialStateNewBook } from "./InitialStateNewBook";
import { IAction } from "./type";

export const addNewBookReducer = (
  state = InitialStateNewBook,
  action: IAction
) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_BOOK:
      const { book } = payload;
      return {
        ...state,
        id: book.id,
        name: book.name,
        author: book.author,
        url: book.thumbnail,
        price: Number(book.price),
        rating: Number(book.rating),
      };
    case UPDATE_BOOK:
      return {
        ...state,
        id: payload.book.id,
        name: payload.book.name,
        author: payload.book.author,
        thumbnail: payload.book.thumbnail,
        price: Number(payload.book.price),
        rating: Number(payload.book.rating),
      };

    default:
      return { ...state };
  }
};
