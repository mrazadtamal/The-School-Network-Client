import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DeleteExamRoutine,
    GetExamRoutine,
} from "../../../SchoolRedux/TeacherSlice";

const ExamRoutine = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetExamRoutine());
    }, [dispatch]);

    const examRoutines = useSelector(
        (state) => state.teacherStore.examRoutines
    );

    return (
        <div className="h-screen overflow-scroll px-4 md:px-8 lg:px-12">
            <div>
                <h1 className="mt-5 mb-10 font-bold text-5xl text-center text-blue-900">
                    View Exam Routines
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExamRoutine;
