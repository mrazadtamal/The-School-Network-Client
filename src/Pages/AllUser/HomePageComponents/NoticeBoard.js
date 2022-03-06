import React, {useEffect} from "react";
import { FcAdvertising } from "react-icons/fc";
import { Link } from "react-router-dom";
import {GetingPreviousAnnouncement} from "../../../SchoolRedux/PrincipalSlice";
import {useDispatch, useSelector} from "react-redux";

const NoticeBoard = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(GetingPreviousAnnouncement())
  }, [dispatch]);
  const previousAnnouncement = useSelector((state) => state.principalStore.announcement);


  return (
    <div className="bg-yellow-300	pt-6 pb-10">
      <h2 className="pt-10 pb-10 text-center text-3xl">
        Important Notices and Information :
      </h2>






      {


        previousAnnouncement?.map(announcement => <div  className="bg-white shadow-lg rounded-lg mt-5 p-5 container mx-auto w-2/3" data-aos="zoom-in">


          <div className="flex mb-8 pt-5">
            <div>
              <div className="bg-cyan-600 pl-3 pr-3 text-lime-50">June</div>
              <div className="bg-green-900	 pl-3 pr-3 text-lime-50">{announcement?.date}</div>
            </div>

            <div>
              <div className="flex pt-2 pl-4">
                <FcAdvertising className="w-10 h-10" />{" "}
                <h2 className="ml-2 text-2xl">{announcement?.title}</h2>
              </div>
              <p className="text-left pl-4">
                {announcement?.description}
              </p>
            </div>
          </div>
          <div className="border-b-2 border-indigo-500"></div>



        </div>




        )







      }


      <div className="pt-16 pb-4 text-center ">
        <Link to="/allnotice">
          <button className="bg-emerald-900  p-2 pr-4 rounded-full pl-4 text-cyan-50">
            See All Notice
          </button>
        </Link>
      </div>
s



    </div>
  );
};

export default NoticeBoard;
