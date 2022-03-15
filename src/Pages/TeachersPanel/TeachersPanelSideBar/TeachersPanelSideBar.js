import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import {  FaUserGraduate , FaRegAddressCard} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { SiSamsungpay} from 'react-icons/si';
import { IoIosArrowDown} from 'react-icons/io';
import {  useNavigate } from "react-router-dom";
import useFirebase from "../../Shared/Authentication/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherInfo } from "../../../SchoolRedux/TeacherSlice";

const TeachersPanelSideBar = () => {
  const dispatch = useDispatch();
  const {user, LogOutUser} = useFirebase()
  const [shown1, setShown1] = useState(false)
  const [shown2, setShown2] = useState(false)
  const [shown3, setShown3] = useState(false)
  const [shown4, setShown4] = useState(false)
  const navigate = useNavigate()
  const ResultNavigateHandler = (route, classname) => {
    navigate(`/TeachersDashboard/${route}`, {state: classname})
  }
  const ManageStudentHandler = (route, classname) => {
    navigate(`/TeachersDashboard/${route}`, {state: classname})
  }
  const LogoutHandler = () => {
    LogOutUser(navigate)
  }
  const location = useLocation()
  useEffect(() => {
    dispatch(getTeacherInfo(user.email));
}, [user.email, dispatch]);

const teachersData = useSelector((state) => state.teacherStore.teacherInfo);
  return (
    <div className="">
      {
        teachersData.img ? <img
        src={`data:image/jpeg;base64,${teachersData?.img}`}
        className="mx-auto mt-2 teacher_profile_img"
        alt=""
    />  : <img
    src="https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png"
    alt=""
    className="mx-auto mt-2 teacher_profile_img"
/>
      }

      {
        user.email ?  <p onClick={LogoutHandler} className="mt-4 text-center mx-auto mb-4 teacher_logout_btn">LogOut <FiLogOut className="logout_icons"/></p> : ''
      }
    <Link to="/TeachersDashboard/Profile">
          <p className={location.pathname === '/TeachersDashboard/Profile' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><i className="fas fa-sticky-note principal_sidebar_icon"></i>My Profile</p>
    </Link>

      <Link to="/TeachersDashboard"> 
        <p className={location.pathname === '/TeachersDashboard' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><i className="fas fa-home principal_sidebar_icon"></i>Home</p>
      </Link>

        <Link to="/TeachersDashboard/NoticePublish">
          <p className={location.pathname === '/TeachersDashboard/NoticePublish' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}><i className="fas fa-sticky-note principal_sidebar_icon"></i>Publish Notice</p>
        </Link>

        
        <p onClick={() => setShown2(!shown2)} className="principal_sidebar_link mt-4"><span> + Publish Results <IoIosArrowDown className="principal_react_icons"/> </span></p>
            {
              shown2 && <ul className="drop_link">
              {teachersData.teacherclass === 'class-one' && <li onClick={() => ResultNavigateHandler('ClassOneToTwo', 'Class One')} className="class_text">Class One</li> }

              {teachersData.teacherclass === 'class-two' && <li onClick={() => ResultNavigateHandler('ClassOneToTwo', 'Class Two')} className="class_text">Class Two</li>}

              {teachersData.teacherclass === 'class-three' && <li onClick={() => ResultNavigateHandler('ClassThreeAndFour', 'Class Three')} className="class_text">Class Three</li>}

              {teachersData.teacherclass === 'class-four' && <li onClick={() => ResultNavigateHandler('ClassThreeAndFour', 'Class Four')} className="class_text">Class Four</li>}

              {teachersData.teacherclass === 'class-five' && <li onClick={() => ResultNavigateHandler('ClassFive', 'Class Five')} className="class_text">Class Five</li>}
            </ul>
            }

        
          <p onClick={() => setShown1(!shown1)} className="principal_sidebar_link mt-4"><span><FaUserGraduate className='principal_react_icons'/>Manage Students <IoIosArrowDown className="principal_react_icons"/></span></p>
          {
            shown1 && <ul className="drop_link">
            {teachersData.teacherclass === 'class-one' && <li onClick={() => ManageStudentHandler('ManageStudent', 'class-one')} className="class_text">Class One</li>}
            
            {teachersData.teacherclass === 'class-two' && <li onClick={() => ManageStudentHandler('ManageStudent', 'class-two')} className="class_text">Class Two</li>}

            {teachersData.teacherclass === 'class-three' && <li onClick={() => ManageStudentHandler('ManageStudent', 'class-three')} className="class_text">Class Three</li>}
            
            {teachersData.teacherclass === 'class-four' && <li onClick={() => ManageStudentHandler('ManageStudent', 'class-four')} className="class_text">Class Four</li>}
            
            {teachersData.teacherclass === 'class-five' && <li onClick={() => ManageStudentHandler('ManageStudent', 'class-five')} className="class_text">Class Five</li>}
          </ul>
          }
        
        <Link to="/TeachersDashboard/RegisterStudent">
          <p className={location.pathname === '/TeachersDashboard/RegisterStudent' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <FaRegAddressCard className='principal_react_icons' />Register Student</p>
        </Link>

        <Link to="/TeachersDashboard/publishAssignment">
          <p className={location.pathname === '/TeachersDashboard/publishAssignment' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <SiSamsungpay className='principal_react_icons' />Assign Assignment</p>
        </Link>

        <Link to="/TeachersDashboard/SeeExtraRequestPage">
          <p className={location.pathname === '/TeachersDashboard/SeeExtraRequestPage' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <SiSamsungpay className='principal_react_icons' />View ExtraCare Request</p>
        </Link>

        <p onClick={() => setShown3(!shown3)} className="principal_sidebar_link mt-4"><span><FaUserGraduate className='principal_react_icons'/>Publish Routine <IoIosArrowDown className="principal_react_icons"/></span></p>
          {
            shown3 && <ul className="drop_link">
            <li onClick={() => navigate('/TeachersDashboard/ClassRoutine')} className="class_text">Class Routine</li>
            <li  onClick={() => navigate('/TeachersDashboard/ExamRoutine')} className="class_text">Exam Routine</li>
          </ul>
          }

      <Link to="/TeachersDashboard/ViewNotice">
          <p className={location.pathname === '/TeachersDashboard/ViewNotice' ? 'active_principal_link mt-4' : 'principal_sidebar_link   text-white mt-4'}> <SiSamsungpay className='principal_react_icons' />View Notice</p>
        </Link>

          <p onClick={() => setShown4(!shown4)} className="principal_sidebar_link mt-4"><span><SiSamsungpay className='principal_react_icons'/>Library <IoIosArrowDown className="principal_react_icons"/></span></p>
          {
            shown4 && <ul className="drop_link">
            <Link to="/TeachersDashboard/BooksAdd"><li className="class_text">Add Books</li></Link>
            <Link to="/TeachersDashboard/ManageBooks"><li className="class_text">Manage Books</li></Link>
          </ul>
          }
    </div>
    );
};

export default TeachersPanelSideBar;
