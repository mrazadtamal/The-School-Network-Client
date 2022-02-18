import React from "react";
import ExcellenceBanner from "./ExcellenceBanner";
import Foooter from "./Foooter";
import NewsAndEvents from "./NewsAndEvents";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import BlogPosts from "./BlogPosts";

import Annoucements from "./Annoucements";
import HomeSlider from "./HomeSlider";
import OurRanking from "./OurRanking";
import TopSections from "./TopSections";
import OurVisitors from "./OurVisitors";
import NoticeBoard from "./NoticeBoard";

const AlluserHomePage = () => {
  return (
    <div>
      <AllUserNavbar />
      <HomeSlider />
      <TopSections />
      <NoticeBoard />
      <BlogPosts />
      <Annoucements />
      <ExcellenceBanner />
      <OurRanking />
      <NewsAndEvents />
      <OurVisitors />
      <Foooter />
    </div>
  );
};

export default AlluserHomePage;
