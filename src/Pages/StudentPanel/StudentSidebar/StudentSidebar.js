import React from 'react';
import { Link } from 'react-router-dom';

const StudentSidebar = () => {
    return (
        <div className="">
            <h1 className="text-5xl">Student Dashboard</h1>
            <Link to="/StudentDashboard">
                <p className="text-white">Home</p>
            </Link>
            <Link to="/StudentDashboard/RequestCare">
                <p className="text-white">Request Extra Care</p>
            </Link>
        </div>
    );
};

export default StudentSidebar;