import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllBooks} from '../../../../SchoolRedux/TeacherSlice';
import Book from './Book';

const ManageBooks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllBooks())
    },[])
    const Books = useSelector((state) => state.teacherStore.Books)
    console.log('book',Books)
  return (
    <div className='pl-8 pr-8'>
        <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">All Library Books Here</h1>
        <div className='book_container'>
          {
            Books?.map(book => <Book key={book._id} book={book} />)
          }
        </div>
    </div>
  );
}

export default ManageBooks;