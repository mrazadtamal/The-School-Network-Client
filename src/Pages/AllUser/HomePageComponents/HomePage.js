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
import TopBanner from "./TopBanner";
import NoticeBoard from "./NoticeBoard";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ChildBanner from "./ChildBanner";

const AlluserHomePage = () => {
  return (
    <div>
      <AllUserNavbar />
      <TopBanner/>
      {/* <HomeSlider /> */}
      <TopSections />
      {/* <Annoucements /> */}
      <BlogPosts />
      <ChildBanner/>
      <NoticeBoard />
      <ExcellenceBanner />
      <OurRanking />
      <NewsAndEvents />
      <OurVisitors />
      <Foooter />
      <MessengerCustomerChat pageId="100790272569404" appId="374831157516077" />
    </div>
  );
};

export default AlluserHomePage;
