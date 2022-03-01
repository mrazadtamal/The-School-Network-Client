import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const TeachersPanelSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-green-300 lg:h-screen">
                <div className="mx-auto">
                    <div className="flex lg:flex-col justify-between items-center lg:justify-center">
                        <div className="flex flex-col items-start justify-center">
                            <div>
                                <Link
                                    to="/TeachersDashboard"
                                    className="block text-blue-900 text-xl font-bold text-center md:mt-6 md:mb-6 ml-2 md:ml-auto"
                                >
                                    Teachers Dashboard
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex flex-col">
                                    <div>
                                        <Link
                                            to="/"
                                            className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Home
                                        </Link>
                                    </div>
                                    {/* Teachers Profile */}
                                    <div>
                                        <Link
                                            to="/TeachersDashboard/Profile"
                                            className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            View Profile
                                        </Link>
                                    </div>

                                    {/* Student List Dropdown menu */}
                                    <div>
                                        <Menu
                                            as="div"
                                            className="inline-block text-left"
                                        >
                                            <div>
                                                <Menu.Button className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    Manage Students
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute mt-2 min-w-max w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="p-1">
                                                        <p className="px-2 pt-1 font-medium">
                                                            Class 1
                                                        </p>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/TeachersDashboard/ManageStudents"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section A
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/TeachersDashboard/ManageStudents"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section B
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <p className="px-2 pt-1 font-medium">
                                                            Class 2
                                                        </p>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/TeachersDashboard/ManageStudents"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section A
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/TeachersDashboard/ManageStudents"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block w-full text-left px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section B
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>

                                    {/* Register Student */}
                                    <div>
                                        <Link
                                            to="/TeachersDashboard/RegisterStudent"
                                            className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Register Student
                                        </Link>
                                    </div>

                                    {/* Publish Notice */}
                                    <div>
                                        <Link
                                            to="/TeachersDashboard/NoticePublish"
                                            className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Publish Notice
                                        </Link>
                                    </div>
                                    {/* Publish Assignment */}
                                    <div>
                                        <Link
                                            to="/TeachersDashboard/publishAssignment"
                                            className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Publish Assignment
                                        </Link>
                                    </div>

                                    {/* Add Result */}
                                    <div>
                                        <Menu
                                            as="div"
                                            className="inline-block text-left"
                                        >
                                            <div>
                                                <Menu.Button className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    Add Result
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute mt-2 min-w-max w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="p-1">
                                                        <p className="px-2 pt-1 font-medium">
                                                            Class 1
                                                        </p>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section A
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section B
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <p className="px-2 pt-1 font-medium">
                                                            Class 2
                                                        </p>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section A
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block w-full text-left px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Section B
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    {/* Add Routine */}
                                    <div>
                                        <Menu
                                            as="div"
                                            className="inline-block text-left"
                                        >
                                            <div>
                                                <Menu.Button className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                    Add Routine
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="origin-top-right absolute mt-2 min-w-max w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="p-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/TeachersDashboard/ClassRoutine"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Class
                                                                    Routine
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/TeachersDashboard/ExamRoutine"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-1 text-sm"
                                                                    )}
                                                                >
                                                                    Exam Routine
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    {/* See Student Request */}
                                    <div>
                                        <Link
                                            to="/TeachersDashboard/SeeExtraRequestPage"
                                            className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            ExtraCare Student Request
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <div>
                                    <Link
                                        to="/"
                                        className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                </div>

                                {/* Student List Dropdown menu */}
                                <div>
                                    <Menu
                                        as="div"
                                        className="inline-block text-left"
                                    >
                                        <div>
                                            <Menu.Button className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                Manage Students
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute mt-2 min-w-max w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="p-1">
                                                    <p className="px-2 pt-1 font-medium">
                                                        Class 1
                                                    </p>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/TeachersDashboard/ManageStudents"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section A
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/TeachersDashboard/ManageStudents"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section B
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <p className="px-2 pt-1 font-medium">
                                                        Class 2
                                                    </p>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/TeachersDashboard/ManageStudents"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section A
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/TeachersDashboard/ManageStudents"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block w-full text-left px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section B
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>

                                {/* Register Student */}
                                <div>
                                    <Link
                                        to="/TeachersDashboard/RegisterStudent"
                                        className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Register Student
                                    </Link>
                                </div>

                                {/* Publish Notice */}
                                <div>
                                    <Link
                                        to="/TeachersDashboard/NoticePublish"
                                        className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Publish Notice
                                    </Link>
                                </div>
                                {/* Publish Assignment */}
                                <div>
                                    <Link
                                        to="/TeachersDashboard/publishAssignment"
                                        className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Publish Assignment
                                    </Link>
                                </div>

                                {/* Add Result */}
                                <div>
                                    <Menu
                                        as="div"
                                        className="inline-block text-left"
                                    >
                                        <div>
                                            <Menu.Button className="block text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                Add Result
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute mt-2 min-w-max w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="p-1">
                                                    <p className="px-2 pt-1 font-medium">
                                                        Class 1
                                                    </p>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section A
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section B
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <p className="px-2 pt-1 font-medium">
                                                        Class 2
                                                    </p>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section A
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block w-full text-left px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Section B
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                {/* Add Routine */}
                                <div>
                                    <Menu
                                        as="div"
                                        className="inline-block text-left"
                                    >
                                        <div>
                                            <Menu.Button className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                Add Routine
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute mt-2 min-w-max w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="p-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/TeachersDashboard/ClassRoutine"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Class Routine
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/TeachersDashboard/ExamRoutine"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-1 text-sm"
                                                                )}
                                                            >
                                                                Exam Routine
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default TeachersPanelSideBar;
