import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    GetClassRoutine,
    UploadClassRoutine,
} from "../../../SchoolRedux/TeacherSlice";

const TeachersClassRoutine = () => {
    const dispatch = useDispatch();
    const [classRoutineImg, setClassRoutineImg] = useState("");
    const [classRoutineData, setClassRoutineData] = useState({});

    useEffect(() => {
        dispatch(GetClassRoutine());
    }, [dispatch]);

    const classRoutines = useSelector(
        (state) => state.teacherStore.classRoutines
    );

    const handlePublishClassRoutine = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("routineImg", classRoutineImg);
        const data = { classRoutineData, fd };
        dispatch(UploadClassRoutine(data));
    };

    console.log(classRoutines);

    return (
        <div className="text-center h-screen overflow-auto">
            <h1 className="text-5xl text-blue-900 my-10 font-bold">
                Publish Class Routine
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
                            setClassRoutineImg(e.target.files[0]);
                        }}
                    />
                    <select
                        name="class"
                        id="class"
                        className="block my-3 mx-auto"
                        onBlur={(e) => {
                            const studentClass = e.target.value;
                            setClassRoutineData({
                                ...classRoutineData,
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
                        name="section"
                        id="section"
                        className="block my-3 mx-auto"
                        onBlur={(e) => {
                            const section = e.target.value;
                            setClassRoutineData({
                                ...classRoutineData,
                                section,
                            });
                        }}
                    >
                        <option value="section-a">Section-A</option>
                        <option value="section-b">Section-B</option>
                    </select>
                    <input
                        type="submit"
                        value="Publish"
                        className="block mx-auto mt-5 px-5 py-1 bg-blue-500 rounded-lg text-gray-900 font-medium cursor-pointer"
                    />
                </form>
            </div>
            <div className="my-20 px-6 md:px-10 lg:px-16">
                <div>
                    <h1 className="text-4xl font-bold text-blue-900">
                        View Previous Routines
                    </h1>
                </div>
                <div className="grid grid-cols-12 my-3 gap-5">
                    {/* {classRoutines?.map((routine) => (
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-blue-200 rounded-lg p-3">
                            <div>
                                <img
                                    src={`data:image/jpeg;base64,${routine?.routineImg}`}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <div className="text-left mt-3">
                                <h3 className="text-lg">
                                    <span className="font-medium">Class:</span>{" "}
                                    {routine.class}
                                </h3>
                                <h3 className="text-lg">
                                    <span className="font-medium">
                                        Section:
                                    </span>{" "}
                                    {routine.section}
                                </h3>
                            </div>
                            <div className="mt-3">
                                <a
                                    href={`data:image/jpeg;base64,${routine?.routineImg}`}
                                    download
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block bg-blue-500 text-white font-medium px-2 py-1 rounded"
                                >
                                    View Routine
                                </a>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default TeachersClassRoutine;
