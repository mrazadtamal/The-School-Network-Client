import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {DeleteBook, GetAllBooks} from '../../../../SchoolRedux/TeacherSlice';

const ManageBooks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    useEffect(() => {
        dispatch(GetAllBooks())
    },[count,dispatch])
    const Books = useSelector((state) => state.teacherStore.Books)
    const DeleteBookHandler = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(DeleteBook(id))
          setCount(count + 1)
        }
      })

     
    }
  return (
  <div className="bg-white p-8 rounded-md w-full">
        <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">All Library Books Here</h1>
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
                      Available Books
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Edit
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Delete
                    </th>

                  </tr>
              </thead>
                <tbody>
                  {
                    Books?.map(book => <tr>
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
                        <p className="text-gray-900 whitespace-no-wrap">{book?.availableBook}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <span onClick={() => navigate(`/TeachersDashboard/EditBook/${book._id}`)} className="relative inline-block px-3 py-1 font-semibold bg-blue-900 border-lg rounded  text-white text-lg font-bold cursor-pointer leading-tight border-gray-400 py-2">
                          <span className="relative ">EDIT</span>
                        </span>
                      </td>
                      <td className=" px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <span onClick={() => DeleteBookHandler(book._id)}  className="relative inline-block px-3 py-1 font-semibold bg-yellow-300 border-lg rounded  text-blue-900 text-lg font-bold leading-tight cursor-pointer border-gray-400 py-2">
                          <span className="relative ">DELETE</span>
                        </span>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
  </div>

  );
}

export default ManageBooks;