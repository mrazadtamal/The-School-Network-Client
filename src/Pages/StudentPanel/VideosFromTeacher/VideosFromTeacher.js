import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentInfo, GetVideos } from "../../../SchoolRedux/StudentSlice";

import useFirebase from "./../../Shared/Authentication/Authentication";
import SingleVideoData from "./SingleVideoData/SingleVideoData";
const VideosFromTeacher = () => {
  const { user } = useFirebase();
  const dispatch = useDispatch();
  console.log(user.email);
  // load user data according to the logged in student
  useEffect(() => {
    dispatch(getStudentInfo(user.email));
  }, [user.email, dispatch]);

  const studentData = useSelector((state) => state.studentStore.studentInfo);

  console.log(studentData.class);

  // get all the video data from the server
  useEffect(() => {
    dispatch(GetVideos({ class: studentData.class }));
  }, [studentData.class, dispatch]);

  const videoData = useSelector((state) => state.studentStore.videos);
  console.log(videoData);
  return (
    <>
      {/* component */}
      <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
          <div>
            <h2 class="text-gray-600 font-semibold">
              Video Classes and Messages
            </h2>
            <span class="text-xs">All applicable videos</span>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Video Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Author
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Publish Date
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      For
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      View
                    </th>
                  </tr>
                </thead>
                {/* table body data */}
                <tbody>
                  {videoData?.map((video) => (
                    <SingleVideoData video={video} key={video.updatedAt} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosFromTeacher;
