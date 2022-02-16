import React from "react";

const MyComponent = () => {
  return (
    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 mx-auto pr-20 pl-20">
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
          1986
        </h2>

        <h5 className="text-bookmark-blue text-3xl md:text-4 lg:text-2xl text-center lg:text-left mb-6">
          THE BEGINNING
        </h5>

        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          Dr. Clarita G. Adalem, a Master Teacher in Pangasinan founded the 1st
          of three schools established by the Adalem Family. The Better Children
          of St. Clare Montessori Center in Lillesville.
        </p>
      </div>

      <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <img
          className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
          src="https://i.ibb.co/58f26Gc/Rectangle.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MyComponent;
