import React from 'react';
import {
    Outlet
  } from "react-router-dom";
import PrincipalNavbar from '../PrincipalNavbar/PrincipalNavbar';
import PrincipalSidebar from '../PrincipalSidebar/PrincipalSidebar';

const PrincipalDashboard = () => {
    return (
        <div style={{width: '100%'}}>
            <PrincipalNavbar/>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-black sidebar_colam'>
                    <PrincipalSidebar/>
                </div>
                <div className='col-span-10 '>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default PrincipalDashboard;