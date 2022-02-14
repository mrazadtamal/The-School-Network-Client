import React from 'react';
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const Canteen = () => {
    return (
        <div>
            <AllUserNavbar/>
            <div className="container mx-auto">
                <h2 className="text-3xl text-center p-10">The Student Boy's Lounge is a comfortable area open to students for gathering, studying, and relaxing between classes. The Lounge is equipped with comfortable furniture and TV.
                </h2>
                <img src="https://i.ibb.co/WFQ8p0v/toa-heftiba-6b-Kp-HAun4d8-unsplash.jpg" className="sm:w-1/2 h-2/4 lg:w-1/2 mx-auto" alt="canteenimage" />


                <h2 className="text-3xl text-center p-10">Best And Healthy Food For students at cheap price </h2>
                <img src=" https://i.ibb.co/q1rzZdj/jonathan-borba-5-E0d3lfo-C1w-unsplash.jpg" alt="canteenimage" className="w-1/4 mx-auto h-2/4" />


                <h2 className="text-3xl text-center p-10">A huge sitting area for students</h2>
                <img src="https://i.ibb.co/yn5v8jr/alexander-kovacs-Tiv-EEYzzhik-unsplash.jpg" alt="canteenimage" className="w-1/2 mx-auto h-2/4" />





            </div>


            <Foooter/>

        </div>
    );
};

export default Canteen;
