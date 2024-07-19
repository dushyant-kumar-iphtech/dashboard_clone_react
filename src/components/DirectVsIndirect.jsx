import React from "react";
import ColumnChart from "../chart/ColumnChart";

const DirectVsIndirect = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm py-2">
      <h6 className="px-4 py-3  ">Direct VS Indirect</h6>
      <hr className="text-gray-400" />
      <div className=" flex gap-x-4 pl-4 py-3">
        <label className="custom-radio">
          <input
            type="radio"
            name="directvsindirect"
            id="direct"
            className="custom-radio-input"
          />
          <span className="text-2xl font-bold">$8.25K</span> Direct
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="directvsindirect"
            id="indirect"
            className="custom-radio-input second-input"
          />
          <span className="text-2xl font-bold">$27.7K</span> Indirect
        </label>
      </div>
      <div className="px-3">
        <ColumnChart />
      </div>
    </div>
  );
};

export default DirectVsIndirect;
