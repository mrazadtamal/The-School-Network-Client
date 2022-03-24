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
  const TotalDaysArr = []
  const presentArr = []
  const absentArr = []
  const monthArr = []
  const TotalDays = attendanceCollections?.map(a => TotalDaysArr.push(a?.totalClass))
  const pDays = attendanceCollections?.map(a => presentArr.push(a?.presentDays))

  const aDays = attendanceCollections?.map(a => absentArr.push(a?.absentDays))
  const m = attendanceCollections?.map(a => monthArr.push(a?.month))

  // const [chart, setChart] = useState({});

  // const month = attendanceCollections.filter((item) => item.month);
  // console.log("month", month);

  const data = {
    series: [
      {
        name: "Total Days",
        data: [...TotalDaysArr],
      },
      {
        name: "Present",
        data: [...presentArr],
      },
      {
        name: "Absent",
        data: [...absentArr],
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
        categories: [...monthArr],
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
        width={900}
      />
    </>
  );
};

export default ChartTwo;
