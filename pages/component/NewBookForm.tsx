import React, { useEffect, useId, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { IInitialStateNewBook } from "../redux/addNewBook/type";
import { addBook, updateBook } from "../redux/BookList/action";
import { freeBook } from "../redux/addNewBook/action";

const initialBookForm = {
  id: 0,
  name: "",
  author: "",
  thumbnail: "",
  price: 0,
  rating: 0,
  featured: false,
};
const NewBookForm = () => {
  const book = useAppSelector((state) => state.newBook);
  const dispatch = useAppDispatch();
  const [bookForm, setBookForm] =
    useState<IInitialStateNewBook>(initialBookForm);

  useEffect(() => {
    setBookForm(book);
  }, [book]);

  const formHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setBookForm({
      ...bookForm,
      [e.currentTarget.name]:
        e.currentTarget.type === "checkbox"
          ? e.currentTarget.checked
          : e.currentTarget.value,
    });
  };
  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (bookForm.id == 0) {
      dispatch<any>(addBook(bookForm));
      setBookForm(initialBookForm);
    } else if (bookForm!.id! !== 0) {
      dispatch<any>(updateBook(bookForm!.id!, bookForm));
      dispatch<any>(freeBook());
    }
  };
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={formSubmitHandler}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={bookForm.name}
            onChange={formHandler}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={bookForm.author}
            onChange={formHandler}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={bookForm.thumbnail}
            onChange={formHandler}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={bookForm.price}
              onChange={formHandler}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={bookForm.rating}
              onChange={formHandler}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={bookForm.featured}
            onChange={formHandler}
            defaultChecked={bookForm.featured}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>
        {bookForm.id !== 0 ? (
          <button type="submit" className="submit" id="submit">
            Update Book
          </button>
        ) : (
          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        )}
      </form>
    </div>
  );
};

export default NewBookForm;
