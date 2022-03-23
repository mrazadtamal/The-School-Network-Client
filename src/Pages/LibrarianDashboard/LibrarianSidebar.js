import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookMedical } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { MdLibraryBooks } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';
import {  useNavigate } from "react-router-dom";
import useFirebase from "../Shared/Authentication/Authentication";
import './Librarian.css'

const LibrarianSidebar = () => {
  const {user, LogOutUser} = useFirebase()
  const [shown1, setShown1] = useState(false)
  const navigate = useNavigate()

  const LogoutHandler = () => {
    LogOutUser(navigate)
  }
  const location = useLocation()
  
  return (
    <div className="">
      <h1 className="mt-8 text-center text-3xl font-bold text-white">
        Librarian
      </h1>

      {
        user.email ?  <button onClick={LogoutHandler} className="mt-8 mb-4 principal_logout_btn">LogOut</button> : ''
      }
     
      <Link to="/LibrarianDashboard"> 
        <p className={location.pathname === '/LibrarianDashboard' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><i className="fas fa-home principal_sidebar_icon"></i>Home</p>
      </Link>
      <Link to="/LibrarianDashboard/BooksAdd"> 
        <p className={location.pathname === '/LibrarianDashboard/BooksAdd' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><FaBookMedical className='principal_react_icons' />Add New Book</p>
      </Link>
      <Link to="/LibrarianDashboard/ManageBooks"> 
        <p className={location.pathname === '/LibrarianDashboard/ManageBooks' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><BsBook className='principal_react_icons' />Manage Books</p>
      </Link>
      <Link to="/LibrarianDashboard/BookAnalytics"> 
        <p className={location.pathname === '/LibrarianDashboard/BookAnalytics' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><SiSimpleanalytics className='principal_react_icons' />Book Analytics</p>
      </Link>
      <Link to="/LibrarianDashboard/CheckLendBookList"> 
        <p className={location.pathname === '/LibrarianDashboard/CheckLendBookList' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><MdLibraryBooks className='principal_react_icons' />Check Lended BookList</p>
      </Link>
      
    </div>
    );
};

export default LibrarianSidebar;
