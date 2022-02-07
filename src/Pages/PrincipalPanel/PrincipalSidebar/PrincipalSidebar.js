import React from 'react';
import { Link } from 'react-router-dom';


const PrincipalSidebar = () => {
  return (
    <div className="">
        <h1 className='mt-8 text-center'> <span className='text-5xl font-bold text-white '>P</span><span className='text-base font-bold text-white '>rincipal Dashboard</span></h1> 

        <Link to="/PrincipalDashboard">
          <p className='principal_sidebar_link  font-bold text-white mt-12'><i className="fas fa-home principal_sidebar_icon"></i>Home</p>
      </Link>

        <Link to="/PrincipalDashboard/PrincipalPublishNotice">
          <p className='principal_sidebar_link  font-bold text-white mt-4'><i className="fas fa-sticky-note principal_sidebar_icon"></i>Publish Notice</p>
        </Link>
    </div>
  )
}

export default PrincipalSidebar;