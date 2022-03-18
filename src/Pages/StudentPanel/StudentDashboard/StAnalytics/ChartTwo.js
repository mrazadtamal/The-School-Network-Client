import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartTwo = () => {
  const [chart, setChart] = useState({
    series: [
      {
        name: "Total Days",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55],
      },
      {
        name: "Present",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 70],
      },
      {
        name: "Absent",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 54],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jun",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "Student Data",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        // y: {
        //   formatter: function (val) {
        //     return "$ " + val + " thousands";
        //   },
        // },
      },
    },
  });

  return (
    <>
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="bar"
        height={450}
        width={500}
      />
    </>
  );
};

export default ChartTwo;
