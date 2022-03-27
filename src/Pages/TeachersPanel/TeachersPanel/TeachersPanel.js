import React from "react";
import { Outlet } from "react-router-dom";
import TeachersPanelSideBar from "../TeachersPanelSideBar/TeachersPanelSideBar";
import '../Teachers.css';
import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';

const TeachersPanel = () => {
    return (
        <div style={{width: '100%'}}> 
            <TeacherNavbar />
           <div className='md:grid md:grid-cols-12  dashboard_body'>
               <div className='col-span-3 lg:col-span-2  bg-black teacher_side_colam'>
                <TeachersPanelSideBar />
               </div>
               <div className='col-span-9 lg:col-span-10 lg:mb-0 flex flex-col justify-center item-center'>
                   <Outlet/>
               </div>
           </div>
       </div>
    );
};

export default TeachersPanel;
