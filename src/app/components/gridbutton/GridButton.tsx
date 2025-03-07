"use client";

import React from "react";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa"
interface GridButtonProps {
  setViewMode: (mode: "grid" | "list") => void; 
}

const GridButton: React.FC<GridButtonProps> = ({ setViewMode }) => {
  return (
    <div className="lg:flex lg:items-center border border-gray-300 rounded-lg gap-2 hidden">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-[#007296] text-white border-r border-gray-300 rounded-l-lg"
        onClick={() => setViewMode("grid")} 
      >
        <IoGrid /> Grid
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-r-lg"
        onClick={() => setViewMode("list")} 
      >
        <FaListUl /> List
      </button>
    </div>
  );
};

export default GridButton;
