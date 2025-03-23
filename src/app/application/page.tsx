"use client";
import React, { useState } from "react";
import CollageNumber from "../components/collageNumber/page";
import SearchButton from "../components/SearchButton/SearchButton";
import { CiFilter } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { applications, Application } from "../components/Data/Page";

function Page() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
        <CollageNumber />

      
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 md:p-6">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <CiFilter size={24} className="text-gray-600" />
            </button>
            <button className="px-4 py-2 flex items-center gap-2 text-sm rounded-lg hover:bg-gray-200">
              <span className="text-xl">+</span> Filter
            </button>
          </div>

          <div>
            <SearchButton
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>

        <div className="overflow-x-auto max-w-full px-4 pb-4">
  <table className="w-full min-w-max border-collapse">
    <thead className="bg-gray-50">
      <tr>
        <th className="p-3 text-left text-sm font-semibold hidden sm:table-cell">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 rounded" />
            ID
          </label>
        </th>
        <th className="p-3 text-left text-sm font-semibold">College/Address</th>
        <th className="p-3 text-left text-sm font-semibold hidden md:table-cell">Course</th>
        <th className="p-3 text-left text-sm font-semibold hidden lg:table-cell">Date</th>
        <th className="p-3 text-left text-sm font-semibold">Status</th>
        <th className="p-3 text-left text-sm font-semibold">Action</th>
      </tr>
    </thead>
    <tbody>
      {applications?.map((item: Application, index: number) => (
        <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
          <td className="p-3 hidden sm:table-cell">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-sm font-bold">{item.id}</span>
            </label>
          </td>
          <td className="p-3">
            <div className="flex flex-col">
              <span className="font-medium">{item.college}</span>
              <span className="text-xs text-gray-500 mt-1">{item.address}</span>
            </div>
          </td>
          <td className="p-3 text-sm text-gray-600 hidden md:table-cell">{item.course}</td>
          <td className="p-3 text-sm text-gray-600 hidden lg:table-cell">{item.date}</td>
          <td className="p-3">
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                item.status === "Approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status === "Approved" ? <TiTick /> : <RxCross2 />}
              {item.status}
            </span>
          </td>
          <td className="p-3">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium text-nowrap">
              View Application
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
}

export default Page;
