import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Earn"],
  ["Dec 20", 450, 200, 80],
  ["Jun 21", 300, 400, 60],
  ["Feb 21", 100, 400, 80],
  ["Mar 21", 50, 90, 70],
  ["Apr 21", 900, 100, 100],
  ["May 21", 50, 200, 100],
  ["Jun 21", 250, 150, 400],
  ["Jul 21", 50, 150, 400],
  ["Aug 21", 200, 80, 300],
  ["Sep 21", 20, 100, 300],
  ["Oct 21", 20, 20, 300],
  ["Nov 21", 50, 80, 300],
  ["Dec 21", 20, 530, 300],
  ["Dec 21", 80, 500, 400],
  ["Dec 21", 20, 750, 350],
  ["Dec 21", 750, 500, 200],
  ["Dec 21", 20, 250, 350],
  ["Dec 21", 100, 300, 300],
  ["Dec 21", 50, 400, 200],
  ["Dec 21", 100, 500, 250],
  ["Dec 21", 75, 250, 400],
  ["Dec 21", 75, 150, 600],
  ["Dec 21", 500, 150, 800],
  ["Dec 21", 200, 150, 700],
  ["Dec 21", 80, 150, 600],
  ["Dec 21", 400, 600, 900],
  ["Dec 21", 100, 700, 900],
  ["Dec 21", 50, 400, 1200],
  ["Dec 21", 50, 500, 1250],
  ["Dec 21", 80, 400, 1300],
  ["Dec 21", 50, 800, 1200],
];

export const options = {
  hAxis: {
    title: "",
    titleTextStyle: { color: "#333" },
    gridlines: { color: "transparent" },
    textPosition: "none",
  },
  vAxis: {
    ticks: [0, 100, 500, 1000, 1500], // Set custom ticks for vertical axis
    format: "short", // Format ticks as currency
  },
  chartArea: { width: "89%", height: "65%" },
  backgroundColor: "transparent", // Sets background to transparent
  series: {
    // Style for the first series (Sales)
    0: { color: "#72efdd", lineWidth: 2, areaOpacity: 0 }, // Style for the second series (Expenses)
    1: { color: "#10B981", lineWidth: 2, areaOpacity: 0 }, // Style for the second series (Expenses)
    2: { color: "#8184F4", lineWidth: 2, areaOpacity: 0 }, // Style for the second series (Expenses)
  },
  legend: { position: "none" }, // Remove the legend
};

const SalesOverTimeChart = () => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
};

export default SalesOverTimeChart;
