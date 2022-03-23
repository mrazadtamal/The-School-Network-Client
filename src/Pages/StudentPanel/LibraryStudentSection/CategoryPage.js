import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetCategoryBook, YourLentBookList } from '../../../SchoolRedux/StudentSlice';
import Book from './Book';
import LibraryNavbar from './LibraryNavbar/LibraryNavbar';
import './Library.css';
import useFirebase from '../../Shared/Authentication/Authentication';
import { useLocation } from 'react-router-dom';


const CategoryPage = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();
    const {state} = useLocation();

    useEffect(() => {
        dispatch(GetCategoryBook(state))
    },[state, dispatch])
    const Books = useSelector((states) => states.studentStore.CategoryBook)
    
      useEffect(() => {
          dispatch(YourLentBookList(user.email))
      },[dispatch,user.email])
  
  const BookList = useSelector((state) => state.studentStore.LentBookList)

  console.log('Books', Books)
  return (
    <div className=''>
      <LibraryNavbar />
      <div className='library_header'>
          <h1 className="library_title text-5xl">ALL {state} Books Here</h1>
      </div>
        
        <div className='book_container mx-auto pt-8 pl-8 pb-8'>
          {
            Books?.map(book => <Book BookList={BookList.CheckList} key={book._id} book={book} />)
          }
        </div>
    </div>
  );
}

export default CategoryPage;
