import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBook } from "../redux/BookList/action";
import { IInitialState } from "../redux/BookList/InitialState";
import { useAppDispatch, useAppSelector } from "../redux/store";
import Book from "./Book";

const BookList = () => {
  const dispatch = useAppDispatch();
  const allBook: any = useAppSelector((state) => state.bookList);

  useEffect(() => {
    dispatch<any>(getAllBook);
  }, [dispatch]);

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {allBook.map((book: IInitialState) => {
          return <Book book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
