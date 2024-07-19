import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Value"],
  ["United States", 11],
  ["Italy", 12],
  ["Other", 20],
];

export const options = {
  title: "",
  pieHole: 0.8,
  is3D: false,
  legend: {
    position: "none", // Remove default legend
  },
  slices: {
    0: { color: "#4F46E5" }, // United States
    1: { color: "#60A5FA" }, // Italy
    2: { color: "#312E81" }, // Other
  },
  // Remove labels from the pie chart
  pieSliceText: "none",
  chartArea: { top: 20, botton: 0 },
};

export function TopCountryPieChart() {
  return (
    <div className="relative">
      <Chart
        chartType="PieChart"
        width="100%"
        height="36vh"
        data={data}
        options={options}
      />
      <div className="flex justify-center absolute top-[32vh] w-[90%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-x-2">
        {data.slice(1).map((item, index) => (
          <div
            key={index}
            className="bg-white  border-1 shadow-sm px-2 py-1 gap-x-1  rounded-md flex items-center justify-center"
          >
            <div
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: options.slices[index].color }}
            ></div>
            <span className="text-sm">{item[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
