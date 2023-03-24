import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBook } from "../redux/BookList/action";
import { IInitialState } from "../redux/BookList/InitialState";
import { useAppDispatch, useAppSelector } from "../redux/store";
import Book from "./Book";

const BookList = () => {
  const dispatch = useAppDispatch();
  const allBook: any = useAppSelector((state) => state.bookList);
  const [featuredBook, setFeaturedBook] = useState(false);
  const featured = allBook.filter(
    (book: IInitialState) => book.featured === true
  );

  const searchList = allBook.filter((book: IInitialState) =>
    book.author.toLowerCase().includes("mi")
  );

  console.log(searchList);
  console.log(featured);
  useEffect(() => {
    dispatch<any>(getAllBook);
  }, [dispatch]);

  const featuredHandle = () => {
    setFeaturedBook(true);
  };

  const allBookHandle = () => {
    setFeaturedBook(false);
  };
  return (
    <div>
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              className="filter-btn active-filter"
              id="lws-filterAll"
              onClick={allBookHandle}
            >
              All
            </button>
            <button
              className="filter-btn"
              id="lws-filterFeatured"
              onClick={featuredHandle}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="lws-bookContainer">
          {!featuredBook && allBook.length > 0
            ? allBook.map((book: IInitialState) => {
                return <Book book={book} key={book.id} />;
              })
            : featured.length > 0 &&
              featured.map((book: IInitialState) => {
                return <Book book={book} key={book.id} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default BookList;
