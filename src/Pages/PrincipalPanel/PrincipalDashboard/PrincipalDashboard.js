import React from "react";
import { Outlet } from "react-router-dom";
import PrincipalNavbar from "../PrincipalNavbar/PrincipalNavbar";
import PrincipalSidebar from "../PrincipalSidebar/PrincipalSidebar";

const PrincipalDashboard = () => {

    return (
        <div style={{width: '100%'}}>
            <PrincipalNavbar/>
            <div className='flex  dashboard_body'>
                <div className='grow-0  bg-black sidebar_colam'>
                    <PrincipalSidebar/>
                </div>
                <div className='grow-4 mx-auto pb-4 justify-content-center'>
                    <Outlet/>
                </div>
            </div>
        </div>
);
};

export default PrincipalDashboard;
