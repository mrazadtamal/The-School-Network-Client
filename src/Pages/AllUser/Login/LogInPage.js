import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../Shared/Authentication/Authentication";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";
import Swal from "sweetalert2";
const LogInPage = () => {
    const [logindata, setLogindata] = useState({});
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const { LoginUser, setUser } = useFirebase();
    const [loader, setLoader] = useState(false);
    const OnBlurHandler = (e) => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

    const newdata = { ...logindata };
    newdata[fieldname] = fieldvalue;
    setLogindata(newdata)
  };

  const onSubmitHandler = (e) => {
    setLoader(true);
    fetch(
      `http://localhost:5000/checkUser?email=${logindata.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.userrole === "Principal" && role === "Principal") {
          LoginUser(logindata.email, logindata.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
              setUser(user);
              navigate("/PrincipalDashboard");
              setLoader(false);
            })
            .catch((error) => {
              console.log("from login user", error.message);
              Swal.fire("Error!", "User Password/Email is Wrong", "error");
            });
        e.preventDefault();
    };
    return (
        <div>
            <AllUserNavbar />
            <div className="bg-[url('https://i.ibb.co/8dRgbRP/LoginBg.jpg')] bg-cover ">
                <div class="min-h-screen flex flex-col items-center justify-center ">
                    <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                        <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 pb-7">
                            Login To Your Account
                        </div>
                        <select
                            name="role"
                            onBlur={(e) => setRole(e.target.value)}
                        >
                            <option value="">Choose Your Role</option>
                            <option value="Principal">Principal</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Student">Student</option>
                        </select>

                        <div class="mt-10">
                            <form action="#">
                                <div class="flex flex-col mb-6">
                                    <label
                                        for="email"
                                        class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                    >
                                        E-Mail Address:
                                    </label>
                                    <div class="relative">
                                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                            <svg
                                                class="h-6 w-6"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </div>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            onBlur={OnBlurHandler}
                                            class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                            placeholder="E-Mail Address"
                                        />
                                    </div>
                                </div>
                                <div class="flex flex-col mb-6">
                                    <label
                                        for="password"
                                        class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                                    >
                                        Password:
                                    </label>
                                    <div class="relative">
                                        <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                            <span>
                                                <svg
                                                    class="h-6 w-6"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </span>
                                        </div>

                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            onBlur={OnBlurHandler}
                                            class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div class="flex items-center mb-6 -mt-4">
                                    <div class="flex ml-auto">
                                        <a
                                            href="#"
                                            class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                                        >
                                            Forgot Your Password?
                                        </a>
                                    </div>
                                </div>

                                <div class="flex w-full">
                                    {loader ? (
                                        <p className="text-blue-700 font-bold text-xl">
                                            Loading......
                                        </p>
                                    ) : (
                                        <button
                                            type="submit"
                                            onClick={onSubmitHandler}
                                            class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                                        >
                                            <span class="mr-2 uppercase">
                                                Login
                                            </span>
                                            <span>
                                                <svg
                                                    class="h-6 w-6"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Foooter />
        </div>
    );
};

export default LogInPage;