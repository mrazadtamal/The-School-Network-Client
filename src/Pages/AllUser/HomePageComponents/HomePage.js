import React from "react";
import ExcellenceBanner from "./ExcellenceBanner";
import Foooter from "./Foooter";
import NewsAndEvents from "./HomeImages/NewsAndEvents";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";

const AlluserHomePage = () => {
  return (
    <div>
      <AllUserNavbar />
      <ExcellenceBanner />
      <NewsAndEvents />
      <Foooter />
    </div>
  );
};

export default AlluserHomePage;
