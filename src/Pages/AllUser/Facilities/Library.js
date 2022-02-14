import React from 'react';
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const Library = () => {
    return (
        <div>
            <AllUserNavbar/>

            <h2 className="text-3xl text-center p-10">We Have a Library. Where student can read and by Reading they can improve their knowledge
            </h2>
            <img src="https://i.ibb.co/1ZYVmGN/alfons-morales-YLSwj-Sy7stw-unsplash.jpg" alt="canteenimage" className="" />


            <h2 className="text-3xl text-center p-10">Students can study there and borrow book from library
            </h2>
            <img src="https://i.ibb.co/LxFqMQL/anita-jankovic-162ppyjclx-M-unsplash.jpg" alt="canteenimage" className="w-1/2 mx-auto h-2/4" />




            <Foooter/>
            
        </div>
    );
};

export default Library;
