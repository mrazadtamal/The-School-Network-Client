<<<<<<< HEAD
import React from 'react';
import Slider from "react-slick";

const OurVisitors = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container mx-auto pt-24 pb-24 text-center bg-cyan-50">
            <h2 className="font-bold text-3xl">Visitors Says About Us
            </h2>
            <p className="pt-6">
                National and International scholars, Business leaders, Entrepreneurs, Dignitaries visited us to share experiences, explore <br/>opportunities, collaborate and give guidance to the students
            </p>
            <Slider {...settings} >
                <div>
                    <img src="https://i.ibb.co/nMbB6nL/customer-3.png" className="rounded-full text-center w-40 h-36 mx-auto mt-12"/>
                    <h2 className="pt-12 text-center ">Best School and organization in bangladesh with a lot of facilites.Best School and <br/>organization in bangladesh with a lot of facilitesBest School and organization in bangladesh with a lot of <br/>facilitesBest School and organization in bangladesh with a lot of facilites</h2>
                    <h5 className="pt-6 font-bold">Md Wahid</h5>
                </div>
                <div>
                    <img src="https://i.ibb.co/27dqXs7/customer-2.png" className="rounded-full text-center w-40 h-36 mx-auto mt-12"/>
                    <h2 className="pt-12 text-center ">Best School and organization in bangladesh with a lot of facilites.Best School and <br/>organization in bangladesh with a lot of facilitesBest School and organization in bangladesh with a lot of <br/>facilitesBest School and organization in bangladesh with a lot of facilites</h2>
                    <h5 className="pt-6 font-bold">Md Wahid</h5>
                </div>


                <div>
                    <img src="https://i.ibb.co/QKDcjsP/blog3.png" className="rounded-full text-center w-40 h-36 mx-auto mt-12"/>
                    <h2 className="pt-12 text-center ">Best School and organization in bangladesh with a lot of facilites.Best School and <br/>organization in bangladesh with a lot of facilitesBest School and organization in bangladesh with a lot of <br/>facilitesBest School and organization in bangladesh with a lot of facilites</h2>
                    <h5 className="pt-6 font-bold">Md Wahid</h5>
                </div>

                <div>
                    <img src="https://i.ibb.co/W6tyP48/my-300x300.jpg" className="rounded-full text-center w-40 h-36 mx-auto mt-12"/>
                    <h2 className="pt-12 text-center ">Best School and organization in bangladesh with a lot of facilites.Best School and <br/>organization in bangladesh with a lot of facilitesBest School and organization in bangladesh with a lot of <br/>facilitesBest School and organization in bangladesh with a lot of facilites</h2>
                    <h5 className="pt-6 font-bold">Md Wahid</h5>
                </div>


            </Slider>
            
        </div>
    );
=======
import React from "react";
import Slider from "react-slick";

const OurVisitors = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="container mx-auto pt-24 pb-24 text-center bg-cyan-50"
      data-aos="zoom-out"
    >
      <h2 className="font-bold text-3xl">Visitors Says About Us</h2>
      <p className="pt-6">
        National and International scholars, Business leaders, Entrepreneurs,
        Dignitaries visited us to share experiences, explore <br />
        opportunities, collaborate and give guidance to the students
      </p>
      <Slider {...settings}>
        <div>
          <img
            src="https://i.ibb.co/nMbB6nL/customer-3.png"
            className="rounded-full text-center w-40 h-36 mx-auto mt-12"
          />
          <h2 className="pt-12 text-center ">
            Best School and organization in bangladesh with a lot of
            facilites.Best School and <br />
            organization in bangladesh with a lot of facilitesBest School and
            organization in bangladesh with a lot of <br />
            facilitesBest School and organization in bangladesh with a lot of
            facilites
          </h2>
          <h5 className="pt-6 font-bold">Md Wahid</h5>
        </div>
        <div>
          <img
            src="https://i.ibb.co/27dqXs7/customer-2.png"
            className="rounded-full text-center w-40 h-36 mx-auto mt-12"
          />
          <h2 className="pt-12 text-center ">
            Best School and organization in bangladesh with a lot of
            facilites.Best School and <br />
            organization in bangladesh with a lot of facilitesBest School and
            organization in bangladesh with a lot of <br />
            facilitesBest School and organization in bangladesh with a lot of
            facilites
          </h2>
          <h5 className="pt-6 font-bold">Md Wahid</h5>
        </div>

        <div>
          <img
            src="https://i.ibb.co/QKDcjsP/blog3.png"
            className="rounded-full text-center w-40 h-36 mx-auto mt-12"
          />
          <h2 className="pt-12 text-center ">
            Best School and organization in bangladesh with a lot of
            facilites.Best School and <br />
            organization in bangladesh with a lot of facilitesBest School and
            organization in bangladesh with a lot of <br />
            facilitesBest School and organization in bangladesh with a lot of
            facilites
          </h2>
          <h5 className="pt-6 font-bold">Md Wahid</h5>
        </div>

        <div>
          <img
            src="https://i.ibb.co/W6tyP48/my-300x300.jpg"
            className="rounded-full text-center w-40 h-36 mx-auto mt-12"
          />
          <h2 className="pt-12 text-center ">
            Best School and organization in bangladesh with a lot of
            facilites.Best School and <br />
            organization in bangladesh with a lot of facilitesBest School and
            organization in bangladesh with a lot of <br />
            facilitesBest School and organization in bangladesh with a lot of
            facilites
          </h2>
          <h5 className="pt-6 font-bold">Md Wahid</h5>
        </div>
      </Slider>
    </div>
  );
>>>>>>> a3fb3398f70c09fdc74910e5d4a8ab4dec7aeabc
};

export default OurVisitors;
