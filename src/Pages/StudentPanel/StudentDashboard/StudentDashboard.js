import React from "react";
import { Outlet } from "react-router-dom";
import StudentHome from "../StudentHome/StudentHome";
import StudentSidebar from "../StudentSidebar/StudentSidebar";

const StudentDashboard = () => {
  return (
    <div className="lg:grid md:grid grid-cols-12 sm:flex align-center justify-center">
      <div className="bg-black lg:col-span-2 md:col-span-2 lg:h-[100vh] md:h-[100vh] sm:h-full">
        <StudentSidebar />
      </div>
      <div className="lg:col-span-10 md:col-span-10 lg:h-[100vh] md:h-[100vh] sm:h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
