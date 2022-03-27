import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReturnBook, YourLentBookList } from '../../../SchoolRedux/StudentSlice';
import useFirebase from '../../Shared/Authentication/Authentication';
import LibraryNavbar from './LibraryNavbar/LibraryNavbar';

const YourLentedBookList = () => {
  const [count, setCount] = useState(0)
  const { user } = useFirebase();
  const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(YourLentBookList(user.email))
    },[count,dispatch,user.email])

const BookList = useSelector((state) => state.studentStore.LentBookList)


const ReturnBookHandler = (returnData) => {
  dispatch(ReturnBook(returnData))
  setCount(count + 1)
} 

  return (
   <div style={{width: '100%'}}>
           <LibraryNavbar />
      {
        BookList.LendList?.length === 0 ? <h1 className="text-5xl my-12 font-bold text-yellow-400 text-center">No Books Lented Yet</h1> : <div className="bg-white p-8 rounded-md w-full">
          <h1 className='text-3xl text-center font-bold text-blue-800 my-8'>Your Lented Book-List</h1>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Book Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Writer Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Lent Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Return Book
                    </th>

                  </tr>
              </thead>
                <tbody>
                  {
                    BookList.LendList?.map(book => <tr>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                          <img
                            src={`data:image/jpeg;base64,${book?.bookImg}`}
                            className="w-full h-full rounded-full"
                            alt=""
                            />
                            
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {book.bookName}
                            </p>
                          </div>
                        </div>
                      </td>
                  
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                        {book.writerName}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{book?.lentDate}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <p className="text-blue-900 font-bold whitespace-no-wrap">{book?.status === 'Not Returned' ? book?.status : <>Returned at {book?.status}</>}</p>
                      </td>
                      <td className=" px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        {book.status === 'Not Returned' ? <span onClick={() => ReturnBookHandler({bookId: book.bookId, id: book._id})} className="relative inline-block px-3 py-1 font-semibold bg-pink-600 text-white text-lg font-bold leading-tight border-gray-400 py-2 cursor-pointer">
                          <span className="relative ">RETURN BOOK</span>
                        </span> : <span className="relative inline-block px-3 py-1 font-semibold  text-green-500 text-lg font-bold leading-tight border-gray-400 py-2">
                          <span className="relative ">RETURNED</span>
                        </span>}
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      }
   </div>
  );
}

export default YourLentedBookList;
