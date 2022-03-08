import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UploadExamRoutine } from "../../../SchoolRedux/TeacherSlice";

const TeachersExamRoutine = () => {
    const dispatch = useDispatch();
    const [examRoutineImg, setExamRoutineImg] = useState("");
    const [examRoutineData, setExamRoutineData] = useState({});

    const handlePublishClassRoutine = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("routineImg", examRoutineImg);
        const data = { ...examRoutineData, fd };
        console.log(data);
        dispatch(UploadExamRoutine(data));
    };

    return (
        <div className="text-center">
            <h1 className="text-5xl text-blue-900 my-10 font-bold">
                Publish Exam Routine
            </h1>
            <div className="border-2 border-blue-600 rounded-lg w-fit mx-auto px-20 py-10">
                <p className="text-xl text-gray-700 font-medium mb-5">
                    Add files
                </p>
                <form onSubmit={handlePublishClassRoutine}>
                    <input
                        type="file"
                        className=""
                        onChange={(e) => {
                            setExamRoutineImg(e.target.files[0]);
                        }}
                    />
                    <select
                        name="class"
                        id="class"
                        className="block my-3 mx-auto"
                        onBlur={(e) => {
                            const studentClass = e.target.value;
                            setExamRoutineData({
                                ...examRoutineData,
                                class: studentClass,
                            });
                        }}
                    >
                        <option value="class-one">Class One</option>
                        <option value="class-two">Class Two</option>
                        <option value="class-three">Class Three</option>
                        <option value="class-four">Class Four</option>
                        <option value="class-five">Class Five</option>
                    </select>
                    <select
                        name="term"
                        id="term"
                        className="block my-3 mx-auto"
                        onBlur={(e) => {
                            const term = e.target.value;
                            setExamRoutineData({
                                ...examRoutineData,
                                term,
                            });
                        }}
                    >
                        <option value="First-Term">First Term</option>
                        <option value="Second-Term">Second Term</option>
                        <option value="Third-Term">Final Term</option>
                    </select>
                    <input
                        type="submit"
                        value="Publish"
                        className="block mx-auto mt-5 px-5 py-1 bg-blue-500 rounded-lg text-gray-900 font-medium cursor-pointer"
                    />
                </form>
            </div>
        </div>
    );
};

export default TeachersExamRoutine;
