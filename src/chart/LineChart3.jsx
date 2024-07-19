import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 600, 500],
  ["2014", 500, 400],
  ["2014", 400, 500],
  ["2015", 400, 400],
  ["2016", 410, 350],
  ["2017", 420, 400],
  ["2018", 410, 350],

  ["2019", 350, 350],
  ["2020", 350, 320],
  ["2021", 400, 310],
  ["2022", 350, 340],
  ["2023", 400, 300],
  ["2024", 500, 340],
  ["2025", 400, 320],

  ["2026", 280, 300],
  ["2026", 270, 330],
  ["2026", 360, 330],
  ["2026", 340, 400],
  ["2026", 300, 500],
  ["2026", 330, 400],

  ["2026", 420, 400],
  ["2026", 410, 350],
  ["2026", 400, 400],
  ["2026", 450, 380],
  ["2026", 480, 400],
  ["2026", 500, 550],

  ["2026", 450, 650],
  ["2026", 500, 450],
  ["2026", 600, 500],
];

export const options = {
  hAxis: {
    title: "",
    titleTextStyle: { color: "#333" },
    gridlines: { color: "transparent" },
    textPosition: "none", // Removes labels from the x-axis
  },
  vAxis: {
    title: "",
    minValue: 0,
    gridlines: { color: "transparent" },
    baselineColor: "transparent", // Removes the bottom line color
    textPosition: "none", // Removes labels from the y-axis
  },
  chartArea: { width: "100%", height: "100%" },
  backgroundColor: "transparent", // Sets background to transparent
  series: {
    0: { color: "gray", lineWidth: 1, areaOpacity: 0 }, // Style for the first series (Sales)
    1: { areaOpacity: 0.1, color: "blue" }, // Style for the second series (Expenses)
  },
};

const LineChart3 = () => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="18vh"
      data={data}
      options={options}
    />
  );
};

export default LineChart3;
