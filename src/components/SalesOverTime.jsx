import React from "react";
import SalesOverTimeChart from "../chart/SalesOverTimeChart";

const SalesOverTime = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm">
      <h6 className="px-4 py-3 items-center flex">
        Sales Over Time (all stores)
      </h6>
      <hr className="text-gray-400" />
      <div className="flex justify-between px-6 pt-4">
        <span className="text-3xl font-bold relative">
          1.482
          <sup className="absolute bg-[#F59E0B] px-1 text-xs text-white rounded-lg ">
            -22%
          </sup>
        </span>

        <div className="flex gap-x-2">
          <label className="flex items-center text-gray-500">
            <input
              type="radio"
              name=""
              id=""
              className="custom-radio-input second-input"
            />{" "}
            Current
          </label>
          <label className="flex items-center text-gray-500">
            <input type="radio" name="" id="" className="custom-radio-input " />
            Previous
          </label>
        </div>
      </div>
      <div className="pl-5">
        <SalesOverTimeChart />
      </div>
      <div className="flex justify-between pl-[3vw] pr-[2vw] mt-[-35px] text-sm text-gray-500">
        <p>WED20</p>
        <p>TODAY</p>
      </div>
    </div>
  );
};

export default SalesOverTime;
