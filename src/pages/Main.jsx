import React from "react";

import { IoAddOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import DatePicker from "../components/DatePicker";
import AcmePlus from "../components/AcmePlus";
import AcmeAdvance from "../components/AcmeAdvance";
import AcmeProfessional from "../components/AcmeProfessional";
import { BsThreeDots } from "react-icons/bs";

import DirectVsIndirect from "../components/DirectVsIndirect";

import AVGOrderValue from "../components/AVGOrderValue";
import TopCountry from "../components/TopCountry";
import TopChannel from "../components/TopChannel";
import SalesOverTime from "../components/SalesOverTime";
import SalesVsRefund from "../components/SalesVsRefund";
import RecentActivity from "../components/RecentActivity";
import IncomeExpress from "../components/IncomeExpress";
import "../css/chartCss.css";

const Main = () => {
  return (
    <div className="w-[95%] h-full mx-auto gap-y-4">
      <div className="w-full bg-[#C7D2FE] my-4 py-8 pl-6 rounded-sm ">
        <p className="font-bold text-lg md:text-2xl lg:text-3xl flex">
          Good afternoon, Acme Inc.
          <span className="flex items-center ">
            <img
              src="https://static-00.iconduck.com/assets.00/waving-hand-sign-emoji-2048x1980-s2qlps2b.png"
              className="w-6 h-6 ml-1"
              alt=""
            />
            {/*<PiHandWavingFill className="text-[#FFC83D]  " />*/}
          </span>
        </p>
        <p className="text-gray-500 text-sm md:text-md">
          Here is what’s happening with your projects today:
        </p>
      </div>
      {/**for image and calender container */}
      <div className="w-full flex md:flex-row md:justify-between  ">
        <div className="md:flex gap-[-5px] hidden sm:block">
          <img
            className="hiddle sm:block w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full relative z-10"
            src="https://preview.cruip.com/mosaic/images/user-36-01.jpg"
            alt=""
          />
          <img
            className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full -ml-3 relative z-20"
            src="https://preview.cruip.com/mosaic/images/user-36-02.jpg"
            alt=""
          />
          <img
            className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full -ml-3 relative z-30"
            src="https://preview.cruip.com/mosaic/images/user-36-03.jpg"
            alt=""
          />
          <img
            className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full -ml-3 relative z-40"
            src="https://preview.cruip.com/mosaic/images/user-36-04.jpg"
            alt=""
          />
          <IoAddOutline className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 relative -ml-3 z-50 bg-white rounded-full text-blue-800 " />
        </div>
        <div className="flex  gap-x-3 ">
          <button className="bg-white  px-1 shadow-sm rounded-sm">
            <IoFilterOutline className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-5" />
          </button>
          <DatePicker />
          <button className="flex px-2 items-center bg-[#4F46E5] text-white rounded-md">
            <IoAddOutline className="w-5 h-5" />
            Add View
          </button>
        </div>
      </div>
      {/**For graph chart container */}
      <div className="grid grid-cols-3  gap-x-7 my-4">
        {/**First graph */}
        <div>
          <AcmePlus />
        </div>
        {/**Second Graph */}
        <div>
          <AcmeAdvance />
        </div>
        {/**Third Graph */}
        <div>
          <AcmeProfessional />
        </div>
      </div>
      {/**Second chart component */}

      <div className="grid grid-cols-2 gap-x-7 my-4">
        {/**Column Chart */}
        <div>
          <DirectVsIndirect />
        </div>
        {/**Line chart */}
        <div className="bg-white rounded-sm shadow-sm py-2 ">
          <AVGOrderValue />
        </div>
      </div>
      {/**Third chart components */}
      <div className="grid grid-cols-3 gap-x-7 my-4">
        <div className="col-span-1 bg-white rounded-sm shadow-sm">
          <TopCountry />
        </div>
        <div className="col-span-2 bg-white rounded-sm shadow-sm">
          <TopChannel />
        </div>
      </div>
      {/**Fourth Chart components */}
      <div className="grid grid-cols-2 gap-x-7 my-4">
        <div>
          <SalesOverTime />
        </div>
        <div>
          <SalesVsRefund />
        </div>
      </div>
      {/**Recently Activity and Income/Express */}
      <div className="grid grid-cols-2 gap-x-7">
        {/**Recently Activity */}
        <div className="h-full">
          <RecentActivity />
        </div>
        {/**Income Express */}
        <div className="h-full">
          <IncomeExpress />
        </div>
      </div>
    </div>
  );
};

export default Main;
