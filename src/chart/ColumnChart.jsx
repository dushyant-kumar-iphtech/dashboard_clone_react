import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Month", "Value 1", "Value 2"],
  ["DEC20", 500, 4500],
  ["JUN21", 3500, 1500],
  ["FEB21", 500, 7000],
  ["MAR21", 1200, 4000],
  ["APR21", 1900, 5400],
  ["MAY21", 1800, 4500],
];

// Custom formatter function for ticks
const formatTick = (value) => {
  if (value === 0) return "$0";
  if (value >= 1000) return "$" + value / 1000 + "K";
  return "$" + value.toString();
};

// Generate ticks with formatted labels
const ticks = [0, 1000, 2000, 5000, 8000].map((tick) => ({
  v: tick,
  f: formatTick(tick),
}));

const options = {
  seriesType: "bars",
  series: {
    0: { color: "#37bdf8" }, // Color for the first series (Value 1)
    1: { color: "#6366F1" }, // Color for the second series (Value 2)
  },
  legend: { position: "none" }, // Remove the legend
  vAxis: {
    ticks: ticks, // Set custom ticks with formatted labels
  },
  chartArea: { width: "90%", height: "65%" },
  bar: { groupWidth: "35%" },
  annotations: {
    alwaysOutside: true,
  },
};

const ColumnChart = () => {
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
};

export default ColumnChart;
