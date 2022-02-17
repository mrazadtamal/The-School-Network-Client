import React from "react";
import { Link, NavLink } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <div className="sm:py-10">
      <h1 className="text-4xl font-bold text-white text-center">
        Student Dashboard
      </h1>
      <div className="flex flex-col justify-center items-center">
        <NavLink
          to="/StudentDashboard"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#FFF",
          })}
        >
          <p className="text-white">Home</p>
        </NavLink>
        <NavLink
          to="/StudentDashboard/RequestCare"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white">Request Extra Care</p>
        </NavLink>
        <NavLink
          to="/StudentDashboard/SubmitDocuments"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white">Submit Documents</p>
        </NavLink>
        <NavLink
          to="/StudentDashboard/StudentPay"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white">Pay</p>
        </NavLink>
        <NavLink
          to="/StudentDashboard/StudentAnalytics"
          style={({ isActive }) => ({
            color: isActive ? "#0bc28b" : "#545e6f",
            background: isActive ? "#7600dc" : "black",
          })}
        >
          <p className="text-white">Student Analytics</p>
        </NavLink>
      </div>
    </div>
  );
};

export default StudentSidebar;
