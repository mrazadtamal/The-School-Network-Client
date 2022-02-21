import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const AllUserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const handleClickAgain = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <nav className="  bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center text-white ">
                <div>
                  <img
                    className="h-10 w-12 mr-4"
                    src="https://res.cloudinary.com/abidazad/image/upload/v1644746365/education_kf8trf.png"
                    alt="Workflow"
                  />
                </div>
                <div>
                  <h2>The School Network</h2>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/home"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/aboutus"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </Link>

                  {/* ---------------Dropdown */}

                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={handleClick}
                        type="button"
                        className="inline-flex justify-center w-full hover:bg-gray-700 rounded-md  border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-300 hover:text-white focus:outline-none    "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Admission
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {show && (
                      <div
                        className=" z-50 absolute    mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aaria-labelledby="menu-button"
                      >
                        <div className="py-1" role="none">
                          <a
                            href="/"
                            className="text-gray-700 block px-4 hover:bg-gray-200 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-0"
                          >
                            <Link to="/howtoapply">How To apply</Link>
                          </a>
                          <a
                            href="/"
                            className="text-gray-700 block px-4 hover:bg-gray-200 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-1"
                          >
                            <Link to="/admissionForm">Application Form</Link>
                          </a>
                          <a
                            href="/"
                            className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-2"
                          >
                            <Link to="/admissionPolicy">
                              Application procedures
                            </Link>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ---------- Dropdown end---------- */}

                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Our Course
                  </Link>

                  {/* ---------------Dropdown 2------------- */}

                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={handleClickAgain}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md hover:bg-gray-700  border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-300 hover:text-white focus:outline-none    "
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Facilites
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {dropdown && (
                      <div
                        className=" z-50 absolute    mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aaria-labelledby="menu-button"
                      >
                        <div className="py-1" role="none">
                          <a
                            href="/"
                            className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-0"
                          >
                            <Link to="/auditoriam">Auditoriam</Link>
                          </a>
                          <a
                            href="/"
                            className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-1"
                          >
                            <Link to="/canteen">Canteen</Link>
                          </a>
                          <a
                            href="/"
                            className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-2"
                          >
                            <Link to="/library">Library</Link>
                          </a>

                          <a
                            href="/"
                            className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm"
                            role="menuitem"
                            id="menu-item-2"
                          >
                            <Link to="/games">Games</Link>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* --------- Dropdown end----------- */}

                  <Link
                    to="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    SignIn
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/home"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/Programming"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Programming
                </Link>

                <Link
                  to="/course"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Our Course
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>

                {/* ---------------Dropdown */}

                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={handleClick}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-300 hover:text-white focus:outline-none    "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Options
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {show && (
                    <div
                      className=" z-50 absolute    mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aaria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="/"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          How To apply
                        </a>
                        <a
                          href="/"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-1"
                        >
                          Application Form
                        </a>
                        <a
                          href="/"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-2"
                        >
                          Application procedures
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* -------- Dropdown end------------ */}

                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Us
                </Link>

                {/* ---------------Dropdown 2------------- */}

                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={handleClickAgain}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-300 hover:text-white focus:outline-none    "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Options
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {dropdown && (
                    <div
                      className=" z-50 absolute    mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aaria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="/"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          How To apply
                        </a>
                        <a
                          href="/"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-1"
                        >
                          Application Form
                        </a>
                        <a
                          href="/"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          id="menu-item-2"
                        >
                          Application procedures
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* --------- Dropdown end----------- */}

                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  SignIn
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default AllUserNavbar;
