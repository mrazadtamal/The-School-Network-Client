import React, { useState, useEffect } from "react";
import "./StudentSubmitAssignment.css";
import { useDispatch, useSelector } from "react-redux";
import {
    GetAllAssignments,
    getStudentInfo,
} from "../../../../SchoolRedux/StudentSlice";
import useFirebase from "./../../../Shared/Authentication/Authentication";

const StudentSubmitAssignment = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();
    const [pdfData, setPdfData] = useState("");

    useEffect(() => {
        dispatch(getStudentInfo(user.email));
    }, [dispatch, user.email]);
    const student = useSelector((state) => state.studentStore.studentInfo);

    useEffect(() => {
        dispatch(GetAllAssignments(student.class));
    }, [dispatch, student.class]);

    const assignments = useSelector((state) => state.studentStore.assignments);

    const handleAssignmentSubmitBtn = (data) => {
        const assignmentData = { ...data, pdfData };
        console.log(assignmentData);
    };

    return (
        <div className="px-6 md:px-10 lg:px-14 text-center">
            <h1 className="text-5xl text-blue-900 font-bold text-center my-5">
                Submit Assignment
            </h1>
            <div className="grid grid-cols-12">
                {assignments.map((assignment) => (
                    <div
                        key={assignment._id}
                        className="col-span-12 md:col-span-6 bg-gray-300 p-1 rounded"
                    >
                        <div>
                            <img
                                src={`data:image/jpeg;base64,${assignment?.img}`}
                                alt=""
                                className="w-full h-64"
                            />
                        </div>
                        <div>
                            <div className="my-3">
                                <a
                                    href={`data:image/jpeg;base64,${assignment?.img}`}
                                    download={"Assignment"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block bg-blue-500 text-white font-medium px-2 py-1 rounded"
                                >
                                    View Assignment
                                </a>
                            </div>
                            <div className="my-3">
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) =>
                                        setPdfData(e.target.files[0])
                                    }
                                />
                                <button
                                    className="inline-block bg-blue-500 text-white font-medium px-2 py-1 rounded"
                                    onClick={(e) => {
                                        const email = student.email;
                                        const assignmentID = assignment._id;
                                        handleAssignmentSubmitBtn({
                                            email,
                                            assignmentID,
                                        });
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentSubmitAssignment;
