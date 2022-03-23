import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetNotification,} from "../../../SchoolRedux/StudentSlice";
import useFirebase from "../../Shared/Authentication/Authentication";
import { BiMessageSquareDetail } from 'react-icons/bi';

const NotificationPage = () => {
  const { user } = useFirebase();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetNotification(user.email));
  }, [user.email, dispatch]);

  const Notifications = useSelector((state) => state.studentStore.Notifications);

  return (
    <div className="px-8 py-4 " style={{width: '100%'}}>
        <div className="notification_container px-8 py-4">
        <h1 className="text-center font-bold text-3xl text-gray-900 my-4">Your All message Here</h1>
            {
                Notifications?.map(notifi => <div className="notification_div px-8 py-2">
                    <p className="text-blue-800 font-bold text-xl"><BiMessageSquareDetail className="inline "/> From Librarian</p>
                    <p className="my-4 "> <span className="font-bold">Message</span>: {notifi.message}</p>
                    <p className=""> <span className="font-bold">BookName</span>: {notifi.bookName}</p>

                    <p className="mt-2 text-gray-500">Send at {notifi.received}</p>
                </div>)
            }
        </div>
    </div>
  );
};

export default NotificationPage;
