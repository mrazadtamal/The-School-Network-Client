import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllBooks} from '../../../SchoolRedux/TeacherSlice';
import {YourLentBookList } from '../../../SchoolRedux/StudentSlice';
import Book from './Book';
import LibraryNavbar from './LibraryNavbar/LibraryNavbar';
import './Library.css';
import useFirebase from '../../Shared/Authentication/Authentication';


const BookView = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();

    useEffect(() => {
        dispatch(GetAllBooks())
    },[])
    const Books = useSelector((state) => state.teacherStore.Books)
    
      useEffect(() => {
          dispatch(YourLentBookList(user.email))
      },[dispatch,user.email])
  
  const BookList = useSelector((state) => state.studentStore.LentBookList)

  return (
    <div className=''>
      <LibraryNavbar />
      <div className='library_header'>
          <h1 className="library_title text-5xl">The School Network Library</h1>
      </div>
        
        <div className='book_container mx-auto pt-8 pl-8 pb-8'>
          {
            Books?.map(book => <Book BookList={BookList.CheckList} key={book._id} book={book} />)
          }
        </div>
    </div>
  );
}

export default BookView;
