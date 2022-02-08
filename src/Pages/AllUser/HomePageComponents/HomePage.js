import React from 'react';
import ExcellenceBanner from "./ExcellenceBanner";
import Foooter from "./Foooter";
import NewsAndEvents from "./HomeImages/NewsAndEvents";

const HomePage = () => {
    return (
        <div>

            <ExcellenceBanner/>
            <NewsAndEvents/>

            <Foooter/>
        </div>
    );
};

export default HomePage;
