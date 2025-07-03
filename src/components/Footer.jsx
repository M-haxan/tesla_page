import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { GiSteeringWheel } from "react-icons/gi";

function Footer() {
  return (
    <footer className="w-full sticky bottom-0 z-50 bg-white border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-4 gap-4">

        {/* Left Button */}
        <button className="flex justify-between items-center gap-3 bg-gray-100 px-4 py-3 rounded-md shadow-sm w-full md:w-[600px]">
          <div className="flex flex-wrap items-center gap-2">
            <FaCommentDots className="text-gray-700 text-lg" />
            <span className="font-semibold text-gray-800 whitespace-nowrap">Ask a question</span>
            <span className="text-gray-500 text-sm truncate">"Compare Model 3 and Model Y"</span>
          </div>
          <HiOutlineArrowUp className="text-gray-400" />
        </button>

        {/* Right Button */}
        <button className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-md shadow-sm w-full md:w-auto justify-center">
          <GiSteeringWheel className="text-blue-600 text-lg" />
          <span className="font-semibold text-gray-800">Schedule a Drive Today</span>
        </button>

      </div>
    </footer>
  );
}

export default Footer;
