import React from "react";
import { BsThreeDots } from "react-icons/bs";
import LineChart3 from "../chart/LineChart3";

const AcmeProfessional = () => {
  return (
    <div className="flex flex-col rounded-sm shadow-sm px-3 bg-white py-2">
      <div className="flex justify-between py-2">
        <img src="https://preview.cruip.com/mosaic/images/icon-03.svg" alt="" />
        <BsThreeDots />
      </div>
      <div className="flex flex-col">
        <span className="text-md font-bold">Acme Professional</span>
        <span className="text-sm text-gray-500">SALES</span>
        <span className="relative  text-2xl font-bold">
          $9,962
          <sup className="absolute  bg-[#10B981] text-xs px-1 text-white rounded-lg ">
            +29%
          </sup>
        </span>
        <div>
          <LineChart3 />
        </div>
      </div>
    </div>
  );
};

export default AcmeProfessional;
