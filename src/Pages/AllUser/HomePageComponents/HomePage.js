import React from "react";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import ExcellenceBanner from "./ExcellenceBanner";
import Foooter from "./Foooter";
import NewsAndEvents from "./HomeImages/NewsAndEvents";

const HomePage = () => {
  return (
    <div>
      <AllUserNavbar />
      <ExcellenceBanner />
      <NewsAndEvents />

      <Foooter />
    </div>
  );
};

export default HomePage;
