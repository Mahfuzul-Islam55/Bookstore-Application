import { IPayload } from "./InitialState";
import { ADD_BOOK, GET_ALL_BOOKS } from "./type";

export interface IDispathType {
  type: typeof GET_ALL_BOOKS;
  payload: IPayload;
}

export interface IDispathAddBookType {
  type: typeof ADD_BOOK;
  payload: IPayload;
}
