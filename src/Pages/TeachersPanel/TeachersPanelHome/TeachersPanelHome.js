import React from "react";
import teachersHomePageImg from "../../../img/teachershomepageimg.jpg";

const TeachersPanelHome = () => {
    return (
        <div>
            <h1 className="text-center text-5xl text-blue-800 my-5">
                The School Network
            </h1>
            <h2 className="text-center text-2xl text-blue-600">
                Teachers Panel Body
            </h2>
            <img className="w-1/2 mx-auto" src={teachersHomePageImg} alt="" />
        </div>
    );
};

export default TeachersPanelHome;
