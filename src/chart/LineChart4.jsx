import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["1980", 20, 35],
  ["1981", 8, 50],
  ["1982", 5, 20],
  ["1983", 35, 18],
  ["1984", 5, 15],
  ["1985", 13, 22],
  ["1986", 5, 20],
  ["1987", 10, 12],
  ["1988", 1, 18],

  ["1989", 1, 10],
  ["1990", 5, 23],
  ["1991", 8, 14],
  ["1992", 27, 23],
  ["1993", 5, 10],
  ["1994", 10, 13],
  ["1995", 7, 12],
  ["1996", 6, 18],
  ["1997", 25, 15],
  ["1998", 15, 30],

  ["1999", 8, 22],
  ["2000", 22, 12],
  ["2001", 8, 27],
  ["2002", 10, 18],
  ["2003", 5, 23],
  ["2004", 5, 21],
  ["2005", 5, 22],
  ["2006", 5, 8],
  ["2007", 6, 10],

  ["2008", 8, 5],
  ["2009", 9, 15],
];

export const options = {
  hAxis: {
    title: "",
    titleTextStyle: { color: "#333" },
    gridlines: { color: "transparent" },
    textPosition: "none",
  },
  vAxis: {
    ticks: [0, 10, 25, 50, 75], // Set custom ticks for vertical axis
    format: "$", // Format ticks as currency
    viewWindow: {
      min: 0,
      max: 75,
    },
    gridlines: {
      count: 6, // Ensure 6 grid lines to cover the range from 0 to 75 (0, 10, 25, 50, 75)
    },
  },
  chartArea: { width: "90%", height: "65%" },
  backgroundColor: "transparent", // Sets background to transparent
  series: {
    0: { color: "gray", lineWidth: 1, areaOpacity: 0 }, // Style for the first series (Sales)
    1: { areaOpacity: 0.1, color: "blue" }, // Style for the second series (Expenses)
  },
  legend: { position: "none" }, // Remove the legend
};

const LineChart4 = () => {
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

export default LineChart4;
