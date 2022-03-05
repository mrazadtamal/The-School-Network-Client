import React from 'react';
import stduenthomeimg from '../../../img/studentimg/studentHomeImg.jpg';
// import './StudentPay.css';
const StudentHome = () => {
    return (
        <div className="container">
            <h1 className="text-center student_home_title">Welcome to Your Dashboard</h1>
            <img className='mx-auto' src={stduenthomeimg} alt=''/>
        </div>
    );
};

export default StudentHome;