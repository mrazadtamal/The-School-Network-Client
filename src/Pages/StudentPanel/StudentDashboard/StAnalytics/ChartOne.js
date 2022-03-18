import React from "react";
import Chart from "react-apexcharts";

const ChartOne = () => {
  return (
    <div className=" ml-5 mt-10">
      <Chart
        type="pie"
        width={450}
        height={350}
        series={[300, 100, 355, 200, 400]}
        options={{
          title: {
            text: "Student Data",
          },
        }}
      ></Chart>
    </div>
  );
};

export default ChartOne;
