import React from "react";

import Slider from "react-slick";


const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://i.ibb.co/G5MgsVd/cdc-gs-Ri9c-WCIB0-unsplash.jpg"
            alt="slider image"
            className="object-fill"
          />
        </div>
        <div>
         <img src="https://i.ibb.co/gdwDCYD/alexandre-van-thuan-mr9-Foutt-LGY-unsplash.jpg"  alt="img"  className="object-contain" />
        </div>
        <div>
          <img src="https://i.ibb.co/HYqH4Br/robo-wunderkind-h-Lv-Q4-QEBAE-unsplash.jpg" alt="img"   className="object-contain"/>
        </div>
        <div>
         <img src="https://i.ibb.co/Wnk6ss2/ivan-aleksic-PDRFee-Dni-Ck-unsplash.jpg" alt="img"   className="object-contain"/>
        </div>

      </Slider>
    </div>
  );
};

export default HomeSlider;
