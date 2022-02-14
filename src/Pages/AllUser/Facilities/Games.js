import React from 'react';
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import Foooter from "../HomePageComponents/Foooter";

const Games = () => {
    return (
        <div>
            <AllUserNavbar/>
            <h2 className="text-3xl text-center p-10">We have a big ground for student where they can play outdoor games </h2>
            <img src="https://i.ibb.co/3Mvbs9S/jonathan-petersson-ARU18-Gp-F6-QQ-unsplash.jpg" alt="canteenimage" className=" mx-auto h-1/4" />


            <h2 className="text-3xl text-center p-10">They can aslo play indoor games</h2>
           <div className="lg:flex">
               <img src="https://i.ibb.co/KKk0kRQ/neonbrand-bj-Hl-X7-UCge0-unsplash.jpg" alt="canteenimage" className=" mx-auto w-1/2 h-1/4" />
               <img src="https://i.ibb.co/wQ3X373/isaiah-rustad-b-WYAi-Q9jw-Yc-unsplash.jpg" alt="canteenimage" className=" mx-auto w-1/2 h-1/4 lg:pt-0 sm:pt-10" />

           </div>


            <Foooter/>
            
        </div>
    );
};

export default Games;
