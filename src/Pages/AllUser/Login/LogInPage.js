import React from 'react';
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const LogInPage = () => {
    return (
        <div>
            <AllUserNavbar/>

            <div className="bg-[url('https://i.ibb.co/L9hRyK9/back-school-background-with-school-supplies-copy-space.jpg')] bg-cover ">
                <div className="pb-80  p-50 mx-auto pt-36 container">


              
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col w-1/2 pt-5 mx-auto">
                    <div className="mx-auto pt-5 pb-5">
                        <select>
                            <option>Principal</option>
                            <option>Teacher</option>
                            <option>Student</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"/>

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-cyan-500 hover:bg-cyan-900 text-blue-50  font-bold py-2 px-4 rounded-full" type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <Foooter/>
        </div>
    );
};

export default LogInPage;

