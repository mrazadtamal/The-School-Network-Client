import React, {useState} from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from 'react-icons/hi';
import { GiTeacher } from 'react-icons/gi';
import { FaChalkboardTeacher, FaUserGraduate , FaRegAddressCard} from 'react-icons/fa';
import { SiSamsungpay} from 'react-icons/si';
import { IoIosArrowDown} from 'react-icons/io';
import {  useNavigate } from "react-router-dom";
import useFirebase from "../../Shared/Authentication/Authentication";

const PrincipalSidebar = () => {
  const {user, LogOutUser} = useFirebase()
  const [shown1, setShown1] = useState(false)
  const [shown2, setShown2] = useState(false)
  const navigate = useNavigate()
  const ResultNavigateHandler = (route, classname) => {
    navigate(`/PrincipalDashboard/${route}`, {state: classname})
  }
  const ManageStudentHandler = (route, classname) => {
    navigate(`/PrincipalDashboard/${route}`, {state: classname})
  }
  const LogoutHandler = () => {
    LogOutUser(navigate)
  }
  return (
    <div className="">
      <h1 className="mt-8 text-center">
        <span className="text-5xl font-bold principal_title ">P</span>
        <span className="text-base font-bold principal_title">
          rincipal Dashboard
        </span>
      </h1>

      {
        user.email ?  <button onClick={LogoutHandler} className="mt-8 mb-4 principal_logout_btn">LogOut</button> : ''
      }
     
      <Link to="/PrincipalDashboard"> 
        <p className='principal_sidebar_link   text-white '><i className="fas fa-home principal_sidebar_icon"></i>Home</p>
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
        
        <button onClick={() => setShown2(!shown2)} className="drop_dwon_btn"><span> + Publish Results <IoIosArrowDown className="principal_react_icons"/> </span></button>
            {
              shown2 && <ul className="drop_link">
              <li onClick={() => ResultNavigateHandler('ClassOneToTwo', 'Class One')} className="class_text">Class One</li> 
              <li onClick={() => ResultNavigateHandler('ClassOneToTwo', 'Class Two')} className="class_text">Class Two</li>

              <li onClick={() => ResultNavigateHandler('ClassThreeAndFour', 'Class Three')} className="class_text">Class Three</li>
              <li onClick={() => ResultNavigateHandler('ClassThreeAndFour', 'Class Four')} className="class_text">Class Four</li>

              <li onClick={() => ResultNavigateHandler('ClassFive', 'Class Five')} className="class_text">Class Five</li>
            </ul>
            }

        
          <button onClick={() => setShown1(!shown1)} className="drop_dwon_btn"><span><FaUserGraduate className='principal_react_icons'/>Manage Students <IoIosArrowDown className="principal_react_icons"/></span></button>
          {
            shown1 && <ul className="drop_link">
            <li onClick={() => ManageStudentHandler('PrincipalManageStudent', 'class-one')} className="class_text">Class One</li>
            <li onClick={() => ManageStudentHandler('PrincipalManageStudent', 'class-two')} className="class_text">Class Two</li>
            <li onClick={() => ManageStudentHandler('PrincipalManageStudent', 'class-three')} className="class_text">Class Three</li>
            <li onClick={() => ManageStudentHandler('PrincipalManageStudent', 'class-four')} className="class_text">Class Four</li>
            <li onClick={() => ManageStudentHandler('PrincipalManageStudent', 'class-five')} className="class_text">Class Five</li>
          </ul>
          }
        
        <Link to="/PrincipalDashboard/RegisterStudent">
          <p className='principal_sidebar_link   text-white mt-4'> <FaRegAddressCard className='principal_react_icons' />Register Student</p>
        </Link>

        <Link to="/PrincipalDashboard/UploadPayment">
          <p className='principal_sidebar_link   text-white mt-4'> <SiSamsungpay className='principal_react_icons' />Upload Payment</p>
        </Link>

        {/* <Link to="/PrincipalDashboard/CheckPaymentStatus">
          <p className='principal_sidebar_link   text-white mt-4'> <SiSamsungpay className='principal_react_icons' />Check Payment Status</p>
        </Link> */}

    </div>
  );
};

export default PrincipalSidebar;
