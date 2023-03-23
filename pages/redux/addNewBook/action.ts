import { ADD_NEW_BOOK } from "./actionType";
import { IInitialStateNewBook } from "./type";

export const addNewBook = (book: IInitialStateNewBook) => {
  return {
    type: ADD_NEW_BOOK,
    payload: {
      book: book,
    },
  };
};
