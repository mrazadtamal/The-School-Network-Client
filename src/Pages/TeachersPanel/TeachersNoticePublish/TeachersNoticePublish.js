import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { noticePublishFromTeacher } from "../../../SchoolRedux/TeacherSlice";

const TeachersNoticePublish = () => {
    const [noticeFile, setNoticeFile] = useState();
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [notice, setNotice] = useState({});
    const dispatch = useDispatch();

    const noticeSubmitBtnHandler = (e) => {
        e.preventDefault();
        // console.log(notice);
        dispatch(noticePublishFromTeacher(notice));
    };

    return (
        <div className="px-5 h-screen overflow-auto sm:px-10 md:px-16 lg:px-20">
            <h2 className="text-5xl text-gray-600 font-bold my-10 text-center">
                Publish notice
            </h2>
            <div>
                <div className="text-center">
                    <h2 className="text-2xl text-blue-500 font-medium">
                        Add local files
                    </h2>
                    {isFileSelected ? (
                        <div>
                            <p>File name:{noticeFile.name}</p>
                            <p>File type: {noticeFile.type}</p>
                            <p>Size in bytes: {noticeFile.size}</p>
                        </div>
                    ) : (
                        <p>Please Select a file</p>
                    )}
                    <input
                        type="file"
                        name="file"
                        className="my-3"
                        onChange={(e) => {
                            setNoticeFile(e.target.files[0]);
                            setIsFileSelected(true);
                        }}
                    />
                </div>
                <div className="my-3">
                    <p className="text-gray-500 text-center">Or</p>
                </div>
                <div>
                    <h2 className="text-2xl text-blue-500 font-medium mb-5 text-center">
                        Write notice
                    </h2>
                    <form onSubmit={noticeSubmitBtnHandler}>
                        <p className="text-lg font-medium">Title</p>
                        <input
                            type="text"
                            className="border border-gray-500 rounded w-full"
                            onBlur={(e) => {
                                const title = e.target.value;
                                setNotice({ ...notice, title });
                            }}
                        />
                        <p className="text-lg font-medium">Class</p>
                        <select
                            type="text"
                            className="border border-gray-500 rounded w-full"
                            onChange={(e) => {
                                const teacherClass = e.target.value;
                                setNotice({ ...notice, class: teacherClass });
                            }}
                        >
                            <option value="class 1">Class 1</option>
                            <option value="class 2">Class 2</option>
                            <option value="class 3">Class 3</option>
                        </select>
                        <p className="text-lg font-medium mt-3">Description</p>
                        <textarea
                            name=""
                            id=""
                            rows="5"
                            className="border border-gray-500 rounded w-full"
                            onBlur={(e) => {
                                const description = e.target.value;
                                setNotice({ ...notice, description });
                            }}
                        ></textarea>
                        <input
                            type="submit"
                            value="Publish"
                            className="block mx-auto my-3 px-5 py-1 bg-blue-500 rounded-lg text-gray-900 font-medium cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeachersNoticePublish;
