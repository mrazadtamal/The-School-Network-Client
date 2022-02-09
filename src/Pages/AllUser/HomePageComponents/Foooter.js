import React from "react";
import footerlogo from "../HomePageComponents/HomeImages/logo.svg";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const MyComponent = () => {
    return (
        <div className="bg-black pt-5 pb-5 mt-8 text-white ">
            <div className="container mx-auto  flex ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="lg:text-left sm:text-center ">
                        <img
                            src="https://i.ibb.co/1MV919j/Untitled-Design-3.png"
                            className="p-3 "
                            alt=""
                        />
                    </div>

                    <div className="mt-12 md:mt-0 lg:text-left sm:text-center">
                        <h3 className="text-white pt-5">
                            St. Clare College of Caloocan
                        </h3>
                        <p className="text-white pt-3 font-light">
                            Zabarte Road, Camarin, Caloocan City
                            <br />
                            Metro Manila, Philippines 1400
                        </p>
                        <p className="pt-2">
                            (02) 232 4483
                            <br />
                            (02) 282 0651
                            <br />
                            0998 990 1169
                            <br />
                        </p>
                        <h2 className="pt-2">Email us at</h2>
                        <p>stclarecollege@yahoo.com</p>
                    </div>

                    <div className="mt-12 md:mt-0 lg:text-left sm:text-center">
                        <h3 className="text-white pt-5">SITE LINKS</h3>
                        <p className="text-white pt-3 font-light">
                            Home
                            <br />
                            About
                        </p>
                        <p className="font-light">
                            History
                            <br />
                            Features
                            <br />
                            Programs
                            <br />
                        </p>
                        <h2 className="pt-2">FOLLOW OUR SOCIAL MEDIA</h2>
                        <div className="flex space-x-3 mt-2">
                            <BsFacebook />
                            <BsInstagram />
                            <BsYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
