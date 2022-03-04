import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTeacherInfo,
    getTeacherInfo,
    updateTeacherDP,
} from "./../../../SchoolRedux/TeacherSlice";
import useFirebase from "./../../Shared/Authentication/Authentication";

const TeachersProfile = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();
    const [profilePic, setProfilePic] = useState("");
    const [teacherInfo, setTeacherInfo] = useState({});
    const [showInfoUpdateForm, setShowInfoUpdateForm] = useState(false);

    useEffect(() => {
        dispatch(getTeacherInfo(user.email));
    }, [user.email, dispatch]);

    const teachersData = useSelector((state) => state.teacherStore.teacherInfo);

    const updateDPBtnHandler = (e) => {
        e.preventDefault();
        if (profilePic) {
            const fd = new FormData();
            fd.append("userImage", profilePic);
            const updateDPData = { email: user.email, fd };
            dispatch(updateTeacherDP(updateDPData));
        } else {
            alert("File is not selected");
        }
    };

    const addTeacherInfoBtnHandler = (e) => {
        e.preventDefault();
        teacherInfo.email = user.email;
        dispatch(addTeacherInfo(teacherInfo));
        window.location.reload();
    };

    const toggleInfoUpdateForm = () => {
        if (showInfoUpdateForm === true) {
            setShowInfoUpdateForm(false);
        } else {
            setShowInfoUpdateForm(true);
        }
    };

    return (
        <div className="lg:px-20 lg:py-10 h-screen overflow-scroll">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4 bg-blue-100 rounded p-4">
                    <div>
                        <div>
                            <div>
                                {teachersData.img ? (
                                    <img
                                        src={`data:image/jpeg;base64,${teachersData?.img}`}
                                        className="w-full"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src="https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Profile_avatar_placeholder_large.png"
                                        alt=""
                                        className="w-full"
                                    />
                                )}
                            </div>
                            <form onSubmit={updateDPBtnHandler}>
                                <div>
                                    <button
                                        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-3 py-2 mt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        type="button"
                                        data-modal-toggle="defaultModal"
                                    >
                                        Update Profile Picture
                                    </button>

                                    <div
                                        id="defaultModal"
                                        aria-hidden="true"
                                        class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
                                    >
                                        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                                    <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                                        Select Profile Picture
                                                    </h3>
                                                    <button
                                                        type="button"
                                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                        data-modal-toggle="defaultModal"
                                                    >
                                                        <svg
                                                            class="w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clip-rule="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div class="p-6 space-y-6">
                                                    <input
                                                        type="file"
                                                        onChange={(e) => {
                                                            setProfilePic(
                                                                e.target
                                                                    .files[0]
                                                            );
                                                        }}
                                                    />
                                                </div>

                                                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                                    <button
                                                        data-modal-toggle="defaultModal"
                                                        type="submit"
                                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        data-modal-toggle="defaultModal"
                                                        type="button"
                                                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-center text-xl font-bold mt-4">
                                Contact Information
                            </h2>
                            <p className="my-1">
                                <span className="font-medium">Email: </span>
                                {teachersData.email}
                            </p>
                            <p className="my-1">
                                <span className="font-medium">Phone: </span>
                                {teachersData.teacherphone}
                            </p>
                            <p className="my-1">
                                <span className="font-medium">Website: </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="grid grid-rows-2 gap-3">
                        <div className="grid grid-cols-12 bg-blue-100 rounded p-4">
                            <div className="col-span-4">
                                <p className="font-medium my-3">Full Name</p>
                                <p className="font-medium my-3">Address</p>
                                <p className="font-medium my-3">Class</p>
                                <p className="font-medium my-3">Section</p>
                                <p className="font-medium my-3">Subject</p>
                            </div>
                            <div className="col-span-8">
                                <p className="my-3">
                                    {teachersData.teachername}
                                </p>
                                <p className="my-3">Somewhere on Earth</p>
                                <p className="my-3">
                                    {teachersData.teacherclass}
                                </p>
                                <p className="my-3">
                                    {teachersData.teachersection}
                                </p>
                                <p className="my-3">Cosmology</p>
                            </div>
                        </div>
                        <div className="bg-blue-100 rounded p-4">
                            <div>
                                {teachersData.personalStatement &&
                                teachersData.education ? (
                                    <div>
                                        {showInfoUpdateForm === false && (
                                            <div>
                                                <h4 className="font-medium">
                                                    Personal Statement:
                                                </h4>
                                                <p>
                                                    {
                                                        teachersData.personalStatement
                                                    }
                                                </p>
                                                <h4 className="font-medium mt-4">
                                                    Education:
                                                </h4>
                                                <p>{teachersData.education}</p>
                                                <div className="flex justify-end">
                                                    <button
                                                        className="bg-blue-600 rounded py-1 px-2 mt-3 font-medium text-white"
                                                        onClick={
                                                            toggleInfoUpdateForm
                                                        }
                                                    >
                                                        Update Data
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {showInfoUpdateForm === true && (
                                            <div>
                                                <h1 className="text-xl font-bold text-center">
                                                    Update Information
                                                </h1>
                                                <h3 className="font-medium">
                                                    Personal Statement
                                                </h3>
                                                <textarea
                                                    name=""
                                                    id=""
                                                    rows="5"
                                                    className="rounded w-full"
                                                    defaultValue={
                                                        teachersData.personalStatement
                                                    }
                                                    onBlur={(e) => {
                                                        setTeacherInfo({
                                                            ...teacherInfo,
                                                            personalStatement:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                                <h3 className="font-medium">
                                                    Education
                                                </h3>
                                                <input
                                                    type="text"
                                                    className="block border border-black rounded w-full"
                                                    defaultValue={
                                                        teachersData.education
                                                    }
                                                    onBlur={(e) => {
                                                        setTeacherInfo({
                                                            ...teacherInfo,
                                                            education:
                                                                e.target.value,
                                                        });
                                                    }}
                                                />
                                                <div className="flex justify-end">
                                                    <button
                                                        className="bg-blue-600 rounded mt-3 font-bold text-white cursor-pointer py-1 px-4"
                                                        onClick={
                                                            addTeacherInfoBtnHandler
                                                        }
                                                    >
                                                        Update
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <h1 className="text-xl font-bold text-center">
                                            Add Information
                                        </h1>
                                        <h3 className="font-medium">
                                            Personal Statement
                                        </h3>
                                        <textarea
                                            name=""
                                            id=""
                                            rows="5"
                                            className="rounded w-full"
                                            onBlur={(e) => {
                                                setTeacherInfo({
                                                    ...teacherInfo,
                                                    personalStatement:
                                                        e.target.value,
                                                });
                                            }}
                                        />
                                        <h3 className="font-medium">
                                            Education
                                        </h3>
                                        <input
                                            type="text"
                                            className="block border border-black rounded w-full"
                                            onBlur={(e) => {
                                                setTeacherInfo({
                                                    ...teacherInfo,
                                                    education: e.target.value,
                                                });
                                            }}
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                className="bg-blue-600 rounded mt-3 font-bold text-white cursor-pointer my-1 mx-4"
                                                onClick={
                                                    addTeacherInfoBtnHandler
                                                }
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersProfile;
