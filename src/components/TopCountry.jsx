import React from "react";
import { TopCountryPieChart } from "../chart/TopCountryPieChart";

const TopCountry = () => {
  return (
    <div className=" ">
      <h6 className="px-4 my-3 ">Top Countries</h6>
      <hr className="text-gray-400" />
      <div className=" ">
        <TopCountryPieChart />
      </div>
    </div>
  );
};

export default TopCountry;
