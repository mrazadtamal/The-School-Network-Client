import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFilteredResult } from "../../../../SchoolRedux/StudentSlice";
import useFirebase from "../../../Shared/Authentication/Authentication";

const Transcript = () => {
  const { user } = useFirebase();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user.email) {
      dispatch(GetFilteredResult({ email: user.email }));
    } else {
      return;
    }
  }, [dispatch, user.email]);

  // get the result from the redux store

  const allResults = useSelector((state) => state.studentStore.filteredResult);
  console.log("All Terms Results", allResults);
  console.log("Filter Result", allResults.filteredResult);
  console.log("CGPA", Number(allResults["filteredResult"][0]["firsttermCgpa"]));

  const avrgCgpa =
    (Number(allResults["filteredResult"][0]["firsttermCgpa"]) +
      Number(allResults["filteredResult"][1]["secondtermCgpa"]) +
      Number(allResults["filteredResult"][2]["thirdtermCgpa"])) /
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
            <td className="px-4 py-3">{allResults["student"]["name"]}</td>
            <td className="px-4 py-3">{allResults["student"]["_id"]}</td>
            <td className="px-4 py-3">{allResults["student"]["fatherName"]}</td>
            <td className="px-4 py-3">{allResults["student"]["motherName"]}</td>
            <td className="px-4 py-3">{avrgCgpa}</td>
            <td className="px-4 py-3">{allResults["student"]["birthDate"]}</td>
          </tr>

          {/* <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">223344</td>
            <td className="px-4 py-3">Smith</td>
            <td className="px-4 py-3">50</td>
            <td className="px-4 py-3">Male</td>
          </tr>

          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">M. Rahman</td>
            <td className="px-4 py-3">Smith</td>
            <td className="px-4 py-3">50</td>
            <td className="px-4 py-3">Male</td>
          </tr> */}
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
            <td className="px-4 py-3">
              {allResults.filteredResult[0]["firsttermCgpa"]}
            </td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">Second Semester</td>
            <td className="px-4 py-3">
              {allResults.filteredResult[1]["secondtermCgpa"]}
            </td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">last Semester </td>
            <td className="px-4 py-3">
              {allResults.filteredResult[2]["thirdtermCgpa"]}
            </td>
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
