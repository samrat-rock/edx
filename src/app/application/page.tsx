"use client";

import React, { useState } from "react";
import CollageNumber from "../components/collageNumber/page";
import SearchButton from "../components/SearchButton/SearchButton";
import { CiFilter } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

interface Application {
  id: string;
  college: string;
  address: string;
  course: string;
  date: string;
  status: "Approved" | "Pending";
}

const applications: Application[] = [
  {
    id: "#3066",
    college: "Islington College",
    address: "Kathmandu, Nepal",
    course: "Bsc.(Hons) Computing",
    date: "Jan 6, 2022",
    status: "Approved",
  },
  {
    id: "#3065",
    college: "CSU Chico",
    address: "Chico, CA, USA",
    course: "Multimedia",
    date: "Jan 6, 2022",
    status: "Approved",
  },
  {
    id: "#3064",
    college: "University of Texas Austin",
    address: "Austin, TX, USA",
    course: "Bsc.(Hons) Computing",
    date: "Jan 6, 2022",
    status: "Approved",
  },
  {
    id: "#3063",
    college: "London Met Uni",
    address: "London, UK",
    course: "ACCA",
    date: "Jan 5, 2022",
    status: "Approved",
  },
  {
    id: "#3062",
    college: "Little Angels’ College",
    address: "Lalitpur, Nepal",
    course: "BBA (Marketing)",
    date: "Jan 5, 2022",
    status: "Pending",
  },
  
  {
    id: "#3061",
    college: "Little Angels’ College",
    address: "Lalitpur, Nepal",
    course: "BBA (Marketing)",
    date: "Jan 5, 2022",
    status: "Pending",
  },
  {
    id: "#3060",
    college: "Little Angels’ College",
    address: "Lalitpur, Nepal",
    course: "BBA (Marketing)",
    date: "Jan 5, 2022",
    status: "Pending",
  },
];

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
            <button className="px-4 py-2  hover:bg-gray-200  flex items-center gap-2 text-sm">
              <span className="text-xl">+</span>
              Filter
            </button>
          </div>

          <div className="">
            <SearchButton
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>

        
        <div className="overflow-x-auto px-4 pb-4">
        
          <table className="hidden md:table w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left text-sm font-semibold">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    ID
                  </label>
                </th>
                <th className="p-3 text-left text-sm font-semibold">College/Address</th>
                <th className="p-3 text-left text-sm font-semibold">Course</th>
                <th className="p-3 text-left text-sm font-semibold">Date</th>
                <th className="p-3 text-left text-sm font-semibold">Status</th>
                <th className="p-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item, index) => (
                <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-3">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      <span className="text-sm">{item.id}</span>
                    </label>
                  </td>
                  <td className="p-3">
                    <div className="flex flex-col">
                      <span className="font-medium">{item.college}</span>
                      <span className="text-xs text-gray-500 mt-1">{item.address}</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-600">{item.course}</td>
                  <td className="p-3 text-sm text-gray-600">{item.date}</td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                        item.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <TiTick className="flex-shrink-0" />
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        
          <div className="md:hidden space-y-4">
            {applications.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm font-medium">{item.id}</span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                      item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    <TiTick className="flex-shrink-0" />
                    
                    {item.status}
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  <div>
                    <h3 className="font-medium">{item.college}</h3>
                    <p className="text-xs text-gray-500">{item.address}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Course:</span> {item.course}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Date:</span> {item.date}
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
                    View Application
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;