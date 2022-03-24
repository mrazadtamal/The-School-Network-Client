import React from "react";
import { Outlet } from "react-router-dom";
import LibrarianSidebar from '../LibrarianSidebar';
import LibrarianNavbar from '../LibrarianNavbar'
const LibrarianDashboard = () => {

    return (
        <div style={{width: '100%'}}>
            <LibrarianNavbar />
            <div className='md:grid md:grid-cols-12  dashboard_body'>
                <div className='col-span-3 lg:col-span-2  librarian_sidebar_colam'>
                    <LibrarianSidebar />
                </div>
                <div className='col-span-9 lg:col-span-10 mb-10 lg:mb-0 mx-auto pb-4 justify-content-center'>
                
                    <Outlet/>
                </div>
            </div>
        </div>
);
};

export default LibrarianDashboard;
