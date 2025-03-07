import React from "react";
import CollageNumber from "../components/collageNumber/page";
import SearchButton from "../components/SearchButton/page";
import { CiFilter } from "react-icons/ci";

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
];

function Page() {
  return (
    <div className="p-5 bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-full max-w-9xl p-6 shadow-lg rounded-lg">
        <CollageNumber />
        <div className="lg:flex flex-wrap justify-between items-center gap-4 mt-6">
          <div className="flex gap-2 pb-5 px-4 sm:px-2 pl-10">
            <button className="p-2 rounded border border-gray-300 bg-gray-100 hover:bg-gray-200">
              <CiFilter size={24} />
            </button>
            <button className="p-2 rounded bg-[#007296] text-white flex items-center gap-1 hover:bg-[#005a73]">
              <span className="text-2xl">+</span> Filter
            </button>
          </div>
          <div className="lg:w-3xl w-60 ">
            <SearchButton />
          </div>
        </div>

        <div className="overflow-hidden lg:overflow-x-auto mt-6">
          <table className="min-w-full bg-white shadow-md text-xs sm:text-sm border-collapse">
            <thead className="bg-gray-200 font-bold">
              <tr>
                <th className="py-3 px-4 text-left">
                  <input type="checkbox" className="mr-2" /> ID
                </th>
                <th className="py-3 px-4 text-left">College Name/ Address</th>
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
                      <span className="text-xs text-gray-500">
                        {item.address}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-400 whitespace-nowrap">
                    {item.course}
                  </td>
                  <td className="py-3 px-4 text-gray-400 whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs ${
                        item.status === "Approved"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    >
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
