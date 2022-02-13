import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const TeachersPanelSideBar = () => {
    return (
        <div className="bg-green-300 lg:h-screen p-4 text-center">
            {/* Teachers Dashboard Home Page */}
            <Link
                to="/TeachersDashboard"
                className="inline-flex justify-center min-w-max rounded-md border border-gray-300 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
                Home
            </Link>
            {/* Student List Dropdown menu */}
            <div className="">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
                                <p className="px-2 pt-1 font-medium">Nursery</p>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section A
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section B
                                        </a>
                                    )}
                                </Menu.Item>
                                <p className="px-2 pt-1 font-medium">KG</p>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section A
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block w-full text-left px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section B
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            {/* Register Student */}
            <div className="">
                <Link
                    to="#"
                    className="inline-flex justify-center min-w-max rounded-md border border-gray-300 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                    Register Student
                </Link>
            </div>

            {/* Publish Notice */}
            <div>
                <Link
                    to="/TeachersDashboard/NoticePublish"
                    className="inline-flex justify-center min-w-max rounded-md border border-gray-300 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                    Publish Notice
                </Link>
            </div>

            {/* Add Result */}
            <div>
                <Menu as="div" className="inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
                                <p className="px-2 pt-1 font-medium">Nursery</p>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section A
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section B
                                        </a>
                                    )}
                                </Menu.Item>
                                <p className="px-2 pt-1 font-medium">KG</p>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section A
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            type="submit"
                                            className={classNames(
                                                active
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                "block w-full text-left px-4 py-1 text-sm"
                                            )}
                                        >
                                            Section B
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                {/* Add Routine */}
                <div>
                    <Menu as="div" className="inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 mt-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
    );
};

export default TeachersPanelSideBar;
