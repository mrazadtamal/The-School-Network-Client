import React from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from 'react-icons/hi';
import { GiTeacher } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';

const PrincipalSidebar = () => {
  return (
    <div className="">
      <h1 className="mt-8 text-center">
        {" "}
        <span className="text-5xl font-bold text-white ">P</span>
        <span className="text-base font-bold text-white ">
          rincipal Dashboard
        </span>
      </h1>

        <Link to="/PrincipalDashboard">
          <p className='principal_sidebar_link   text-white mt-12'><i className="fas fa-home principal_sidebar_icon"></i>Home</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalPublishNotice">
          <p className='principal_sidebar_link   text-white mt-4'><i className="fas fa-sticky-note principal_sidebar_icon"></i>Publish Notice</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalAnnouncement">
          <p className='principal_sidebar_link   text-white mt-4'> <HiSpeakerphone className='principal_react_icons'/> Announcement</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalManageTeacher">
          <p className='principal_sidebar_link   text-white mt-4'>  <GiTeacher className='principal_react_icons' /> Manage Teachers</p>
        </Link>

        <Link to="/PrincipalDashboard/RegisterTeacher">
          <p className='principal_sidebar_link   text-white mt-4'> <FaChalkboardTeacher className='principal_react_icons' /> Register Teachers</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalManageStudent">
          <p className='principal_sidebar_link   text-white mt-4'> <FaChalkboardTeacher className='principal_react_icons' />Manage Students</p>
        </Link>

        <Link to="/PrincipalDashboard/UploadPayment">
          <p className='principal_sidebar_link   text-white mt-4'> <FaChalkboardTeacher className='principal_react_icons' />Upload Payment</p>
        </Link>
    </div>
  );
};

export default PrincipalSidebar;
