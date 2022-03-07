import React from "react";

import Slider from "react-slick";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div data-aos="zoom-in">
      <Slider {...settings}>
        <div>
          <img
            src="https://i.ibb.co/NnqVJ2Z/Sliderimage1.jpg"
            alt="slider image"
            className="object-cover w-full h-96"
          />
        </div>
        {/*<div>*/}
        {/*  <img src="https://i.ibb.co/gdwDCYD/alexandre-van-thuan-mr9-Foutt-LGY-unsplash.jpg"  alt="img"  className="object-contain" />*/}
        {/*</div>*/}
        <div>
          <img
            src="https://i.ibb.co/6RShSY4/slidreimage2.jpg"
            alt="img"
            className="object-cover w-full h-96"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/S7VnZXz/sliderimage3.jpg"
            alt="img"
            className="object-cover w-full h-96"
          />
        </div>

        <div>
          <img
            src="https://i.ibb.co/LSkm75z/sliderimage4.jpg"
            alt="img"
            className="object-cover w-full h-96"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
