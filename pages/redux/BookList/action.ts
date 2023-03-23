import { Dispatch } from "redux";
import { IDispathType } from "./reduxType";
import { GET_ALL_BOOKS } from "./type";

export const getAllBook = async (dispatch: Dispatch<IDispathType>) => {
  try {
    const response = await fetch("http://localhost:9000/books");
    let book = await response.json();
    console.log(book);
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
