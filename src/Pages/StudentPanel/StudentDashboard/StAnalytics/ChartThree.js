import React from "react";
import Chart from "react-apexcharts";

const ChartThree = () => {
  return (
    <div className=" mt-5">
      <Chart
        type="line"
        width={500}
        height={400}
        series={[
          {
            name: "January",
            data: [31, 22, 9],

            // color: "#0E7490",
          },
          {
            name: "February",
            data: [30, 20, 10],
            // color: "#f2f",
          },
          {
            name: "March",
            data: [31, 25, 9],
            // color: "#25f",
          },
          {
            name: "April",
            data: [31, 22, 9],
            // color: "#2cf",
          },
          {
            name: "June",
            data: [31, 22, 9],
            // color: "#34a",
          },
          {
            name: "July",
            data: [31, 10, 21],
            // color: "#2ca",
          },
          {
            name: "August",
            data: [31, 22, 9],
            // color: "#faf",
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

export default ChartThree;
