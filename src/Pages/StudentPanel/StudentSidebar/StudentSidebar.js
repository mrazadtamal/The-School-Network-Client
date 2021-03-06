import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink , useNavigate} from "react-router-dom";
import { getStudentInfo } from "../../../SchoolRedux/StudentSlice";
import useFirebase from "../../Shared/Authentication/Authentication";
import { MdCircleNotifications } from 'react-icons/md';

const StudentSidebar = () => {
  const { user, LogOutUser } = useFirebase();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getStudentInfo(user.email));
  }, [user.email, dispatch]);

  const studentData = useSelector((state) => state.studentStore.studentInfo);

  return (
    <div className="sm:py-10">
      <h1 className="mt-8 text-center">
        <span className="text-5xl font-bold text-white ">S</span>
        <span className=" text-lg font-bold text-white ">tudent Dashboard</span>
      </h1>

      {studentData.img ? (
        <img
          src={`data:image/jpeg;base64,${studentData?.img}`}
          className="w-[50%] rounded-full mx-auto"
          alt=""
        />
      ) : (
        <img
          src="https://res.cloudinary.com/abidazad/image/upload/v1637747947/user_xsd3a7.png"
          alt=""
          className=" w-80"
        />
      )}

      <div className="flex flex-col justify-center items-start tex-left ml-6 right py-3">
        
      <NavLink
          to="/StudentDashboard/NotificationPage"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#FFF",
          })}
        >
          <p className="text-white py-0.5"><MdCircleNotifications size={25} className="inline text-white" /> <span className="ml-1">Notification</span> </p>
        </NavLink>

        
        {/*Home  */}

        <NavLink
          to="/StudentDashboard"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#FFF",
          })}
        >
          <p className="text-white py-0.5">Home</p>
        </NavLink>

        {/* Student Profile */}
        <NavLink
          to="/StudentDashboard/StudentProfile"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#FFF",
          })}
        >
          <p className="text-white py-0.5 hover:bg-yellow-200 w-40 hover:text-black">
            Student Profile
          </p>
        </NavLink>

        {/*Request Extra Care  */}

        <NavLink
          to="/StudentDashboard/RequestCare"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5 hover:bg-yellow-200 w-40 hover:text-black ">
            Request Extra Care
          </p>
        </NavLink>

        {/* Submit Documents */}

        <NavLink
          to="/StudentDashboard/SubmitDocuments"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5 hover:bg-yellow-200 w-40 hover:text-black">
            Submit Documents
          </p>
        </NavLink>

        {/* Student Analytics */}

        <NavLink
          to="/StudentDashboard/StudentAnalytics"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5 hover:bg-yellow-200 w-40 hover:text-black">
            Student Analytics
          </p>
        </NavLink>

        {/* See Result */}

        <NavLink
          to="/StudentDashboard/seeResult"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5 hover:bg-yellow-200 w-40 hover:text-black">
            See Result
          </p>
        </NavLink>

        {/* Transcript */}

        <NavLink
          to="/StudentDashboard/transcript"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Transcript
          </p>
        </NavLink>

        {/*  Concession Form */}

        <NavLink
          to="/StudentDashboard/concessionForm"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Concession Form
          </p>
        </NavLink>


        {/* Notice Board */}

        <NavLink
          to="/StudentDashboard/NoticBoard"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Notice Board
          </p>
        </NavLink>

        {/* Montly Payment List */}

        <NavLink
          to="/StudentDashboard/MonthlyPayment"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Montly Payment List
          </p>
        </NavLink>

          {/*Library */}

          <NavLink
          to="/LibraryBooks"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Library
          </p>
        </NavLink>
          
        {/* videos */}
        <NavLink
          to="/StudentDashboard/videos"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Videos For You
          </p>
        </NavLink>
        

        {/* class routine */}
                <NavLink
          to="/StudentDashboard/ClassRoutine"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Class Routine
          </p>
        </NavLink>
        
        {/* exam routine */}
        <NavLink
          to="/StudentDashboard/ExamRoutine"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white py-0.5   hover:bg-yellow-200 w-40 hover:text-black">
            Exam Routine
          </p>
        </NavLink>
        
        <button
          onClick={() => {
            LogOutUser(navigate);
          }}
          className="my-5"
        >
          <span  className=" bg-red-400 w-20 h-10 p-2 text-black hover:bg-red-500 rounded">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default StudentSidebar;