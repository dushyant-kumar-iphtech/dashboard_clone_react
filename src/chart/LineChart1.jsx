import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["1980", 600, 800],
  ["1981", 600, 650],
  ["1982", 600, 660],
  ["1983", 400, 500],
  ["1984", 400, 500],
  ["1985", 350, 500],
  ["1986", 350, 360],
  ["1987", 300, 360],
  ["1988", 350, 500],
  ["1989", 350, 370],
  ["1990", 300, 560],
  ["1991", 350, 750],
  ["1992", 300, 560],
  ["1993", 350, 380],
  ["1994", 390, 350],

  ["1995", 430, 380],
  ["1996", 420, 370],
  ["1997", 450, 360],
  ["1998", 440, 360],
  ["1999", 430, 350],
  ["2000", 400, 400],
  ["2001", 380, 500],
  ["2002", 380, 550],
  ["2003", 380, 530],
  ["2004", 380, 510],
  ["2005", 380, 500],
  ["2006", 380, 480],
  ["2007", 380, 470],
  ["2008", 400, 600],
  ["2009", 550, 700],
  ["2010", 700, 800],
  ["2011", 800, 700],
  ["2012", 900, 720],
  ["2013", 850, 740],
  ["2014", 800, 750],
];

export const options = {
  hAxis: {
    title: "",
    titleTextStyle: { color: "#333" },
    gridlines: { color: "transparent" },
    // textPosition: "none", // Removes labels from the x-axis
  },
  vAxis: {
    title: "",
    minValue: 0,
    gridlines: { color: "transparent" },
    baselineColor: "transparent", // Removes the bottom line color
    //textPosition: "none", // Removes labels from the y-axis
  },
  chartArea: { width: "100%", height: "100%" },
  backgroundColor: "transparent", // Sets background to transparent
  series: {
    0: { color: "gray", lineWidth: 1, areaOpacity: 0 }, // Style for the first series (Sales)
    1: { areaOpacity: 0.1, color: "blue" }, // Style for the second series (Expenses)
  },
};

const LineChart1 = () => {
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

export default LineChart1;
