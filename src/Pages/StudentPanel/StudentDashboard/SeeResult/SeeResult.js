import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetFilteredResult,
  GetResult,
  GetStudent,
} from "../../../../SchoolRedux/StudentSlice";
import useFirebase from "../../../Shared/Authentication/Authentication";

const SeeResult = () => {
  const [show, setShow] = useState(false);
  const { user } = useFirebase();
  const [result, setResult] = useState({});
  const [semester, setSemester] = useState("First-Term");
  console.log(semester);
  console.log(user.email);

  const dispatch = useDispatch();

  const handleClick = () => {
    setShow(!show);
  };

  // load user data according to the logged in student
  useEffect(() => {
    dispatch(GetStudent({ email: user.email, term: `${semester}` }));
  }, [user.email, dispatch, semester]);

  const filteredResult = useSelector((state) => state.studentStore.user);

  console.log(filteredResult);

  return (
    <div className="h-full w-full ">
      <div className=" bg-gray-200 text-black  ">
        <div className="w-56 mx-auto rounded-md shadow-lg bg-emerald-500 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="rounded-md" role="none">
            <div className="text-center px-3 py-2">
              <select name="term" onChange={(e) => setSemester(e.target.value)}>
                <option value="First-Term">First Term</option>
                <option value="Second-Term">Second Term</option>
                <option value="Third-Term">Third Term</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* result */}

      <>
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">
                {semester} Semester Result :{" "}
                {semester == "First-Term"
                  ? filteredResult.firsttermCgpa
                  : semester == "Second-Term"
                  ? filteredResult.secondtermCgpa
                  : filteredResult.thirdtermCgpa}
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
                        Mid
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Final Number
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Total
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
                    {/* first subject */}
                    <tr>
                      {/* subject name */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {filteredResult.bangla}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* mid number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.banglamid}
                        </p>
                      </td>
                      {/* final number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.banglafinal}
                        </p>
                      </td>
                      {/* total number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.banglatotal}
                        </p>
                      </td>
                      {/* CGPA */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.banglaCgpa}
                        </p>
                      </td>
                      {/* grade */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    {/* first subject end */}

                    {/* second Subject start */}
                    <tr>
                      {/* subject name */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {filteredResult.draw}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* mid number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.drawmid}
                        </p>
                      </td>
                      {/* final number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.drawfinal}
                        </p>
                      </td>
                      {/* total number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.drawtotal}
                        </p>
                      </td>
                      {/* subject grade point*/}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.drawCgpa}
                        </p>
                      </td>
                      {/* subject grade letter*/}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    {/* second subject end */}

                    {/* third subject start */}
                    <tr>
                      {/* subject name */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {filteredResult.english}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Mid number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.englishmid}
                        </p>
                      </td>
                      {/* Final number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.englishfinal}
                        </p>
                      </td>
                      {/* total number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.englishtotal}
                        </p>
                      </td>
                      {/* subject grade point */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.englishCgpa}
                        </p>
                      </td>
                      {/* subject grade letter */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    {/* third subject end */}
                    {/* Fourth subject start */}
                    <tr>
                      {/* subject name */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {filteredResult.gs}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Mid number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.gsmid}
                        </p>
                      </td>
                      {/* Final number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.gsfinal}
                        </p>
                      </td>
                      {/* total number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.gstotal}
                        </p>
                      </td>
                      {/* subject grade point */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.gsCgpa}
                        </p>
                      </td>
                      {/* subject grade letter */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    {/* Fourth subject end */}
                    {/* Fifth subject start */}
                    <tr>
                      {/* subject name */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {filteredResult.math}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Mid number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.mathmid}
                        </p>
                      </td>
                      {/* Final number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.mathfinal}
                        </p>
                      </td>
                      {/* total number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.mathtotal}
                        </p>
                      </td>
                      {/* subject grade point */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.mathCgpa}
                        </p>
                      </td>
                      {/* subject grade letter */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    {/* Fifth subject end */}
                    {/* Sixth subject start */}
                    <tr>
                      {/* subject name */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {filteredResult.religion}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Mid number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.religionmid}
                        </p>
                      </td>
                      {/* Final number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.religionfinal}
                        </p>
                      </td>
                      {/* total number */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.religiontotal}
                        </p>
                      </td>
                      {/* subject grade point */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          {filteredResult.religionCgpa}
                        </p>
                      </td>
                      {/* subject grade letter */}
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap text-center">
                          A+
                        </p>
                      </td>
                    </tr>
                    {/* Sixth subject end */}
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
