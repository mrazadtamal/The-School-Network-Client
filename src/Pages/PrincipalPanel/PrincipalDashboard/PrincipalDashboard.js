import React from "react";
import { Outlet } from "react-router-dom";
import PrincipalNavbar from "../PrincipalNavbar/PrincipalNavbar";
import PrincipalSidebar from "../PrincipalSidebar/PrincipalSidebar";

const PrincipalDashboard = () => {

    return (
        <div style={{width: '100%'}}>
            <PrincipalNavbar/>
            <div className='md:grid md:grid-cols-12  dashboard_body'>
                <div className='col-span-3 lg:col-span-2  bg-black sidebar_colam'>
                    <PrincipalSidebar/>
                </div>
                <div className='col-span-9 lg:col-span-10 mb-10 lg:mb-0 mx-auto pb-4 justify-content-center'>
                    <Outlet/>
                </div>
            </div>
        </div>
);
};

export default PrincipalDashboard;
