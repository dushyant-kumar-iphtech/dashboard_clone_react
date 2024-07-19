import React, { useState } from "react";
import SideBarList from "../components/SideBarList";
import { accordionData1 } from "../data/accordionData";
import { accordionData2 } from "../data/accordionData";

const SideBar = () => {
  const [openIndex, setOpenIndex] = useState(0); // Track which accordion item is open

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Toggle open/close state
  };

  return (
    <div>
      <img
        className="w-10 h-10 my-3 ml-3 "
        src="https://i1.wp.com/www.coffeenancy.com/wordpress/wp-content/uploads/2015/03/circlesunset1.png"
        alt=""
      />
      <div className="w-[80%] mt-10 mx-auto">
        <p className="text-gray-500 text-sm">PAGES</p>
      </div>
      <div className="w-[90%] mx-auto mt-2">
        <ul className="accordion">
          {accordionData1.map((data, index) => (
            <SideBarList
              key={index}
              data={data}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </ul>
      </div>
      <div className="w-[80%] mt-5 mx-auto">
        <p className="text-gray-500 text-sm">MORE</p>
      </div>
      <div className="w-[90%] mx-auto mt-2">
        <ul className="accordion">
          {accordionData2.map((data, index) => (
            <SideBarList
              key={index}
              data={data}
              isOpen={openIndex === index + accordionData1.length} // Adjust isOpen check for accordionData2
              onToggle={() => handleToggle(index + accordionData1.length)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
