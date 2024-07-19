import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const pData = [7.4, 5.3, 7.4, 5.9, 4.8, 6.8];
const uData = [-8, -3, -2, -2.7, -1.8, -2.3];

const xLabels = ["DEC 20", "JAN 21", "FEB 21", "MAR 21", "APR 21", "MAY 21"];

export default function SalesVsRefundChart() {
  return (
    <div className="w-full">
      <BarChart
        width={490}
        height={250}
        series={[
          { data: pData, id: "pvId", stack: "stack1", color: "#6366F2" },
          { data: uData, id: "uvId", stack: "stack1", color: "#C7D2FF" },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: "band",
            disableLine: true,
            tickSize: 0,
          },
        ]}
        yAxis={[
          {
            tickValues: [-8, -5, 0, 5, 8],
            tickSize: 0,
            disableLine: true, // Disable the y-axis line
            valueFormatter: (value) => `$${Math.abs(value)}K`,
          },
        ]}
        grid={{ horizontal: true, vertical: false }} // Show horizontal grid lines
        barWidth={0.5}
        margin={{ bottom: 30, left: 50, right: 0, top: 30 }}
        responsive={true}
      />
    </div>
  );
}
