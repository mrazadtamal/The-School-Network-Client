import React, { useEffect } from "react";
import { FcAdvertising } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { GetingPreviousAnnouncement } from "../../../SchoolRedux/PrincipalSlice";

const Annoucements = () => {
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  useEffect(() => {
    dispatch(GetingPreviousAnnouncement())
}, [dispatch]);

const previousAnnouncement = useSelector((state) => state.principalStore.announcement);
  return (
    <div className="container mx-auto pr-20 pl-20" data-aos="zoom-in">
      <h2 className="text-center text-5xl pb-2">Annoucements</h2>
      <hr />
      <Slider {...settings}>
      {
              previousAnnouncement?.map(announcement => <div className="bg-white shadow-lg rounded-lg mt-5 p-5">
              <div className="flex pt-5">
                <FcAdvertising className="w-10 h-10" />{" "}
                <h2 className="ml-2 text-2xl">{announcement?.title}</h2>
              </div>
              <div className=''>
                <p>
                  {announcement?.description}
                </p>
                <p className="font-bold pt-2">{announcement?.date}</p>
              </div>
            </div>)
            }
      </Slider>
    </div>
  );
};

export default Annoucements;
