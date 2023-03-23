import { IPayload } from "./InitialState";
import { GET_ALL_BOOKS } from "./type";

export interface IDispathType {
  type: typeof GET_ALL_BOOKS;
  payload: IPayload;
}
