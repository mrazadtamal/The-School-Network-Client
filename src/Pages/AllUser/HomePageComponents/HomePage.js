import React from "react";
import ExcellenceBanner from "./ExcellenceBanner";
import Foooter from "./Foooter";
import NewsAndEvents from "./HomeImages/NewsAndEvents";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import BlogPosts from "./BlogPosts";
import Slider from "./Slider";
import Annoucements from "./Annoucements";

const AlluserHomePage = () => {
    return (
        <div>
            <AllUserNavbar />
            <Slider />

            <BlogPosts />
            <Annoucements />
            <ExcellenceBanner />
            <NewsAndEvents />
            <Foooter />
        </div>
    );
};

export default AlluserHomePage;
