import React from "react";
import LineChart4 from "../chart/LineChart4";

const AVGOrderValue = () => {
  return (
    <div>
      <h6 className="px-4 py-3  ">AVG Order Value</h6>
      <hr className="text-gray-400" />
      <div className=" flex justify-between px-5 py-3">
        <span className="relative  text-2xl font-bold">
          $72
          <sup className="absolute  bg-[#10B981] text-xs px-1 text-white rounded-lg ">
            +34%
          </sup>
        </span>
        <div className="flex gap-x-2 pr-4">
          <label className="flex items-center text-gray-500">
            <input type="radio" name="" id="" className="custom-radio-input" />{" "}
            Current
          </label>
          <label className="flex items-center text-gray-500">
            <input
              type="radio"
              name=""
              id=""
              className="custom-radio-input second-input"
            />
            Previous
          </label>
        </div>
      </div>
      <div className="px-3">
        <LineChart4 />
      </div>
      <div className="flex justify-between pl-[2.5vw] pr-[2.5vw] mt-[-35px] text-sm text-gray-500">
        <p>WED20</p>
        <p>TODAY</p>
      </div>
    </div>
  );
};

export default AVGOrderValue;
