import React from "react";
import { Outlet } from "react-router-dom";
 import TeachersPanelSideBar from "../TeachersPanelSideBar/TeachersPanelSideBar";

const TeachersPanel = () => {
    return (
        <div>
            <div className="h-10 bg-blue-600 text-center">
                Placeholder Navigation bar
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <Outlet />
                </div>
                <div className="col-span-3">
                    <TeachersPanelSideBar />
                </div>
            </div>
        </div>
    );
};

export default TeachersPanel;
