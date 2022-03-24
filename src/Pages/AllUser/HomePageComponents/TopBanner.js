import React from 'react';

const TopBanner = () => {
    return (

        <div >
        <div
        className="container flex flex-col-reverse lg:flex-row items-center gap-12 lg:mt-28 mx-auto pr-20 pl-20"
        data-aos="flip-left"
      >
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center text-green-800	 lg:text-left mb-6">
          25K+ STUDENTS TRUST US
          </h2>
  
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          Every day brings with it a fresh set of learning possibilities.
          </p>
         <div className="flex">
         <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Get Started
</button>
<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4">

 Learn More
</button>
         </div>
        </div>
  
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            className="lg:w-full lg:h-1/2 sm:w-full sm:h-1/2 md:w-full md:h-full"
            src="https://i.ibb.co/47HJz8K/hero-8-bg-shape-cover.png"
            alt=""
          />
        </div>
      </div>
      </div>
    );
};

export default TopBanner;