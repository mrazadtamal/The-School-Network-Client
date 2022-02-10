import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentHome from '../StudentHome/StudentHome';
import StudentSidebar from '../StudentSidebar/StudentSidebar';

const StudentDashboard = () => {
    return (
        <div className="grid grid-cols-12 align-center justify-center">
            <div className="bg-slate-900 lg:col-span-2 sm:col-span-12 h-[100vh]">
                <StudentSidebar/>
            </div>
            <div className="lg:col-span-10">
                <Outlet/>
            </div>
        </div>
    );
};

export default StudentDashboard;