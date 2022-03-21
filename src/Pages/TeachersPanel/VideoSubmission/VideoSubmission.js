import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { teacherVideoUpload } from "../../../SchoolRedux/TeacherSlice";
import useFirebase from "../../Shared/Authentication/Authentication";
import "./VideoSubmission.css";
const VideoSubmission = () => {
  const [videoData, setVideoData] = useState({});
  const [infoData, setInfoData] = useState({});
  //   const [formData, setFormData] = useState({});
  const { user } = useFirebase();
  const dispatch = useDispatch();

  // capture the data from the input field
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newInfoData = { ...infoData };
    newInfoData[field] = value;
    setInfoData(newInfoData);
  };

  // capture the video data
  const captureVideo = (e) => {
    setVideoData(e.target.files[0]);
  };

  const videoSubmission = (e) => {
    const formData = new FormData();
    formData.append("video", videoData);
    formData.append("email", user.email);
    formData.append("title", infoData.title);
    formData.append("class", infoData.class);
    dispatch(teacherVideoUpload(formData));
    console.log(formData);

    e.preventDefault();
    e.target.reset();
  };

  const error = (e) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid File Extension!",
    });
    e.preventDefault();
  };

  console.log(user?.email);
  console.log(infoData);
  console.log(videoData);
  //   console.log(formData);

  return (
    <>
      <div className="flex h-screen bg-gray-200 parent-div items-center justify-center">
        <div className="grid bg-gray-800 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
          <div className="flex justify-center py-4">
            <div className="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex">
              <h1 className="text-white font-bold md:text-2xl text-xl">
                Upload Class
              </h1>
            </div>
          </div>

          {/* video submission */}
          <form
            onSubmit={videoData?.type === "video/mp4" ? videoSubmission : error}
          >
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-300 text-light font-semibold">
                Title
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 bg-gray-400 hover:bg-gray-200 focus:bg-gray-200 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                name="title"
                onBlur={handleChange}
                placeholder="Add Video Title"
              />
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-300 text-light font-semibold">
                Class
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 bg-gray-400 hover:bg-gray-200 focus:bg-gray-200 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                name="class"
                onBlur={handleChange}
                placeholder="eg: class-one"
              />
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-300 text-light font-semibold mb-1">
                Upload Video
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                  <div className="flex flex-col items-center justify-center p-7">
                    <svg
                      className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <input
                      type="file"
                      name="video"
                      placeholder="Select a Video"
                      onBlur={captureVideo}
                      className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider"
                    />
                  </div>
                </label>
              </div>
            </div>
            {/* upload button */}
            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <input
                type="submit"
                value="Upload"
                className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
              />
            </div>
          </form>
          {/*end of  video submission */}
        </div>
      </div>
    </>
  );
};

export default VideoSubmission;
