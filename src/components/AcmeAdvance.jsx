import React from "react";
import { BsThreeDots } from "react-icons/bs";
import LineChart2 from "../chart/LineChart2";

const AcmeAdvance = () => {
  return (
    <div>
      <div className="flex flex-col rounded-sm shadow-sm  px-3 bg-white py-2">
        <div className="flex justify-between py-2">
          <img
            src="https://preview.cruip.com/mosaic/images/icon-02.svg"
            alt=""
          />
          <BsThreeDots />
        </div>
        <div className="flex flex-col">
          <span className="text-md font-bold">Acme Advance</span>
          <span className="text-sm text-gray-500">SALES</span>
          <span className="text-2xl font-bold relative">
            $14,489
            <sup className="absolute bg-[#F59E0B] px-1 text-xs text-white rounded-lg ">
              -14%
            </sup>
          </span>
          <div>
            <LineChart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcmeAdvance;
