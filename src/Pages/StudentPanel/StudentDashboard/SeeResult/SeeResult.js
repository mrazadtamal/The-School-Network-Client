import React, { useState } from "react";
import { Link } from "react-router-dom";

const SeeResult = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="h-full w-full ">
      <div className=" bg-green-600 text-white  ">
        <div className="w-40 bg-gray-600 ml-5 top-10 left-16 ">
          <button
            onClick={handleClick}
            type="button"
            className="inline-flex justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2  text-sm font-medium  text-white focus:outline-none    "
          >
            See Result
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
          <div className=" z-50 absolute    mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              <Link
                to="/firstSemester"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                First Semester
              </Link>
              <Link
                to="/secondSemester"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                Second Semester
              </Link>
              <Link
                to="/lastSemester"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                Last Semester
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* result */}

      <>
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">
                First Semester Result
              </h2>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Subject
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Number
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        CGPA
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Bangla
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          90
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          3
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Bangla
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          90
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          3
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Bangla
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          90
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          3
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* result end */}
    </div>
  );
};

export default SeeResult;
