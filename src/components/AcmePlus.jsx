import React from "react";
import LineChart1 from "../chart/LineChart1";
import { BsThreeDots } from "react-icons/bs";

const AcmePlus = () => {
  return (
    <div className="flex flex-col shadow-sm rounded-sm bg-white px-3 py-2">
      <div className="flex justify-between py-2">
        <img src="https://preview.cruip.com/mosaic/images/icon-01.svg" alt="" />
        <BsThreeDots />
      </div>
      <div className="flex flex-col">
        <span className="text-md font-bold">Acme Plus</span>
        <span className="text-sm text-gray-500">SALES</span>
        <span className="text-2xl font-bold relative">
          $24,780
          <sup className="absolute bg-[#10B981]  px-1 text-xs text-white rounded-lg ">
            +49%
          </sup>
        </span>
        <div>
          <LineChart1 />
        </div>
      </div>
    </div>
  );
};

export default AcmePlus;
