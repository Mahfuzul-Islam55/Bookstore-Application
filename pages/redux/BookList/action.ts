import { Dispatch } from "redux";
import { IInitialStateNewBook } from "../addNewBook/type";
import {
  IDispatchDeleteBookType,
  IDispathAddBookType,
  IDispathType,
} from "./reduxType";
import { ADD_BOOK, DELETE_BOOK, GET_ALL_BOOKS } from "./type";

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

export const deleteBook = (id: number) => {
  return async (dispatch: Dispatch<IDispatchDeleteBookType>) => {
    try {
      const response = await fetch(`http://localhost:9000/books/${id}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_BOOK,
        payload: {
          id: id,
        },
      });
    } catch (error) {}
  };
};
