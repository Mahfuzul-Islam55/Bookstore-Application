export interface IInitialStateNewBook {
  id?: number;
  name: string;
  author: string;
  url: string;
  price: number;
  rating: number;
}

export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IPayload {
  book: IInitialStateNewBook;
}
