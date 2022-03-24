import React from "react";

const MyComponent = () => {
  return (
    <div className=" mt-20 bg-[#0C4A6E] w-full p-8 text-white">
      <div className="sm:flex mb-4">
        <div className="sm:w-1/4 ">
          <img
            className="h-20 w-15  m-auto text-center"
            src="https://res.cloudinary.com/abidazad/image/upload/v1644746365/education_kf8trf.png"
            alt=""
          />
          <div className="text-center text-xl mt-3">
            <h2>The School Network</h2>
          </div>
        </div>
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-blue mb-2">COMPANY</div>
          <ul className="list-reset leading-normal">
            <li className="hover:text-blue mt-1 text-grey-darker">About Us</li>
            <li className="hover:text-blue mt-1 text-grey-darker">Admission</li>
            <li className="hover:text-blue mt-1 text-grey-darker">
              How To apply
            </li>

            <li className="hover:text-blue mt-1 text-grey-darker">
              Application Form
            </li>
            <li className="hover:text-blue mt-1 text-grey-darker">
              Application procedures
            </li>
            <li className="hover:text-blue mt-1 text-grey-darker">
              Our Teachers
            </li>
          </ul>
        </div>
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-green-dark mb-2">SERVICE</div>
          <ul className="list-reset leading-normal">
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Facilities
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Auditorium
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Canteen
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Library
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Games
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Become A Partner
            </li>
          </ul>
        </div>
        <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
          <div className="text-red-light mb-2">CONTACT US</div>

          <p className="text-grey-darker mt-1 font-bold leading-normal">
            PHONE
          </p>
          <p className="text-grey-darker leading-normal">999333666</p>
          <p className="text-grey-darker mt-1 font-bold leading-normal">
            EMAIL
          </p>
          <p className="text-grey-darker leading-normal">
            web.codingwizards@gmail.com
          </p>
          <h4 className="font-bold  mt-1 text-lg">Subscribe Us</h4>
          <div className="mt-4 flex">
            <input
              type="text"
              className="p-2  w-9/12 border border-grey-light round text-grey-dark text-sm h-auto"
              placeholder="Your email address"
            />
            <button className=" bg-cyan-700 text-white rounded-sm h-auto text-xs p-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
