import { IAction, InitialState } from "./InitialState";
import { IDispathType } from "./reduxType";
import { GET_ALL_BOOKS } from "./type";

export const reducer = (state = InitialState, action: IDispathType) => {
  const { type, payload } = action;
  console.log("Hello");
  switch (type) {
    case GET_ALL_BOOKS:
      return [payload.bookList];

    default:
      return [...state];
  }
};
