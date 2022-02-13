import React from "react";

const MyComponent = () => {
  return (
    <div className=" mt-20 bg-stone-800 w-full p-8 text-white">
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
            <li className="hover:text-blue mt-1 text-grey-darker">
              Achievements
            </li>
            <li className="hover:text-blue mt-1 text-grey-darker">
              Case Studies
            </li>
            <li className="hover:text-blue mt-1 text-grey-darker">Solutions</li>
            <li className="hover:text-blue mt-1 text-grey-darker">
              Download Brochure
            </li>
            <li className="hover:text-blue mt-1 text-grey-darker">
              Announcements
            </li>
            <li className="hover:text-blue mt-1 text-grey-darker">Our Blogs</li>
          </ul>
        </div>
        <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-green-dark mb-2">USEFUL LINK</div>
          <ul className="list-reset leading-normal">
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Register Institute
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Login
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Sign-Up
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Blog
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Become A Partner
            </li>
            <li className="hover:text-green-dark mt-1 text-grey-darker">
              Refer And Earn
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
