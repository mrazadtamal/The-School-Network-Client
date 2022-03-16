import React from "react";
import { Link, NavLink } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <div className="sm:py-10">
      <h1 className="mt-8 text-center">
        <span className="text-5xl font-bold text-white ">S</span>
        <span className=" text-lg font-bold text-white ">tudent Dashboard</span>
      </h1>

      <img
        className="  rounded-full h-28 w-28 text-center m-auto mt-5 mb-5"
        src="https://res.cloudinary.com/abidazad/image/upload/v1637747947/user_xsd3a7.png"
        alt=""
      />

      <div className="flex flex-col justify-center items-start ml-6 py-3">
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

        {/* Notice Board */}

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
      </div>
    </div>
  );
};

export default StudentSidebar;
