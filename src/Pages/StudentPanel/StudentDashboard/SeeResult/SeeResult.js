import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetResult, GetStudent } from "../../../../SchoolRedux/StudentSlice";
import useFirebase from "../../../Shared/Authentication/Authentication";

const SeeResult = () => {
  const [show, setShow] = useState(false);
  const { user } = useFirebase();
  const [student, setStudent] = useState({});
  console.log(user.email);

  const dispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
  };

  // fetch the result data

  useEffect(() => {
    dispatch(GetResult());
  }, [dispatch]);

  // load user data according to the logged in student
  useEffect(() => {
    dispatch(GetStudent(user.email));
  }, [user.email, dispatch]);
  //store all the result data

  const studentResults = useSelector((state) => state.studentStore.results);
  const filteredStudent = useSelector((state) => state.studentStore.user);

  // console.log(studentResults);
  // console.log(filteredStudent[0]);
  const { name, roll, section } = filteredStudent[0];
  console.log(name, roll, section, filteredStudent[0].class);
  // setStudent(filteredStudent[0]);
  // selected semester

  const [semester, setSemester] = useState("");
  console.log(semester);
  return (
    <div className="h-full w-full ">
      <div className=" bg-gray-200 text-black  ">
        {/* <div className="w-40 bg-gray-600 ml-5 top-10 left-16 ">
          <button
            onClick={handleClick}
            type="button"
            className="inline-flex text-xl justify-center w-full rounded-md  border-gray-300 shadow-sm px-4 py-2   font-medium  text-white focus:outline-none    "
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
        </div> */}
        <div className="w-56 mx-auto rounded-md shadow-lg bg-emerald-500 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="rounded-md" role="none">
            <div className="text-center px-3 py-2">
              <select name="term" onChange={(e) => setSemester(e.target.value)}>
                <option value="">Select Term</option>
                <option value="First-Term">First Term</option>
                <option value="Second-Term">Second Term</option>
                <option value="Third-Term">Third Term</option>
              </select>
            </div>
            {/* <Link
                to="/firstSemester"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                First Semester
              </Link>
              <Link
                to="/StudentDashboard/secondSemester"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                Second Semester
              </Link>
              <Link
                to="/lastSemester"
                className="text-gray-700 block px-4 py-2 text-sm"
              >
                Last Semester
              </Link> */}
          </div>
        </div>
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
                      <th class="px-5 pl-6 text-left py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
