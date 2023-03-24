import { ADD_NEW_BOOK, FREE_BOOK, UPDATE_BOOK } from "./actionType";
import { IInitialStateNewBook } from "./type";

export const addNewBook = (book: IInitialStateNewBook) => {
  return {
    type: ADD_NEW_BOOK,
    payload: {
      book: book,
    },
  };
};

export const updateBook = (book: IInitialStateNewBook) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      book: book,
    },
  };
};

export const freeBook = () => {
  return {
    type: FREE_BOOK,
    payload: {},
  };
};
