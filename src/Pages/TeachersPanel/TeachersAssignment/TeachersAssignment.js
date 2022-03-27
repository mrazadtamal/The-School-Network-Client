import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { GetAllAssignments } from "../../../SchoolRedux/StudentSlice";
import {
    assignmentPublish,
    DeleteAssignment,
    PublishImageAssing,
} from "../../../SchoolRedux/TeacherSlice";
import "./Teacherpanel.css";
import { getTeacherInfo } from "./../../../SchoolRedux/TeacherSlice";
import { Link } from "react-router-dom";
const TeachersAssignment = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState("");
    const [assignClass, setAssignClass] = useState("");
    const { register, handleSubmit, reset } = useForm();
    const arr = [{ email: "abc@gmail.com", assignment: "abc" }];
    const submssionarray = JSON.stringify(arr);
    const onSubmit = (data) => {
        dispatch(assignmentPublish(data));
        reset();
    };
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("aaa", submssionarray);
        const fd = new FormData();
        fd.append("noticeImage", img);
        fd.append("submssionarray", submssionarray);
        fd.append("class", assignClass);
        dispatch(PublishImageAssing(fd));
        e.target.reset();
    };
 
    useEffect(() => {
        dispatch(getTeacherInfo());
    }, [dispatch]);
    const teacher = useSelector((state) => state.teacherStore.teacherInfo);
 
    useEffect(() => {
        dispatch(GetAllAssignments(teacher.teacherclass));
    }, [dispatch, teacher.teacherclass]);
    const assignment = useSelector((state) => state.studentStore.assignments);

 console.log('aaa', assignment)
    return (
        <div>
            <div className="text-center w-full m-auto mt-5">
                <div className="teacher-side p-5">
                    <p className="text-3xl text-sky-400/100">
                        Published Assignment
                    </p>
 
                    <form className="flex flex-col" onSubmit={SubmitHandler}>
                        <label className="block mx-2">
                            <span className="sr-only">Choose File</span>
                            <input
                                type="file"
                                onBlur={(e) => setImg(e.target.files[0])}
                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                            />
                        </label>
 
                        <label htmlFor="class" className="block font-bold">
                            Class
                        </label>
                        <select
                            onBlur={(e) => setAssignClass(e.target.value)}
                            className="border block border-gray-700 rounded p-1 w-full"
                            id="class"
                            name="class"
                        >
                            <option>Choose Class</option>
                            <option value="class-one">Class One</option>
                            <option value="class-two">Class Two</option>
                            <option value="class-three">Class Three</option>
                            <option value="class-four">Class Four</option>
                            <option value="class-five">Class Five</option>
                        </select>
 
                        <input
                            className="block  my-3 px-5 py-1 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-gray-900 font-medium"
                            type="submit"
                        />
                    </form>
 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4">Or</p>
                        <label className="relative block mt-5 mb-2">
                            <input
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                {...register("title")}
                                placeholder="Title"
                            />
                        </label>{" "}
                        <br />
                        <textarea
                            rows="5"
                            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            type="text"
                            {...register("description")}
                            placeholder="Assignment Description"
                        />{" "}
                        <br />
                        <input
                            className="block my-3 px-5 py-1 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-gray-900 font-medium"
                            type="submit"
                        />
                    </form>
                </div>
                <h1 className="text-5xl mt-5 mb-3 text-blue-900 font-bold">
                    View Previous Assignments
                </h1>
                <div className="grid grid-cols-12 pt-5 gap-5 mb-5">
                    {assignment?.map((assi) => (
                        <div
                            className="teacher-side p-5 col-span-12 md:col-span-6"
                            key={assi._id}
                        >
                            <div>
                                <img
                                    src={`data:image/jpeg;base64,${assi?.img}`}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <h1 className="text-2xl text-blue-800 font-bold">
                                {assi?.title}
                            </h1>
                            <h1 className="text-sm">
                                {assi?.description?.slice(0, 250)}
                            </h1>

                            <Link
                                to={`/TeachersDashboard/ViewSubmission/${assi._id}`}
                                className="block mt-5 my-3 px-5 py-1 bg-blue-500 hover:bg-green-500 rounded-lg text-gray-900 font-medium"
                            >
                                View Submissions
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
 
export default TeachersAssignment;
 

