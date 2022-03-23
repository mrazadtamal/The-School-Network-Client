import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import useFirebase from "../Shared/Authentication/Authentication";

const LibrarianNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {user, LogOutUser} = useFirebase()

  return (
    <div className="librarian_navbar">
      <nav className="text-white  bg-blue-800">
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
                  <h2>Library DashBoard</h2>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

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
                <p onClick={() => LogOutUser(navigate) } className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">LogOut</p>
                <Link
                  to="/LibrarianDashboard"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
    
                <Link
                  to="/LibrarianDashboard/BooksAdd"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Add New Books
                </Link>

                <Link
                  to="/LibrarianDashboard/ManageBooks"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Manage Books
                </Link>

                <Link
                  to="/LibrarianDashboard/BookAnalytics"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Books Analytics
                </Link>

                <Link
                  to="/LibrarianDashboard/CheckLendBookList"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Check Lended BookList
                </Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default LibrarianNavbar;
