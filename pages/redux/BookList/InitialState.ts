export const InitialState: IInitialState[] = [];

export interface IInitialState {
  name: string;
  author: string;
  thumbnail: string;
  price: number;
  rating: number;
  featured: boolean;
  id: number;
}

export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IPayload {
  id?: number;
  book?: IInitialState;
  bookList: object;
}
