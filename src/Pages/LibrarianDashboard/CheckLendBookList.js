import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllLendBooks, NotifyStudents } from '../../SchoolRedux/TeacherSlice';


const CheckLendBookList = () => {
    const dispatch = useDispatch();
    const dates = new Date().toLocaleDateString()
    useEffect(() => {
        dispatch(GetAllLendBooks())
    },[dispatch])
    const Books = useSelector((state) => state.teacherStore.AllLendBook)
    const NotifyHandler = (data) => {
      const message = 'Please Ruturn Your Lended Book. Your date is over';
      const Notification = {...data, message, received: dates};
      dispatch(NotifyStudents(Notification))
    }
  return (
  <div className="bg-white p-8 rounded-md w-full">
        <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">All Students Lended Book List</h1>
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
                      Student Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Roll
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Class
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Lended Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-800 bg-gray-100 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                      Action
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
                        <p className="text-gray-900 whitespace-no-wrap">{book?.name}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{book?.roll}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{book?.class}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{book?.lentDate}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-400 bg-white text-sm">
                      <p className="text-blue-900 font-bold whitespace-no-wrap">{book?.status === 'Not Returned' ? book?.status : <>Returned at {book?.status}</>}</p>
                      </td>
                      {
                        book?.status === 'Not Returned' ? <td className="px-5  py-5 border-b border-gray-400 bg-white text-sm">
                        <p onClick={() => NotifyHandler({email: book.email, bookName: book.bookName})} className="text-white cursor-pointer text-center font-bold rounded py-2 whitespace-no-wrap bg-indigo-900">Notify For Return</p>
                      </td> : ''
                      }
                    </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
  </div>

  );
}

export default CheckLendBookList;
