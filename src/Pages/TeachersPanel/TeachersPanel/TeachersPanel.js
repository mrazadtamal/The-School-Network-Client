import React from "react";
import { Outlet } from "react-router-dom";
import TeachersPanelSideBar from "../TeachersPanelSideBar/TeachersPanelSideBar";
import '../Teachers.css';

const TeachersPanel = () => {
    return (
        <div className="md:grid md:grid-cols-12">
            <div className="col-span-3 lg:col-span-2 teacher_side_colam">
                <TeachersPanelSideBar />
            </div>
            <div className="col-span-9 lg:col-span-10 mb-10 lg:mb-0">
                <Outlet />
            </div>
        </div>
    );
};

export default TeachersPanel;
