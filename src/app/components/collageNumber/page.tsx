import React from "react";

function CollageNumber() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-6 bg-white shadow-lg rounded-lg justify-items-center text-center">
      <div className="flex flex-col items-center justify-center p-6 rounded-md">
        <span className="text-7xl font-bold text-[#007296]">24</span>
        <span className="text-[#007296] font-bold">Total Application</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 rounded-md bg-green-100">
        <span className="text-4xl text-[#027A48]">8</span>
        <span className="text-[#027A48]">Accepted</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 rounded-md bg-red-100">
        <span className="text-4xl text-[#B42318]">2</span>
        <span className="text-[#B42318]">Rejected</span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 rounded-md bg-gray-100">
        <span className="text-4xl text-[#344054]">13</span>
        <span className="text-[#344054]">Pending</span>
      </div>
    </div>
  );
}

export default CollageNumber;
