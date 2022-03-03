import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const code = () => {
    return (
        <div>
            <aside class="w-64" aria-label="Sidebar">
                <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <ul class="space-y-2">
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example"
                            >
                                <span
                                    class="flex-1 ml-3 text-left whitespace-nowrap"
                                    sidebar-toggle-item=""
                                >
                                    E-commerce
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
                                id="dropdown-example"
                                class="hidden py-2 space-y-2"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Billing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Invoice
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Kanban
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Inbox
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Users
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Sign In
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            ; /* ------------------- */
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
                        <Menu as="div" className="inline-block text-left">
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
                        <Menu as="div" className="inline-block text-left">
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
                        <Menu as="div" className="inline-block text-left">
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
    );
};

export default code;
