import React from "react";
import { RiChat1Line } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { AiTwotoneStop } from "react-icons/ai";

const IncomeExpress = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm">
      <h6 className="px-4 py-3">Income/Express</h6>
      <hr className="text-gray-400" />
      <div className="px-3">
        <div className="flex justify-between items-center bg-gray-50 pl-3 pr-2 py-2 mt-2">
          <p className="m-0 text-xs text-gray-500 ">TODAY</p>
          <p className="m-0 text-xs text-gray-500 ">AMOUNT</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-[#F43F5E]  rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <IoArrowBack className="" />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 pr-2 items-center border-b">
              <p className="m-0 text-sm text-gray-500">
                <span className="text-black">Qonto </span> billing
              </p>
              <p className="text-sm m-0">-$49.88</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-green-600 rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <IoArrowForward />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 pr-2 items-center border-b">
              <p className="m-0 text-sm text-gray-500">
                <span className="text-black">App.com </span> Market Ltd 70 Wison
                St London
              </p>
              <p className="text-green-600 text-sm m-0">+249.88</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-green-600 rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <IoArrowForward />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 pr-2 items-center border-b">
              <p className=" text-sm m-0">Notion Labs Inc</p>
              <p className="text-green-600 text-sm m-0">+99.99</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-green-600 rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <IoArrowForward />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 pr-2 items-center border-b">
              <p className="m-0 text-sm ">Market Cap Ltd</p>
              <p className="text-green-600 text-sm m-0">+1,200.88</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-gray-300  rounded-full text-white text-2xl flex items-center justify-center w-10 h-10">
                <AiTwotoneStop />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 pr-2 items-center border-b">
              <p className="m-0 text-sm text-gray-500">
                <span className="text-black">App.com </span> Market Ltd 70 Wison
                St London
              </p>
              <p className="text-sm m-0">
                <del>+$99.99</del>
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-[#F43F5E]  rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <IoArrowBack className="" />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 pr-2 items-center border-b">
              <p className="m-0 text-sm text-gray-500">
                <span className="text-black">Cruip.com </span> Market Ltd 70
                Wison St London
              </p>
              <p className="text-sm m-0">-$49.88</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpress;
