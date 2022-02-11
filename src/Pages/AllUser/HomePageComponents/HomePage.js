import React from "react";
import ExcellenceBanner from "./ExcellenceBanner";
import Foooter from "./Foooter";
import NewsAndEvents from "./HomeImages/NewsAndEvents";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import BlogPosts from "./BlogPosts";

import Annoucements from "./Annoucements";
import HomeSlider from "./HomeSlider";

const AlluserHomePage = () => {
    return (
        <div>
            <AllUserNavbar />
            <HomeSlider />

            <BlogPosts />
            <Annoucements />
            <ExcellenceBanner />
            <NewsAndEvents />
            <Foooter />

        </div>
    );
};

export default AlluserHomePage;
