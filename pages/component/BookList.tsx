import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBook } from "../redux/BookList/action";
import { useAppDispatch } from "../redux/store";
import Book from "./Book";

const BookList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch<any>(getAllBook);
  }, [dispatch]);

  return (
    <div>
      <Book />
    </div>
  );
};

export default BookList;
