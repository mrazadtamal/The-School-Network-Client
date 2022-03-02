import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import "../Teachers.css";

const TeachersPanelSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-green-300 lg:h-screen">
                <div className="mx-auto">
                    <div className="flex lg:flex-col justify-between items-center lg:justify-center">
                        <div className="flex flex-col items-start justify-center">
                            <aside class="w-full" aria-label="Sidebar">
                                <div class="overflow-y-auto py-4 px-3 rounded hidden md:block">
                                    <ul class="space-y-1">
                                        {/* Dashboard Home */}
                                        <li className="mb-5">
                                            <Link
                                                to="/TeachersDashboard"
                                                className="font-bold text-xl text-blue-800"
                                            >
                                                Teachers Dashboard
                                            </Link>
                                        </li>
                                        {/* Back to home page */}
                                        <li>
                                            <Link
                                                to="/"
                                                className="teacher-dashboard-link"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        {/* Teacher Profile */}
                                        <li>
                                            <Link
                                                to="/TeachersDashboard/Profile"
                                                className="teacher-dashboard-link"
                                            >
                                                View Profile
                                            </Link>
                                        </li>
                                        {/* Manage Students Dropdown Menu */}
                                        <li>
                                            <button
                                                type="button"
                                                class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700"
                                                aria-controls="manage-students"
                                                data-collapse-toggle="manage-students"
                                            >
                                                <span
                                                    class="flex-1 text-left whitespace-nowrap"
                                                    sidebar-toggle-item=""
                                                >
                                                    Manage Students
                                                </span>
                                                <svg
                                                    sidebar-toggle-item=""
                                                    class="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <ul
                                                id="manage-students"
                                                class="hidden"
                                            >
                                                <h3 className="font-medium pl-6">
                                                    Class 1
                                                </h3>
                                                <li>
                                                    <Link
                                                        to="/TeachersDashboard/ManageStudents"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section A
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/TeachersDashboard/ManageStudents"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section B
                                                    </Link>
                                                </li>
                                                <h3 className="font-medium pl-6">
                                                    Class 2
                                                </h3>
                                                <li>
                                                    <Link
                                                        to="/TeachersDashboard/ManageStudents"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section A
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/TeachersDashboard/ManageStudents"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section B
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* Register Students */}
                                        <li>
                                            <Link
                                                to="/TeachersDashboard/RegisterStudent"
                                                className="teacher-dashboard-link"
                                            >
                                                Register Students
                                            </Link>
                                        </li>
                                        {/* Publish Notice */}
                                        <li>
                                            <Link
                                                to="/TeachersDashboard/NoticePublish"
                                                className="teacher-dashboard-link"
                                            >
                                                Publish Notice
                                            </Link>
                                        </li>
                                        {/* Publish Assignment */}
                                        <li>
                                            <Link
                                                to="/TeachersDashboard/publishAssignment"
                                                className="teacher-dashboard-link"
                                            >
                                                Publish Assignment
                                            </Link>
                                        </li>
                                        {/* Add Routine Dropdown Menu */}
                                        <li>
                                            <button
                                                type="button"
                                                class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700"
                                                aria-controls="add-routine"
                                                data-collapse-toggle="add-routine"
                                            >
                                                <span
                                                    class="flex-1 text-left whitespace-nowrap"
                                                    sidebar-toggle-item=""
                                                >
                                                    Add Routine
                                                </span>
                                                <svg
                                                    sidebar-toggle-item=""
                                                    class="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <ul id="add-routine" class="hidden">
                                                <li>
                                                    <Link
                                                        to="/TeachersDashboard/ClassRoutine"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Class Routine
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/TeachersDashboard/ExamRoutine"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Exam Routine
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* Add Result Dropdown Menu */}
                                        <li>
                                            <button
                                                type="button"
                                                class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700"
                                                aria-controls="add-result"
                                                data-collapse-toggle="add-result"
                                            >
                                                <span
                                                    class="flex-1 text-left whitespace-nowrap"
                                                    sidebar-toggle-item=""
                                                >
                                                    Add Result
                                                </span>
                                                <svg
                                                    sidebar-toggle-item=""
                                                    class="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                            <ul id="add-result" class="hidden">
                                                <h3 className="font-medium pl-6">
                                                    Class 1
                                                </h3>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section A
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section B
                                                    </Link>
                                                </li>
                                                <h3 className="font-medium pl-6">
                                                    Class 2
                                                </h3>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section A
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="teacher-dashboard-dropdown-link"
                                                    >
                                                        Section B
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* Student Extra Care Request */}
                                        <li>
                                            <Link
                                                to="/TeachersDashboard/SeeExtraRequestPage"
                                                className="teacher-dashboard-link"
                                            >
                                                ExtraCare Student Request
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        {/*-------------- Mobile View Navigation Bar --------------*/}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <ul class="space-y-1">
                                    {/* Dashboard Home */}
                                    <li className="mb-5">
                                        <Link
                                            to="/TeachersDashboard"
                                            className="font-bold text-xl text-blue-800"
                                        >
                                            Teachers Dashboard
                                        </Link>
                                    </li>
                                    {/* Back to home page */}
                                    <li>
                                        <Link
                                            to="/"
                                            className="teacher-dashboard-link"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    {/* Teacher Profile */}
                                    <li>
                                        <Link
                                            to="/TeachersDashboard/Profile"
                                            className="teacher-dashboard-link"
                                        >
                                            View Profile
                                        </Link>
                                    </li>
                                    {/* Manage Students Dropdown Menu */}
                                    <li>
                                        <button
                                            type="button"
                                            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700"
                                            aria-controls="manage-students"
                                            data-collapse-toggle="manage-students"
                                        >
                                            <span
                                                class="flex-1 text-left whitespace-nowrap"
                                                sidebar-toggle-item=""
                                            >
                                                Manage Students
                                            </span>
                                            <svg
                                                sidebar-toggle-item=""
                                                class="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        <ul id="manage-students" class="hidden">
                                            <h3 className="font-medium pl-6">
                                                Class 1
                                            </h3>
                                            <li>
                                                <Link
                                                    to="/TeachersDashboard/ManageStudents"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section A
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/TeachersDashboard/ManageStudents"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section B
                                                </Link>
                                            </li>
                                            <h3 className="font-medium pl-6">
                                                Class 2
                                            </h3>
                                            <li>
                                                <Link
                                                    to="/TeachersDashboard/ManageStudents"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section A
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/TeachersDashboard/ManageStudents"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section B
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Register Students */}
                                    <li>
                                        <Link
                                            to="/TeachersDashboard/RegisterStudent"
                                            className="teacher-dashboard-link"
                                        >
                                            Register Students
                                        </Link>
                                    </li>
                                    {/* Publish Notice */}
                                    <li>
                                        <Link
                                            to="/TeachersDashboard/NoticePublish"
                                            className="teacher-dashboard-link"
                                        >
                                            Publish Notice
                                        </Link>
                                    </li>
                                    {/* Publish Assignment */}
                                    <li>
                                        <Link
                                            to="/TeachersDashboard/publishAssignment"
                                            className="teacher-dashboard-link"
                                        >
                                            Publish Assignment
                                        </Link>
                                    </li>
                                    {/* Add Routine Dropdown Menu */}
                                    <li>
                                        <button
                                            type="button"
                                            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700"
                                            aria-controls="add-routine"
                                            data-collapse-toggle="add-routine"
                                        >
                                            <span
                                                class="flex-1 text-left whitespace-nowrap"
                                                sidebar-toggle-item=""
                                            >
                                                Add Routine
                                            </span>
                                            <svg
                                                sidebar-toggle-item=""
                                                class="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        <ul id="add-routine" class="hidden">
                                            <li>
                                                <Link
                                                    to="/TeachersDashboard/ClassRoutine"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Class Routine
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/TeachersDashboard/ExamRoutine"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Exam Routine
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Add Result Dropdown Menu */}
                                    <li>
                                        <button
                                            type="button"
                                            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-gray-700"
                                            aria-controls="add-result"
                                            data-collapse-toggle="add-result"
                                        >
                                            <span
                                                class="flex-1 text-left whitespace-nowrap"
                                                sidebar-toggle-item=""
                                            >
                                                Add Result
                                            </span>
                                            <svg
                                                sidebar-toggle-item=""
                                                class="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                        <ul id="add-result" class="hidden">
                                            <h3 className="font-medium pl-6">
                                                Class 1
                                            </h3>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section A
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section B
                                                </Link>
                                            </li>
                                            <h3 className="font-medium pl-6">
                                                Class 2
                                            </h3>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section A
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="teacher-dashboard-dropdown-link"
                                                >
                                                    Section B
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Student Extra Care Request */}
                                    <li>
                                        <Link
                                            to="/TeachersDashboard/SeeExtraRequestPage"
                                            className="teacher-dashboard-link"
                                        >
                                            ExtraCare Student Request
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default TeachersPanelSideBar;
