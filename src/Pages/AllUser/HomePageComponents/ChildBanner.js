import React from 'react';

const ChildBanner = () => {
    return (
        <div>
             <div
        className="container flex flex-col-reverse lg:flex-row items-center gap-12 lg:mt-8 mx-auto pr-20 pl-20"
       
      >
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center text-green-800	 lg:text-left mb-6">
          Every Child Matters
          </h2>
  
          <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          Problems trying to resolve the conflict between 
the two major realms of Classical physics: 
Newtonian mechanics 
          </p>
         <div className="flex">
        
<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4">

 Learn More
</button>
         </div>
        </div>
  
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            className="lg:w-1/2 lg:h-1/2 sm:w-1/2 sm:h-1/2 md:w-full md:h-full"
            src="https://i.ibb.co/LJ8GmGt/technology-1.png"
            alt=""
          />
        </div>
      </div>
        </div>
    );
};

export default ChildBanner;