import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSubmittedAssignments } from "../../../SchoolRedux/TeacherSlice";
 
const ViewAssignmentSubmission = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(GetSubmittedAssignments(id));
    }, [dispatch, id]);
    const submissions = useSelector(
        (state) => state.teacherStore.submittedAssignments
    );
    const data = submissions?.submssionarray;
    let data1 = [];
    if (data?.length > 0) {
        data1.push(JSON.parse(data));
    }
    const assignments = data1[0];
 
    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold text-blue-900 mt-5 mb-10">
                    View Submitted Assignment
                </h2>
            </div>
            <div>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>Student Email</th>
                            <th>View Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments?.map((d) => (
                            <tr key={d.email}>
                                <td data-title="Student Email">{d.email}</td>
                                <td data-title="View Assignment">
                                   {d.email === 'abc@gmail.com' ? '' :  <a
                                        href={`https://blooming-citadel-14218.herokuapp.com/${d.assignment}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-blue-500 px-3 py-1 rounded font-medium text-md"
                                    >
                                        View Assignment
                                    </a>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
 
export default ViewAssignmentSubmission;
