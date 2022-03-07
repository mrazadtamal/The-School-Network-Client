import React from "react";
import homelogo from '../../../img/teachersimage/teacher_home_img.webp'
const TeachersPanelHome = () => {
    return (
        <div>
            <h2 className="text-center mt-12 text-5xl teachers_home_title">
                Teachers Panel 
            </h2>
            <h1 className="text-center font-bold text-xl text-gray-500 mt-2">
                The School Network
            </h1>
            <img className="mx-auto" src={homelogo} alt=""/>
        </div>
    );
};

export default TeachersPanelHome;
