import React from "react";
import Chart from "react-apexcharts";

const ChartTwo = () => {
  return (
    <div className=" mt-5">
      <Chart
        type="bar"
        width={400}
        height={400}
        series={[
          {
            name: "student1",
            data: [300, 100, 239, 300, 397],
            color: "#0E7490",
          },
          {
            name: "student2",
            data: [500, 445, 200, 399, 186],
            color: "#f2f",
          },
          {
            name: "student3",
            data: [234, 132, 200, 309, 400],
            color: "#25f",
          },
          {
            name: "student4",
            data: [323, 154, 200, 344, 454],
            color: "#2cf",
          },
          {
            name: "student5",
            data: [300, 343, 200, 199, 454],
            color: "#3aa",
          },
        ]}
        options={{
          // colors: ["#0E7490", "#f2f", "#25f", "#2cf", "#3aa"],
          // theme: {
          //   mode: "dark",
          // },
          chart: {
            stacked: true,
          },
        }}
      ></Chart>
    </div>
  );
};

export default ChartTwo;
