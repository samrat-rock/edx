import React from 'react'
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";


function GridButton() {
  return (
    <div className="lg:flex lg:items-center border border-gray-300 rounded-lg gap-2 hidden ">
        
            <button className="flex items-center gap-2 px-4 py-2 bg-[#007296] text-white border-r border-gray-300 rounded-l-lg">
              <IoGrid /> Grid
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-r-lg ">
              <FaListUl /> List
            </button>
          </div>
  )
}

export default GridButton
