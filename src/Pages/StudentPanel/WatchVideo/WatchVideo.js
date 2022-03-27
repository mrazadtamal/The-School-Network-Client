import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetVideoById } from "../../../SchoolRedux/StudentSlice";

const WatchVideo = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(`https://blooming-citadel-14218.herokuapp.com/video?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideo(data);
      });
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center align-center">
        {video.videoUploadPath !== undefined ? (
          <div className="w-3/5 my-auto">
            <video controls>
              <source src={`https://blooming-citadel-14218.herokuapp.com/${video?.videoUploadPath}`} />
            </video>
          </div>
        ) : (
          <div class="flex justify-center items-center">
            <div
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WatchVideo;
