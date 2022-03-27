import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentInfo,
  updateStudentPP,
} from "./../../../SchoolRedux/StudentSlice";
import useFirebase from "./../../Shared/Authentication/Authentication";

const StudentProfile = () => {
  const dispatch = useDispatch();
  const { user } = useFirebase();

  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    dispatch(getStudentInfo(user.email));
  }, [user.email, dispatch]);

  const studentData = useSelector((state) => state.studentStore.studentInfo);

  const updateDPBtnHandler = (e) => {
    e.preventDefault();
    if (profilePic) {
      const fd = new FormData();
      fd.append("userImage", profilePic);
      const updateDPData = { email: user.email, fd };
      dispatch(updateStudentPP(updateDPData));
    } else {
      alert("File is not selected");
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="bg-gray-100 shadow-lg">
        <div className="w-full text-white bg-main-color">
          <div
            x-data="{ open: false }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div className="p-4 flex flex-row items-center justify-between">
              <a
                href="/"
                className="text-lg text-black font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
              >
                My profile
              </a>
            </div>
            <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
              <div className="relative" x-data="{ open: false }"></div>
            </nav>
          </div>
        </div>

        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div>
              <div>
                {studentData.img ? (
                  <img
                    src={`data:image/jpeg;base64,${studentData?.img}`}
                    className=" w-60 "
                    alt=""
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/abidazad/image/upload/v1637747947/user_xsd3a7.png"
                    alt=""
                    className=" w-60"
                  />
                )}
              </div>
              <form onSubmit={updateDPBtnHandler}>
                <div>
                  {/* <button
                    className="block mt-3 text-white bg-green-400 hover:bg-green-700  focus:ring-blue-300 font-bold rounded-lg text-sm px-3 py-2 text-center "
                    type="button"
                    data-modal-toggle="defaultModal"
                  >
                    Update Profile Picture
                  </button> */}

                  <div
                    id="defaultModal"
                    aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
                  >
                    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Select Profile Picture
                          </h3>
                          <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal"
                          >
                            <svg
                              class="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>

                        <div class="p-6 space-y-6">
                          <input
                            type="file"
                            onChange={(e) => {
                              setProfilePic(e.target.files[0]);
                            }}
                          />
                        </div>

                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                          <button
                            data-modal-toggle="defaultModal"
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Update
                          </button>
                          <button
                            data-modal-toggle="defaultModal"
                            type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold ">Full Name :</div>
                      <div className="px-4 py-2">{studentData?.name}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Class : </div>
                      <div className="px-4 py-2">{studentData?.class}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Father Name :</div>
                      <div className="px-4 py-2">{studentData?.fatherName}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Mother Name :</div>
                      <div className="px-4 py-2">{studentData?.motherName}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Section :</div>
                      <div className="px-4 py-2">{studentData?.section}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Age :</div>
                      <div className="px-4 py-2">{studentData?.age}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Blood Group</div>
                      <div className="px-4 py-2">{studentData?.bloodGroup}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Gender : </div>
                      <div className="px-4 py-2"></div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Contact No :</div>
                      <div className="px-4 py-2">{studentData?.phone}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Current Address</div>
                      <div className="px-4 py-2">{studentData?.address}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">
                        Permanant Address
                      </div>
                      <div className="px-4 py-2">{studentData?.address}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Email.</div>
                      <div className="px-4 py-2">{studentData?.email}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">Birthday</div>
                      <div className="px-4 py-2">{studentData?.birthDate}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-bold">
                        Birth Certificate No. :{" "}
                      </div>
                      <div className="px-4 py-2">
                        {studentData?.birthCertificateNo}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button className="block w-40 text-white bg-green-400 text-sm font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 my-4">
                  Edit Profile
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
