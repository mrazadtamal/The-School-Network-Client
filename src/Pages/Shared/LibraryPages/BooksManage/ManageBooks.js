import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllBooks} from '../../../../SchoolRedux/TeacherSlice';
import useFirebase from '../../Authentication/Authentication';
import Book from './Book';

const ManageBooks = () => {
    const dispatch = useDispatch();
    const {user} = useFirebase()
    useEffect(() => {
        dispatch(GetAllBooks())
    },[])
    const Books = useSelector((state) => state.teacherStore.Books)
    console.log('ddd',user.email)
    const [userRole,setUserRole] = useState({})
    useEffect(() => {
      fetch(
        `http://localhost:5000/checkUser?email=${user.email}`
      )
      .then(res => res.json())
      .then(data => setUserRole(data))
    },[user.email])
  return (
    <div className='pl-8 pr-8'>
        <h1 className="text-3xl text-blue-900 text-center my-8 font-bold">All Library Books Here</h1>
        <div className='book_container'>
          {
            Books?.map(book => <Book userRole={userRole} key={book._id} book={book} />)
          }
        </div>
    </div>
  );
}

export default ManageBooks;