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
    id: "#3062",
    college: "Little Angels’ College",
    address: "Lalitpur, Nepal",
    course: "BBA (Marketing)",
    date: "Jan 5, 2022",
    status: "Pending",
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
    id: "#3062",
    college: "Little Angels’ College",
    address: "Lalitpur, Nepal",
    course: "BBA (Marketing)",
    date: "Jan 5, 2022",
    status: "Pending",
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
    id: "#3062",
    college: "Little Angels’ College",
    address: "Lalitpur, Nepal",
    course: "BBA (Marketing)",
    date: "Jan 5, 2022",
    status: "Pending",
  },
  {
    id: "#3062",
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
    <div className="p-5 bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full shadow-lg rounded-lg pl-10 flex flex-col">
        <CollageNumber />

        
        <div className="lg:flex flex-wrap justify-between items-center gap-4 mt-6">
  
  <div className="flex gap-2 pb-5 px-4 sm:px-2">
    <button className="p-2 rounded hover:bg-gray-200">
      <CiFilter size={24} />
    </button>
    <button className="p-2 rounded flex items-center gap-1 hover:bg-[#005a73]">
      <span className="text-2xl">+</span> Filter
    </button>
  </div>

  
  <div className="px-10 flex-grow lg:flex justify-end">
    <SearchButton searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  </div>
</div>


        
        <div className="overflow-hidden lg:overflow-x-auto mt-6 flex-grow">
          <table className="min-w-full bg-white shadow-md text-xs sm:text-sm border-collapse">
            <thead className="bg-gray-200 font-bold">
              <tr>
                <th className="py-3 px-4 text-left">
                  <input type="checkbox" className="mr-2" /> ID
                </th>
                <th className="py-3 px-4 text-left">College Name / Address</th>
                <th className="py-3 px-4 text-left">Course Applied</th>
                <th className="py-3 px-4 text-left">Date Applied</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-3 px-4 font-bold whitespace-nowrap">
                    <input type="checkbox" className="mr-2" />
                    {item.id}
                  </td>
                  <td className="py-3 px-4">
                    <div className="whitespace-nowrap">
                      {item.college}
                      <br />
                      <span className="text-xs text-gray-500">{item.address}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 whitespace-nowrap">{item.course}</td>
                  <td className="py-3 px-4 text-gray-400 whitespace-nowrap">{item.date}</td>
                  <td className="py-3  ">
                  
                    <span
                      className={` py-1 rounded-full   text-[#027A48] text-xs ${
                        item.status === "Approved" ? "bg-[#ECFDF3]" : "bg-[#ECFDF3]"
                      }`}
                    >
                
                      <TiTick/>
                      {item.status}
                       
                    </span>
                   
                  </td>
                  <td className="py-3 px-4 text-[#007296] font-bold cursor-pointer">
                    View Application
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
