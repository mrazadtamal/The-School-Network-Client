import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [shown3, setShown3] = useState(false)
  const navigate = useNavigate()
  const PaymentCheckHandler = (route, classname) => {
    navigate(`/PrincipalDashboard/${route}`, {state: classname})
  }
  const ManageStudentHandler = (route, classname) => {
    navigate(`/PrincipalDashboard/${route}`, {state: classname})
  }
  const LogoutHandler = () => {
    LogOutUser(navigate)
  }
  const location = useLocation()
  
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
        <p className={location.pathname === '/PrincipalDashboard' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><i className="fas fa-home principal_sidebar_icon"></i>Home</p>
      </Link>

        <Link to="/PrincipalDashboard/PrincipalPublishNotice">
          <p className={location.pathname === '/PrincipalDashboard/PrincipalPublishNotice' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><i className="fas fa-sticky-note principal_sidebar_icon"></i>Publish Notice</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalAnnouncement">
          <p className={location.pathname === '/PrincipalDashboard/PrincipalAnnouncement' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <HiSpeakerphone className='principal_react_icons'/> Announcement</p>
        </Link>

        <Link to="/PrincipalDashboard/PrincipalManageTeacher">
          <p className={location.pathname === '/PrincipalDashboard/PrincipalManageTeacher' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}>  <GiTeacher className='principal_react_icons' /> Manage Teachers</p>
        </Link>

        <Link to="/PrincipalDashboard/RegisterTeacher">
          <p className={location.pathname === '/PrincipalDashboard/RegisterTeacher' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <FaChalkboardTeacher className='principal_react_icons' /> Register Teachers</p>
        </Link>
        
          <p onClick={() => setShown1(!shown1)} className="principal_sidebar_link mt-4"><span><FaUserGraduate className='principal_react_icons'/>Manage Students <IoIosArrowDown className="principal_react_icons"/></span></p>
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
          <p className={location.pathname === '/PrincipalDashboard/RegisterStudent' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <FaRegAddressCard className='principal_react_icons' />Register Student</p>
        </Link>

        <Link to="/PrincipalDashboard/UploadPayment">
          <p className={location.pathname === '/PrincipalDashboard/UploadPayment' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <SiSamsungpay className='principal_react_icons' />Upload Payment</p>
        </Link>

          <p onClick={() => setShown2(!shown2)} className="principal_sidebar_link mt-4"><span><SiSamsungpay className='principal_react_icons'/>Payment Details <IoIosArrowDown className="principal_react_icons"/></span></p>
          {
            shown2 && <ul className="drop_link">
            <li onClick={() => PaymentCheckHandler('CheckPaymentStatus', 'class-one')} className="class_text">Class One</li>
            <li onClick={() => PaymentCheckHandler('CheckPaymentStatus', 'class-two')} className="class_text">Class Two</li>
            <li onClick={() => PaymentCheckHandler('CheckPaymentStatus', 'class-three')} className="class_text">Class Three</li>
            <li onClick={() => PaymentCheckHandler('CheckPaymentStatus', 'class-four')} className="class_text">Class Four</li>
            <li onClick={() => PaymentCheckHandler('CheckPaymentStatus', 'class-five')} className="class_text">Class Five</li>
          </ul>
          }

          <Link to="/PrincipalDashboard/CheckAdmissionForm">
            <p className={location.pathname === '/PrincipalDashboard/CheckAdmissionForm' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <FaChalkboardTeacher className='principal_react_icons' />Check AdmissionForm</p>
          </Link>

          <Link to="/PrincipalDashboard/RegisterOtherStaff">
          <p className={location.pathname === '/PrincipalDashboard/RegisterOtherStaff' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <FaChalkboardTeacher className='principal_react_icons' /> Register Other Staff</p>
        </Link>

      <Link to="/PrincipalDashboard/ConcessionForm">
        <p
          className={
            location.pathname === "/PrincipalDashboard/ConcessionForm"
              ? "active_principal_link mt-4"
              : "principal_sidebar_link   text-white mt-4"
          }
        >
          {" "}
          <FaChalkboardTeacher className="principal_react_icons" />
          Concession Form
        </p>
      </Link>

        </div>
    );
};

export default PrincipalSidebar;
