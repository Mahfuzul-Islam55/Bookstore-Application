import { ADD_NEW_BOOK } from "./actionType";
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
    default:
      return { ...state };
  }
};
