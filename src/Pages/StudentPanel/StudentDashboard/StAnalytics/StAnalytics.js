import React from "react";
import ChartOne from "./ChartOne";
import ChartThree from "./ChartThree";
import ChartTwo from "./ChartTwo";

const StAnalytics = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid xl:grid-cols-2 gap-10 border-gray-200 m-auto mt-10 md:grid-cols-2 grid-cols-1">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </div>
  );
};

export default StAnalytics;
