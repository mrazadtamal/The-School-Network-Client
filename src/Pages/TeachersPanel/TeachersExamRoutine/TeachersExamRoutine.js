import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DeleteExamRoutine,
    UploadExamRoutine,
    GetExamRoutine,
} from "../../../SchoolRedux/TeacherSlice";

const TeachersExamRoutine = () => {
    const dispatch = useDispatch();
    const [examRoutineImg, setExamRoutineImg] = useState("");
    const [examRoutineData, setExamRoutineData] = useState({});

    const handlePublishExamRoutine = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("routineImg", examRoutineImg);
        const data = { ...examRoutineData, fd };
        dispatch(UploadExamRoutine(data));
    };

    useEffect(() => {
        dispatch(GetExamRoutine());
    }, [dispatch]);

    const examRoutines = useSelector(
        (state) => state.teacherStore.examRoutines
    );

    const handleRoutineDeleteBtn = (id) => {
        dispatch(DeleteExamRoutine(id));
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
                <form onSubmit={handlePublishExamRoutine}>
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
            {/* <div className="my-20 px-6 md:px-10 lg:px-16">
                <div>
                    <h1 className="text-4xl font-bold text-blue-900">
                        View Previous Routines
                    </h1>
                </div>
                <div className="grid grid-cols-12 my-3 gap-5">
                    {examRoutines?.map((routine) => (
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-blue-200 rounded-lg p-3">
                            <div>
                                <img
                                    src={`data:image/jpeg;base64,${routine?.routineImg}`}
                                    alt=""
                                    className="w-full max-h-40"
                                />
                            </div>
                            <div className="text-left mt-3">
                                <h3 className="text-lg">
                                    <span className="font-medium">Class:</span>{" "}
                                    {routine.class}
                                </h3>
                                <h3 className="text-lg">
                                    <span className="font-medium">Term:</span>{" "}
                                    {routine.term}
                                </h3>
                            </div>
                            <div className="mt-3 flex justify-around">
                                <a
                                    href={`data:image/jpeg;base64,${routine?.routineImg}`}
                                    download={`${routine.class} ${routine.term} routine`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block bg-blue-500 text-white font-medium px-2 py-1 rounded"
                                >
                                    Download
                                </a>
                                <button
                                    onClick={() =>
                                        handleRoutineDeleteBtn(routine._id)
                                    }
                                    className="inline-block bg-red-500 text-white font-medium px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default TeachersExamRoutine;
