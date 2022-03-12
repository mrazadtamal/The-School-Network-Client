import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentInfo,
  GetStudentNotice,
} from "../../../SchoolRedux/StudentSlice";
import useFirebase from "../../Shared/Authentication/Authentication";
import { BsCalendarCheck } from "react-icons/bs";
import "./notice.css";
const NoticBoard = () => {
  const { user } = useFirebase();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudentInfo(user.email));
  }, [user.email, dispatch]);

  const studentData = useSelector((state) => state.studentStore.studentInfo);

  useEffect(() => {
    dispatch(GetStudentNotice(studentData.class));
  }, [studentData.class, dispatch]);

  const Notices = useSelector((state) => state.studentStore.notices);
  return (
    <div className="h-[100vh]">
      <div className="p-12">
        {Notices?.map((notice) => (
          <div className="p-5 bg-gray-100 shadow-xl rounded-xl">
            <h1 className="text-3xl text-gray-800 font-bold text-center">
              Important
            </h1>
            <h4 className="text-xl mt-4 font-bold text-center text-amber-400 pb-8">
              {notice?.title}
            </h4>
            <h4 className=" font-bold text-end mt-4 pb-4 text-emerald-400 date_text">
              <BsCalendarCheck className="react__button_icons" size={20} />{" "}
              {notice?.date}
            </h4>
            <p className="text-gray-800">{notice?.description}</p>
            {notice.img && (
              <img
                className="notice_img"
                src={`data:image/jpeg;base64,${notice?.img}`}
                alt=""
              />
            )}
            <p className="text-xl font-bold  pt-8 text-emerald-400">
              {notice?.teacherName}
            </p>
            <p className="text-xl font-bold   mb-4 text-emerald-400">
              The School Network
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticBoard;
