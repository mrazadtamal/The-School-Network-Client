import React from 'react';
import { HiViewGrid } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Book = ({book, BookList}) => {

  const navigate = useNavigate()

  const LendBookHandler = (id) => {
    if(BookList.length >= 3){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'You Have Already Lended 3 Books',
        footer: '<h6 className="text-xl font-bold text-blue-900">Please Ruturn Your Books And Try Again</h6>'
      })
    }
    else{
      navigate(`/LentBookForm/${id}`)
    }

  }
  return (
    <div>
         <img
            src={`data:image/jpeg;base64,${book?.bookImg}`}
            className="h-72 w-72 rounded-lg"
            alt=""
            />
        <p className='text-xl font-bold'>{book.bookName}</p>
        <p className='text-gray-900 font-bold my-4'>By {book.writerName}</p>
        <p className='text-blue-900 font-bold'>Available Book: {book.availableBook}</p>

        {
          BookList?.some(item => item.bookId === book.bookId) ?   <p className='text-green-500 font-bold'>You Have Already Lended This Book</p> : <button onClick={() => LendBookHandler(book._id)} className='bg-pink-700 text-white font-bold text-xl pl-4 pr-4 pt-2 pb-2 rounded-lg mt-4'>Lend Book</button>
        }
    </div>
  );
}

export default Book;
