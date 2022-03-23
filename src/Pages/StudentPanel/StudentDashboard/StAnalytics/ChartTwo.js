import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactApexChart from "react-apexcharts";
import useFirebase from "./../../../Shared/Authentication/Authentication";
import { studentAttendanceCollections } from "../../../../SchoolRedux/StudentSlice";

const ChartTwo = () => {
  const { user } = useFirebase();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentAttendanceCollections(user.email));
  }, [user.email, dispatch]);

  const attendanceCollections = useSelector(
    (state) => state.studentStore.attendance
  );

  console.log(attendanceCollections);

  // const [chart, setChart] = useState({});

  // const month = attendanceCollections.filter((item) => item.month);
  // console.log("month", month);

  const data = {
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
  };
  return (
    <>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="bar"
        height={450}
        width={500}
      />
    </>
  );
};

export default ChartTwo;
