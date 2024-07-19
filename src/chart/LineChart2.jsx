import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 800, 600],
  ["2014", 700, 600],
  ["2014", 600, 600],
  ["2015", 550, 500],
  ["2016", 550, 400],
  ["2017", 530, 450],
  ["2018", 520, 500],
  ["2019", 510, 480],
  ["2020", 500, 450],

  ["2021", 500, 450],
  ["2022", 500, 450],
  ["2023", 550, 450],
  ["2024", 500, 400],
  ["2025", 500, 440],
  ["2026", 600, 430],
  ["2026", 480, 400],
  ["2026", 480, 480],

  ["2026", 480, 480],
  ["2026", 460, 530],
  ["2026", 450, 510],
  ["2026", 440, 510],
  ["2026", 410, 480],
  ["2026", 390, 450],
  ["2026", 450, 430],

  ["2026", 480, 420],
  ["2026", 450, 500],
  ["2026", 420, 600],
  ["2026", 480, 650],
  ["2026", 500, 700],
  ["2026", 600, 690],
  ["2026", 650, 650],
  ["2026", 600, 630],
  ["2026", 550, 700],
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

const LineChart2 = () => {
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

export default LineChart2;
