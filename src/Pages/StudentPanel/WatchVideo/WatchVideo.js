import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetVideoById } from "../../../SchoolRedux/StudentSlice";

const WatchVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetVideoById({ id: id }));
  }, [dispatch, id]);

  const video = useSelector((state) => state.studentStore.video);
  //   console.log(video.videoUploadPath);
  const url = "http://localhost:5000/" + video.videoUploadPath;
  //   console.log(url);
  return (
    <>
      <video width="750" height="500" controls>
        <source src={url} />
      </video>
    </>
  );
};

export default WatchVideo;
