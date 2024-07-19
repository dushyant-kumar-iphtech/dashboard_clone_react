import React from "react";
import { RiChat1Line } from "react-icons/ri";
import { TbBookmarkMinus } from "react-icons/tb";
import { GoArrowSwitch } from "react-icons/go";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm">
      <h6 className="px-4 py-3  ">Recent Activity</h6>
      <hr className="text-gray-400" />
      <div className="px-3">
        <p className="bg-gray-50 pl-3 py-2 text-xs text-gray-400 my-2">TODAY</p>

        <div className="flex flex-col ">
          <div className="flex items-center ">
            <div className="flex  items-center  px-2 ">
              <span className="bg-[#6366F1] rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <RiChat1Line />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 items-center border-b">
              <div>
                <p className="m-0 text-sm text-gray-500">
                  <span className="text-black">Nick Mark</span> mentioned{" "}
                  <span className="text-black"> Sara Smith </span> in a new post
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-[#6366F1] cursor-pointer text-sm m-0">
                  View
                </p>
                <IoArrowForward className="text-[#6366F1] text-sm" />
              </div>
            </div>
          </div>

          <div className="flex  items-center">
            <div className="flex gap-3  items-center px-2 h-full ">
              <span className="bg-red-600 rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <TbBookmarkMinus />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 items-center border-b">
              <div>
                <p className="m-0 text-sm text-gray-500">
                  The post <span className="text-black">Post Name</span> was
                  removed by <span className="text-black"> Nick Mark </span>
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-[#6366F1] cursor-pointer text-sm m-0">
                  View
                </p>
                <IoArrowForward className="text-[#6366F1] text-sm" />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-green-600 rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <GoArrowSwitch />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 items-center ">
              <div>
                <p className="m-0 text-sm text-gray-500">
                  <span className="text-black">Patrick Sullivan </span>{" "}
                  published a new <span className="text-black"> post </span>
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-[#6366F1] cursor-pointer text-sm m-0">
                  View
                </p>
                <IoArrowForward className="text-[#6366F1] text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 ">
        <p className="bg-gray-50 pl-3 py-2 text-xs text-gray-400 ">YESTERDAY</p>

        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-[#0DA5E9] rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <TbArrowsShuffle />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 items-center border-b">
              <div>
                <p className="m-0 text-sm text-gray-500">
                  <span className="text-black"> 240+ </span> users have
                  subscribed to{" "}
                  <span className="text-black"> Newsletter #1 </span>
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-[#6366F1] cursor-pointer text-sm m-0">
                  View
                </p>
                <IoArrowForward className="text-[#6366F1] text-sm" />
              </div>
            </div>
          </div>

          <div className="flex items-center pb-4">
            <div className="flex gap-3  items-center px-2">
              <span className="bg-[#6366F1] rounded-full text-white text-2xl flex items-center justify-center w-9 h-9">
                <RiChat1Line />
              </span>
            </div>
            <div className="flex justify-between w-full h-14 items-center">
              <div>
                <p className="m-0 text-sm text-gray-500">
                  The post<span className="text-black"> Post Name</span> was
                  suspended by <span className="text-black"> Nick Mark </span>
                </p>
              </div>
              <div className="flex items-center gap-x-1">
                <p className="text-[#6366F1] cursor-pointer text-sm m-0">
                  View
                </p>
                <IoArrowForward className="text-[#6366F1] text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
