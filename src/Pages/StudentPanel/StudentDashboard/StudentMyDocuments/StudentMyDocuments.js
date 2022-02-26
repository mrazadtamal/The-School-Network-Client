import React from "react";
import StudentAssignmentSubmit from "./StudentAssignmentSubmit";
// import StudentNotesUpload from "./StudentNotesUpload";

const StudentMyDocuments = () => (
  <div className="flex flex-col mt-10">
    <h1 className="flex justify-center m-auto text-3xl font-bold text-blue-900">
      Student Documents Submission
    </h1>

    <div className="grid xl:grid-cols-3 gap-10 border-gray-200 m-auto mt-10 md:grid-cols-2 grid-cols-1 max-w-6xl">
      <StudentAssignmentSubmit />
      {/* <StudentNotesUpload />
      <StudentAssignmentSubmit /> */}
    </div>

    <button
      className="my-10 w-40 flex justify-center m-auto bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
  font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
    >
      View All Submit
    </button>
  </div>
);

export default StudentMyDocuments;
