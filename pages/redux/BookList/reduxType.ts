import { IPayload } from "./InitialState";
import { ADD_BOOK, DELETE_BOOK, GET_ALL_BOOKS, UPDATE_BOOK } from "./type";

export interface IDispathType {
  type: typeof GET_ALL_BOOKS;
  payload: IPayload;
}

export interface IDispathAddBookType {
  type: typeof ADD_BOOK;
  payload: IPayload;
}

export interface IDispatchDeleteBookType {
  type: typeof DELETE_BOOK;
  payload: IPayload;
}

export interface IDispatchUpdateBookType {
  type: typeof UPDATE_BOOK;
  payload: IPayload;
}
