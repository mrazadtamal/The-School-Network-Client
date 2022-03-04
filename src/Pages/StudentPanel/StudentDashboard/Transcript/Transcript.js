import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Transcript.css";
import {
  GetFilteredResult,
  getStudentInfo,
} from "../../../../SchoolRedux/StudentSlice";
import useFirebase from "../../../Shared/Authentication/Authentication";

const Transcript = () => {
  const { user } = useFirebase();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user.email) {
      dispatch(GetFilteredResult(user.email));
    } else {
      return;
    }
  }, [dispatch, user.email]);

  useEffect(() => {
    dispatch(getStudentInfo(user.email));
  }, [user.email, dispatch]);

  const studentData = useSelector((state) => state.studentStore.studentInfo);
  // get the result from the redux store

  const allResults = useSelector((state) => state.studentStore.allResults);
  console.log("All Terms Results", allResults);

  const firstTerm = allResults?.find((result) => result?.firsttermCgpa !== "0");

  const secondTerm = allResults?.find(
    (result) => result?.secondtermCgpa !== "0"
  );
  const thirdTerm = allResults?.find((result) => result?.thirdtermCgpa !== "0");

  console.log(
    firstTerm?.firsttermCgpa,
    secondTerm?.secondtermCgpa,
    thirdTerm?.thirdtermCgpa
  );

  const avrgCgpa =
    (Number(firstTerm?.firsttermCgpa) +
      Number(secondTerm?.secondtermCgpa) +
      Number(thirdTerm?.thirdtermCgpa)) /
    3;

  console.log(avrgCgpa);

  return (
    <>
      <div className="transcript rounded-md shadow-lg w-[60%] mx-auto bg-gray-200 h-[90%] grid mt-5">
        <div className="mt-[8rem] mb-[-4rem]">
          <h1 className="text-center text-4xl font-bold">The School Network</h1>
          <img
            className="h-10 w-12 mx-auto mt-5"
            src="https://res.cloudinary.com/abidazad/image/upload/v1644746365/education_kf8trf.png"
            alt="Workflow"
          />
        </div>
        <div className="mx-auto flex w-[80%] justify-between">
          <p>
            Name:<b> {studentData?.name}</b>
          </p>
          <p>
            Father's Name:<b> {studentData?.fatherName}</b>
          </p>
          <p>
            Mother's Name:<b> {studentData?.motherName}</b>
          </p>
        </div>
        <div className="mx-auto mt-[-5rem] flex w-[80%] justify-between">
          <p>
            Date of Birth: <b>{studentData?.birthDate}</b>
          </p>
          <p>
            Class Roll: <b>{studentData?.class}</b>
          </p>
          <p>
            Transcript ID: <b>{studentData?._id}</b>
          </p>
        </div>
        <div className="my-[-8rem]">
          <p className=" text-2xl uppercase text-center font-bold">
            Transcript
          </p>
        </div>
        <div className="mt-[-10rem]">
          <table class="mx-auto w-[80%] leading-normal">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Semester
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Semester GPA
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              {/* first semseter */}
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-5 py-3 text-center">First Semester</td>
                <td className="text-center">{firstTerm?.firsttermCgpa}</td>
                <td className="text-center">
                  {Number(firstTerm?.firsttermCgpa) < 1.0
                    ? "F"
                    : Number(firstTerm?.firsttermCgpa) > 1.0 &&
                      Number(firstTerm?.firsttermCgpa) < 2.0
                    ? "D"
                    : Number(firstTerm?.firsttermCgpa) >= 2 &&
                      Number(firstTerm?.firsttermCgpa) < 3.0
                    ? "C"
                    : Number(firstTerm?.firsttermCgpa) >= 3.0 &&
                      Number(firstTerm?.firsttermCgpa) < 3.5
                    ? "B"
                    : Number(firstTerm?.firsttermCgpa) >= 3.5 &&
                      Number(firstTerm?.firsttermCgpa) < 4.0
                    ? "A"
                    : "A+"}
                </td>
              </tr>
              {/* first semester end */}

              {/* second semester start */}
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-5 py-3 text-center">Second Semester</td>
                <td className="text-center">{firstTerm?.firsttermCgpa}</td>
                <td className="text-center">
                  {Number(secondTerm?.secondtermCgpa) < 1.0
                    ? "F"
                    : Number(secondTerm?.secondtermCgpa) > 1.0 &&
                      Number(secondTerm?.secondtermCgpa) < 2.0
                    ? "D"
                    : Number(secondTerm?.secondtermCgpa) >= 2 &&
                      Number(secondTerm?.secondtermCgpa) < 3.0
                    ? "C"
                    : Number(secondTerm?.secondtermCgpa) >= 3.0 &&
                      Number(secondTerm?.secondtermCgpa) < 3.5
                    ? "B"
                    : Number(secondTerm?.secondtermCgpa) >= 3.5 &&
                      Number(secondTerm?.secondtermCgpa) < 4.0
                    ? "A"
                    : "A+"}
                </td>
              </tr>
              {/* second semester end */}
              {/* third semester start */}
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-5 py-3 text-center">Second Semester</td>
                <td className="text-center">{firstTerm?.firsttermCgpa}</td>
                <td className="text-center">
                  {Number(thirdTerm?.thirdtermCgpa) < 1.0
                    ? "F"
                    : Number(thirdTerm?.thirdtermCgpa) > 1.0 &&
                      Number(thirdTerm?.thirdtermCgpa) < 2.0
                    ? "D"
                    : Number(thirdTerm?.thirdtermCgpa) >= 2 &&
                      Number(thirdTerm?.thirdtermCgpa) < 3.0
                    ? "C"
                    : Number(thirdTerm?.thirdtermCgpa) >= 3.0 &&
                      Number(thirdTerm?.thirdtermCgpa) < 3.5
                    ? "B"
                    : Number(thirdTerm?.thirdtermCgpa) >= 3.5 &&
                      Number(thirdTerm?.thirdtermCgpa) < 4.0
                    ? "A"
                    : "A+"}
                </td>
              </tr>
              <br />
              <tr className="bg-gray-100 border-b border-gray-200">
                <td className="px-5 py-3 text-center">Total</td>
                <td className="text-center">{firstTerm?.firsttermCgpa}</td>
                <td className="text-center">
                  {Number(avrgCgpa) < 1.0
                    ? "F"
                    : Number(avrgCgpa) > 1.0 && Number(avrgCgpa) < 2.0
                    ? "D"
                    : Number(avrgCgpa) >= 2 && Number(avrgCgpa) < 3.0
                    ? "C"
                    : Number(avrgCgpa) >= 3.0 && Number(avrgCgpa) < 3.5
                    ? "B"
                    : Number(avrgCgpa) >= 3.5 && Number(avrgCgpa) < 4.0
                    ? "A"
                    : "A+"}
                </td>
              </tr>
              {/* third semester end */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="border-2 w-60 mt-5 ml-20  text-center m-auto   border-blue-500 rounded-md font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
          Download Transcript
        </button>
      </div>
    </>
  );
};

export default Transcript;
