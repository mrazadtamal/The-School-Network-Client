import React from "react";
import { Outlet } from "react-router-dom";
import PrincipalSidebar from "../PrincipalSidebar/PrincipalSidebar";

const PrincipalDashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-black sidebar_colam">
        <PrincipalSidebar />
      </div>
      <div className="col-span-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default PrincipalDashboard;
