"use client";

import React, { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

interface GridButtonProps {
  setViewMode: (mode: "grid" | "list") => void;
}

const GridButton: React.FC<GridButtonProps> = ({ setViewMode }) => {
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");

  const handleViewChange = (mode: "grid" | "list") => {
    setActiveView(mode);
    setViewMode(mode);
  };

  return (
    <div className="lg:flex lg:items-center rounded-lg  hidden border border-gray-400">
      <button
        className={`flex items-center gap-2 px-4 py-1 border-r border-gray-300 rounded-l-lg ${
          activeView === "grid" ? "bg-[#007296] text-white" : "hover:bg-gray-200"
        }`}
        onClick={() => handleViewChange("grid")}
      >
        <IoGrid/> Grid
      </button>
      <button
        className={`flex items-center gap-2 px-4 py-1 rounded-r-lg ${
          activeView === "list" ? "bg-[#007296] text-white" : "hover:bg-gray-200"
        }`}
        onClick={() => handleViewChange("list")}
      >
        <FaListUl /> List
      </button>
    </div>
  );
};

export default GridButton;
