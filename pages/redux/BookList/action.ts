import { Dispatch } from "redux";
import { IInitialStateNewBook } from "../addNewBook/type";
import { IDispathAddBookType, IDispathType } from "./reduxType";
import { ADD_BOOK, GET_ALL_BOOKS } from "./type";

export const getAllBook = async (dispatch: Dispatch<IDispathType>) => {
  try {
    const response = await fetch("http://localhost:9000/books");
    let book = await response.json();
    dispatch({
      type: GET_ALL_BOOKS,
      payload: {
        bookList: book,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addBook = (bookForm: IInitialStateNewBook) => {
  console.log("From action", bookForm);
  return async (dispatch: Dispatch<IDispathAddBookType>) => {
    try {
      const response = await fetch("http://localhost:9000/books", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(bookForm),
      });
      const book = await response.json();
      dispatch({
        type: ADD_BOOK,
        payload: {
          bookList: book,
        },
      });
    } catch (error) {}
  };
};
