import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SubmitEditedBook } from "../../../../../SchoolRedux/TeacherSlice";

const EditBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/GetEditBook/${id}`)
      .then((res) => res.json())
      .then((data) => setBookData(data));
  }, [id]);

  const OnblurHandler = (e) => {
    const fieldname = e.target.name;
    const fieldvalue = e.target.value;

    const newdata = { ...bookData };
    newdata[fieldname] = fieldvalue;
    setBookData(newdata);
  };
  const OnSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(SubmitEditedBook({ book: bookData, id: id }));
    e.terget.reset();
  };
  return (
    <div className="pl-8 pr-8">
      <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">
        Edit Book Information
      </h1>
      <form onSubmit={OnSubmitHandler}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8">
          <div>
            <label
              htmlFor="first-name"
              className="block principal_form_all_labels"
            >
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              value={bookData.bookName}
              onChange={OnblurHandler}
              className="mt-1 principal_form_all_input"
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block principal_form_all_labels"
            >
              Writer Name
            </label>
            <input
              type="text"
              name="writerName"
              value={bookData.writerName}
              onChange={OnblurHandler}
              className="mt-1 principal_form_all_input"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8">
          <div>
            <label
              htmlFor="first-name"
              className="block principal_form_all_labels"
            >
              Available Books
            </label>
            <input
              type="text"
              name="availableBook"
              value={bookData.availableBook}
              onChange={OnblurHandler}
              className="mt-1 principal_form_all_input"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8">
          <div>
            <label
              htmlFor="first-name"
              className="block principal_form_all_labels"
            >
              Add New Category
            </label>
            <input
              type="text"
              name="category"
              value={bookData.category}
              onChange={OnblurHandler}
              className="mt-1 principal_form_all_input"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mb-8">
          <div>
            <label
              htmlFor="first-name"
              className="block principal_form_all_labels"
            >
              Book Description
            </label>
            <input
              type="text"
              name="description"
              value={bookData.description}
              onChange={OnblurHandler}
              className="mt-1 principal_form_all_input"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-900 rounded-lg my-4 text-white pl-4 pr-4 pt-2 pb-2"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default EditBook;
