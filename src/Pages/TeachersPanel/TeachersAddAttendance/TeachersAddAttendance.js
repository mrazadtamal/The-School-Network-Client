import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllStudents } from "../../../SchoolRedux/PrincipalSlice";
import "./TeachersAddAttendance.css";
import useFirebase from "../../Shared/Authentication/Authentication";
import {
    attendanceDataAdd,
    getTeacherInfo,
} from "./../../../SchoolRedux/TeacherSlice";

const TeachersAddAttendance = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();
    const [month, setMonth] = useState("january");

    useEffect(() => {
        dispatch(getTeacherInfo(user.email));
    }, [user.email, dispatch]);

    const teachersData = useSelector((state) => state.teacherStore.teacherInfo);

    useEffect(() => {
        dispatch(GetAllStudents(teachersData.teacherclass));
    }, [dispatch, teachersData.teacherclass]);

    const students = useSelector((state) => state.principalStore.Allstudents);

    const attendanceData = useSelector(
        (state) => state.teacherStore.attendanceData
    );

    useEffect(() => {
        console.log(attendanceData);
    });

    return (
        <div className="px-6 md:px-10 lg:px-14 text-center">
            <h1 className="text-5xl text-blue-900 font-bold text-center my-5">
                Add Students Attendance
            </h1>
            <div>
                <div className="text-left mb-5">
                    <p className="text-md font-bold mt-4">Select Month:</p>
                    <select
                        className="border border-gray-500 rounded p-1 w-32"
                        name="month"
                        id="month"
                        onChange={(e) => setMonth(e.target.value)}
                    >
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                </div>
                <div>
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Student Photo</th>
                                <th>Student Name</th>
                                <th>Roll</th>
                                <th>Present</th>
                                <th>Absent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr>
                                    <td data-title="Student Photo">
                                        <div className="flex justify-center">
                                            <img
                                                src={`data:image/jpeg;base64,${student?.img}`}
                                                alt="student"
                                                className="w-full"
                                            />
                                        </div>
                                    </td>
                                    <td data-title="Student Name">
                                        {student.name}
                                    </td>
                                    <td data-title="Roll">{student.roll}</td>
                                    <td data-title="Present">
                                        <input
                                            type="number"
                                            className="w-full md:w-auto"
                                            onBlur={(e) => {
                                                const presentDays =
                                                    e.target.value;
                                                const email = student.email;
                                                const data = {
                                                    email,
                                                    presentDays,
                                                };
                                                dispatch(
                                                    attendanceDataAdd(data)
                                                );
                                            }}
                                        />
                                    </td>
                                    <td data-title="Absent">
                                        <input
                                            type="number"
                                            className="w-full md:w-auto"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-right">
                    <input
                        type="submit"
                        value="Submit"
                        className="mt-5 bg-blue-500 px-5 py-2 rounded font-medium text-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default TeachersAddAttendance;
