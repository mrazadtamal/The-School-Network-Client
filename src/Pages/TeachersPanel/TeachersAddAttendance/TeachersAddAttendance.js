import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllStudents } from "../../../SchoolRedux/PrincipalSlice";
import "./TeachersAddAttendance.css";
import useFirebase from "../../Shared/Authentication/Authentication";
import {
    AddAttendanceData,
    getTeacherInfo,
} from "./../../../SchoolRedux/TeacherSlice";

const TeachersAddAttendance = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();
    const [selectedMonth, setSelectedMonth] = useState("january");
    const [totalDaysClass, setTotalDaysClass] = useState(0);
    const [attData, setAttData] = useState({});

    useEffect(() => {
        dispatch(getTeacherInfo(user.email));
    }, [user.email, dispatch]);

    const teachersData = useSelector((state) => state.teacherStore.teacherInfo);

    useEffect(() => {
        dispatch(GetAllStudents(teachersData.teacherclass));
    }, [dispatch, teachersData.teacherclass]);

    const students = useSelector((state) => state.principalStore.Allstudents);

    const handleAttendanceSubmitBtn = (attData) => {
        dispatch(AddAttendanceData(attData));
        document.getElementsByClassName("presentInputField").value = "";
        document.getElementsByClassName("absentInputField").value = "";
    };

    return (
        <div className="px-6 md:px-10 lg:px-14 text-center">
            <h1 className="text-5xl text-blue-900 font-bold text-center my-5">
                Add Students Attendance
            </h1>
            <div>
                <div className="md:flex md:gap-10">
                    <div className="text-left mb-5">
                        <p className="text-md font-bold mt-4">Select Month:</p>
                        <select
                            className="border border-gray-500 rounded p-1 w-32"
                            name="month"
                            id="month"
                            onChange={(e) => setSelectedMonth(e.target.value)}
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
                    <div className="text-left mb-5">
                        <p className="text-md font-bold mt-4">
                            Total Class Days
                        </p>
                        <input
                            type="number"
                            onBlur={(e) => setTotalDaysClass(e.target.value)}
                            className="border border-gray-500 rounded p-1 w-32"
                        />
                    </div>
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
                                <th>Submit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.email}>
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
                                            className="presentInputField w-full md:w-auto"
                                            onBlur={(e) => {
                                                const presentDays =
                                                    e.target.value;
                                                const email = student.email;
                                                const month = selectedMonth;
                                                const totalClass =
                                                    totalDaysClass;
                                                const data = {
                                                    ...attData,
                                                    email,
                                                    month,
                                                    totalClass,
                                                    presentDays,
                                                };
                                                setAttData(data);
                                            }}
                                        />
                                    </td>
                                    <td data-title="Absent">
                                        <input
                                            type="number"
                                            className="absentInputField w-full md:w-auto"
                                            onBlur={(e) => {
                                                const absentDays =
                                                    e.target.value;
                                                const email = student.email;
                                                const month = selectedMonth;
                                                const totalClass =
                                                    totalDaysClass;
                                                const data = {
                                                    ...attData,
                                                    email,
                                                    month,
                                                    totalClass,
                                                    absentDays,
                                                };
                                                setAttData(data);
                                            }}
                                        />
                                    </td>
                                    <td data-title="Submit">
                                        <button
                                            onClick={() =>
                                                handleAttendanceSubmitBtn(
                                                    attData
                                                )
                                            }
                                            className="bg-blue-500 px-3 py-1 rounded font-medium text-md"
                                        >
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeachersAddAttendance;
