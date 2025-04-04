"use client";
import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi"; 
import SearchButton from "../components/SearchButton/SearchButton";
import { FaArrowDown } from "react-icons/fa6";
import TestScore from "../components/Modals/TestScore";
import Upload from "../components/Modals/Upload"; // Import Upload Component

const applications = [
  {
    college: "Central College",
    course: "Bachelor of Business Administration (BBA)",
    date: "15th March, 2024",
    status: "Rejected",
    color: "bg-[#FFF3F2] text-[#FE5341]",
  },
  {
    college: "Kathmandu Model College (KMC)",
    course: "Bachelor of Engineering in Computer (BE Computer)",
    date: "15th March, 2024",
    status: "Pending",
    color: "bg-[#CDF0FA] text-[#18667D]",
  },
  {
    college: "V.S. Niketan College",
    course: "Bachelor of Law (LLB)",
    date: "15th March, 2024",
    status: "Approved",
    color: "bg-green-100 text-green-600",
  },
];

export default function ApplicationsTable() {
  const [isTestScoreModalOpen, setIsTestScoreModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false); 

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen flex flex-col">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="lg:flex items-center px-2">
            <div className="p-3 lg:flex flex-grow gap-3 items-center text-center">
              <h3 className="md:font-normal font-bold text-nowrap pb-4 lg:pb-0 text-3xl lg:text-base">
                My Applications
              </h3>
              <p className="bg-[#F9F5FF] rounded-full px-3 py-1 text-2xl md:text-sm text-[#0295A9]">
                {applications.length} applications found
              </p>
            </div>
            <div className="pl-3 py-4">
              <SearchButton />
            </div>
          </div>

          <div className="overflow-x-auto max-w-full py-5">
            <table className="w-full min-w-max border-collapse">
              <thead className="bg-gray-50 text-[#667085]">
                <tr>
                  <th className="p-3 pl-5 text-left text-sm font-semibold">College Name</th>
                  <th className="p-3 text-left text-sm font-semibold">
                    <div className="inline-flex items-center gap-2">
                      Course <FaArrowDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="p-3 text-left text-sm font-semibold hidden lg:table-cell">
                    <div className="inline-flex items-center gap-2">
                      Applied Date <FaArrowDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="p-3 text-left text-sm font-semibold">
                    <div className="inline-flex items-center gap-2">
                      Status <FaArrowDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="p-3 pr-5 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((item, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-3 text-sm text-gray-600 font-bold">{item.college}</td>
                    <td className="p-3 text-sm text-gray-600">{item.course}</td>
                    <td className="p-3 text-sm text-gray-600 hidden lg:table-cell">{item.date}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                        ● {item.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <button className="text-gray-600 hover:text-gray-800">
                        <HiOutlineDotsVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsTestScoreModalOpen(true)}
            >
              Upload Test Score
            </button>

            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setIsUploadModalOpen(true)}
            >
              Upload Document
            </button>
          </div>

          {/* Modals */}
          <TestScore open={isTestScoreModalOpen} onCancel={() => setIsTestScoreModalOpen(false)} />
          <Upload open={isUploadModalOpen} onCancel={() => setIsUploadModalOpen(false)} />
        </div>
      </div>
    </>
  );
}
