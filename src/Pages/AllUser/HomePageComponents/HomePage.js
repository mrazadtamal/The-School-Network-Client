import React from "react";
import ExcellenceBanner from "./ExcellenceBanner";
import Foooter from "./Foooter";
import NewsAndEvents from "./HomeImages/NewsAndEvents";
import AllUserNavbar from "../AllUserNavbar/AllUserNavbar";
import StudentMyDocuments from "../../StudentPanel/StudentDashboard/StudentMyDocuments/StudentMyDocuments";

const AlluserHomePage = () => {
  return (
    <div>
      <AllUserNavbar />
      <ExcellenceBanner />
      <NewsAndEvents />
      <Foooter />
      <StudentMyDocuments />
    </div>
  );
};

export default AlluserHomePage;
