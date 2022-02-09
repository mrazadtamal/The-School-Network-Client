import React from "react";
import { Outlet } from "react-router-dom";
import TeachersPanelSideBar from "../TeachersPanelSideBar/TeachersPanelSideBar";

const TeachersPanel = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <TeachersPanelSideBar />
            </div>
            <div className="col-span-10">
                <Outlet />
            </div>
        </div>
    );
};

export default TeachersPanel;
