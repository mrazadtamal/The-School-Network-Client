import React from "react";
import { Link } from "react-router-dom";

const TeachersManageStudent = () => {
    return (
        <div className="mx-auto px-16">
            <h1 className="text-blue-900 font-bold text-center text-5xl mt-6 mb-10">
                Manage Students
            </h1>
            <table class="table-auto w-full">
                <thead>
                    <tr className="border-b border-black">
                        <th>Student Name</th>
                        <th>Student Roll</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-300">
                        <td>Abdur Rahman</td>
                        <td>##</td>
                        <td className="py-2">
                            <Link
                                to="#"
                                className="px-2 py-1 bg-blue-600 rounded text-white font-medium"
                            >
                                See Performance
                            </Link>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td>Arif Hossain</td>
                        <td>##</td>
                        <td className="py-2">
                            <Link
                                to="#"
                                className="px-2 py-1 bg-blue-600 rounded text-white font-medium"
                            >
                                See Performance
                            </Link>
                        </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                        <td>Someone Else</td>
                        <td>##</td>
                        <td className="py-2">
                            <Link
                                to="#"
                                className="px-2 py-1 bg-blue-600 rounded text-white font-medium"
                            >
                                See Performance
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TeachersManageStudent;
