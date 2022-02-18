import React from "react";

const Transcript = () => {
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
            <th className="px-4 py-3">Result</th>
            <th className="px-4 py-3">Date Of Birth</th>
          </tr>

          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">Azad</td>
            <td className="px-4 py-3">223344</td>
            <td className="px-4 py-3">M. Rahman</td>
            <td className="px-4 py-3">4.70</td>
            <td className="px-4 py-3">00/00/00</td>
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
            <td className="px-4 py-3">4.30</td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">Second Semester</td>
            <td className="px-4 py-3">4.00</td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">last Semester </td>
            <td className="px-4 py-3">3.70</td>
          </tr>
          <br className=" "></br>
          <tr className="bg-gray-100 border-b border-gray-200">
            <td className="px-4 py-3">Total </td>
            <td className="px-4 py-3">4.00</td>
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
