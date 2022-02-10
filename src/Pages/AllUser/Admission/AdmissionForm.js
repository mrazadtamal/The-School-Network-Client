import React from 'react';
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const AdmissionForm = () => {
    return (
        <div>
            <AllUserNavbar/>
            <h2 className="text-center pt-5 pb-2 text-3xl">Application Form</h2>
            <p className=" text-center mb-10">*Please Fill up the form with authentic information.</p>
          <div className="container border-cyan-900 mx-auto border-4 p-10 ">


              <div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                     <div>
                         <label>First Name</label>
                         <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="First name" />
                     </div>


                     <div>
                         <label>Last Name</label>
                         <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Last name" />
                     </div>

                 </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
                      <div>
                          <label>Father Name</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Father name" />
                      </div>


                      <div>
                          <label>Father Professsion</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Father profession" />
                      </div>

                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
                      <div>
                          <label>Mother Name</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Mother name" />
                      </div>


                      <div>
                          <label>Mother Profession</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Mother profession" />
                      </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-10">
                      <div>
                          <label>Permenet Adress</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Permenent Adress" />
                      </div>


                      <div>
                          <label>Present Adress</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Present Adress" />
                      </div>

                  </div>



                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
                      <div>
                          <label>Birth Date</label>
                          <input type="date" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Permenent Adress" />
                      </div>


                      <div>
                          <label>Birth Certificate No</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Birth certificate no" />
                      </div>

                      <div>
                          <label>Gender</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Gender" />
                      </div>

                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
                      <div>
                          <label>Post Offfice</label>
                          <input type="date" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Post Office" />
                      </div>


                      <div>
                          <label>Disctric</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Distric" />
                      </div>

                      <div>
                          <label>Phone Number</label>
                          <input type="text" className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                 aria-describedby="emailHelp123" placeholder="Phone" />
                      </div>

                  </div>

                  <button className="rounded-full bg-indigo-500 text-cyan-50 p-2 mt-5 pl-4 pr-4" type="submit">Submit Application</button>



              </div>

          </div>


            <Foooter/>
            
        </div>
    );
};

export default AdmissionForm;
