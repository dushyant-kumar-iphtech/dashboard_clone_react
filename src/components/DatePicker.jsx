// DateRangePicker.js
import React, { useState, useRef, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { MdOutlineDateRange } from "react-icons/md";
import "../App.css";

const DatePicker = () => {
  const [dates, setDates] = useState([]);
  const inputRef = useRef(null);

  // Update the input value to show date range in one line
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = dates
        .map((date) => date.toISOString().split("T")[0])
        .join(" to ");
    }
  }, [dates]);

  return (
    <div className="flatpickr-wrapper ">
      <MdOutlineDateRange className="calendar-icon absolute my-2 mx-1" />
      <Flatpickr
        className="datepicker dark:bg-slate-800 text-slate-500 cn6r0 cxc4n ch1ih caowp cw92y c03gb ctmd2"
        placeholder="Select date range"
        data-class="flatpickr-right"
        value={dates}
        onChange={(selectedDates) => {
          setDates(selectedDates);
        }}
        options={{
          mode: "range", // Enable range mode
          dateFormat: "Y-m-d", // Customize the date format
          wrap: true, // Enable custom wrapper
        }}
      >
        <input
          type="text"
          data-input
          ref={inputRef}
          className="datepicker-input h-10 w-[30vh]"
          readOnly
          placeholder="Select date range"
        />
      </Flatpickr>
    </div>
  );
};

export default DatePicker;
