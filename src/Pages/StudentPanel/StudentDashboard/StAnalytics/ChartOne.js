import React from "react";
import Chart from "react-apexcharts";

const ChartOne = () => {
  return (
    <div className=" ml-5 mt-10">
      <Chart
        type="pie"
        width={400}
        height={400}
        series={[300, 100, 239, 300, 397]}
        options={{
          title: {
            text: "pie chart",
          },
        }}
      ></Chart>
    </div>
  );
};

export default ChartOne;
