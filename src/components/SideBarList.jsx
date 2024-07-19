import React, { useEffect, useRef, useState } from "react";
import "../css/Sidebar.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function SideBarList({ data, isOpen, onToggle }) {
  const { title, icon, content } = data;

  const [height, setHeight] = useState("0px");
  const [selectedItem, setSelectedItem] = useState(null);

  const contentEl = useRef(null);

  useEffect(() => {
    if (isOpen && contentEl.current) {
      setHeight(`${contentEl.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <li className={`accordion_item ${isOpen ? "active" : ""} border-1 py-3`}>
      <div
        className="button flex justify-between px-3 items-center"
        onClick={onToggle}
      >
        <div className="flex items-center">
          {React.cloneElement(icon, {
            className: `text-2xl mr-2 ${
              isOpen ? "text-[#4F46E5]" : "text-gray-500"
            }`,
          })}
          <button className="m-0 text-sm text-gray-200">{title}</button>
        </div>
        <span className="control">
          {title === "Messages" && (
            <div className="flex items-center justify-center rounded-md   w-7 h-6 bg-[#4F46E5] text-gray-200">
              4
            </div>
          )}
          {content.length > 0 &&
            (isOpen ? (
              <MdOutlineKeyboardArrowUp className="text-3xl text-[#4F46E5]" />
            ) : (
              <MdOutlineKeyboardArrowDown className="text-3xl text-gray-500" />
            ))}
        </span>
      </div>

      <div ref={contentEl} className="answer_wrapper" style={{ height }}>
        <div className="answer w-[60%] bg-[#0F172A] text-white text-sm flex flex-col mx-auto">
          <ul>
            {content.map((listData, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(listData)}
                className={`mb-1 cursor-pointer ${
                  selectedItem === listData ? "text-[#4F46E5]" : "text-white"
                }`}
              >
                {listData}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
