import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Book = ({book}) => {

  return (
    <div>
         <img
            src={`data:image/jpeg;base64,${book?.bookImg}`}
            className=" w-72 rounded-lg"
            alt=""
            />
        <p className='text-xl font-bold'>{book.bookName}</p>
        <p className='text-gray-900 font-bold my-4'>{book.writerName}</p>
        <p className='text-blue-900 font-bold'>Available Book: {book.availableBook}</p>
        <button className='bg-blue-900 text-white font-bold text-xl pl-4 pr-4 pt-2 pb-2 rounded-lg mt-4'>Edit</button>
        <button className='bg-yellow-300 font-bold text-xl ml-4 pl-4 pr-4 pt-2 pb-2 rounded-lg mt-4'>Delete</button>
    </div>
  );
}

export default Book;
