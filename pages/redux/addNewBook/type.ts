export interface IInitialStateNewBook {
  id?: number;
  name: string;
  author: string;
  thumbnail: string;
  price: number;
  rating: number;
  featured: boolean;
}

export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IPayload {
  book: IInitialStateNewBook;
}
