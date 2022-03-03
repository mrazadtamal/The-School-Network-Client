import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div className=" w-full h-full  grid">
      <div className=" ">
        <p className=" text-2xl uppercase text-center font-bold m-5">
          Transcript
        </p>
        <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
          <tr className="text-left border-b-2 border-gray-300">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">ID Number</th>
            <th className="px-4 py-3">Father Name</th>
            <th className="px-4 py-3">Mother Name</th>
            <th className="px-4 py-3">Result</th>
            <th className="px-4 py-3">Date Of Birth</th>
          </tr>

          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">{studentData?.name}</td>
            <td className="px-4 py-3">{studentData?.roll}</td>
            <td className="px-4 py-3">{studentData?.fatherName}</td>
            <td className="px-4 py-3">{studentData?.motherName}</td>
            <td className="px-4 py-3">{avrgCgpa}</td>
            <td className="px-4 py-3">{studentData?.birthDate}</td>
          </tr>
        </table>
      </div>
      <div>
        <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
          <tr className="text-left border-b border-gray-300">
            <th className="px-4 py-3">Semester Name </th>
            <th className="px-4 py-3">Semester Result</th>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">First Semester</td>
            <td className="px-4 py-3">{firstTerm?.firsttermCgpa}</td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">Second Semester</td>
            <td className="px-4 py-3">{secondTerm?.secondtermCgpa}</td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">last Semester </td>
            <td className="px-4 py-3">{thirdTerm?.thirdtermCgpa}</td>
          </tr>
          <br className=" "></br>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">Total </td>
            <td className="px-4 py-3">{avrgCgpa}</td>
          </tr>
        </table>
      </div>

      <button className="border-2 w-60 mt-5 ml-20  text-center m-auto   border-blue-500 rounded-md font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
        Download Transcript
      </button>
    </div>
  );
};

export default Transcript;
