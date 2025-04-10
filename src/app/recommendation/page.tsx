"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import GridButton from "../components/gridbutton/GridButton";

const colleges = [
  { 
    name: "Boston", 
    location: "Kamal Pokhari, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "65% Graduation rate", "01-5970012"]
  },
  { 
    name: "ABC College", 
    location: "New Baneshwor, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "75% Graduation rate", "01-4467890"]
  },
  { 
    name: "XYZ University", 
    location: "Pulchowk, Lalitpur", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "80% Graduation rate", "01-5534210"]
  },
  { 
    name: "PQR Institute", 
    location: "Kirtipur, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "70% Graduation rate", "01-4378912"]
  },
  { 
    name: "LMN Academy", 
    location: "Maitighar, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "68% Graduation rate", "01-4750123"]
  },
  { 
    name: "UVW College", 
    location: "Dillibazar, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "72% Graduation rate", "01-4423345"]
  },
  { 
    name: "RST University", 
    location: "Thamel, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "78% Graduation rate", "01-4356789"]
  },
  { 
    name: "OPQ College", 
    location: "Boudha, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "67% Graduation rate", "01-4890123"]
  },
];

function Page() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid"); 

  return (
    <>
      <section className="bg-gray-100 pt-4 px-4">
      <div className="bg-white ">
      <div className="py-4 lg:flex gap-3 items-center justify-between lg:pl-10">
          <h3 className="text-5xl lg:text-3xl font-bold text-center py-3">Explore top college picks</h3>
          <div className="flex items-center gap-10 justify-center lg:justify-start lg:px-14">
            <p className="font-bold flex items-center gap-2 py-3 text-2xl lg:text-base  ">
              Sort by: Name <FaAngleDown />
            </p>
            <GridButton setViewMode={setViewMode} /> 
          </div>
        </div>
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-center mb-4 lg:px-10">
          <h2 className="lg:text-xl text-2xl font-bold mb-2 lg:mb-0">Recommended colleges</h2>
          <a href="#" className="text-blue-500 hover:underline font-bold lg:text-base text-2xl">View all</a>
        </div>

        <div className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" : "flex flex-col gap-6"} lg:px-10`}>
          {colleges.map((college, index) => (
            <div key={index} className={`bg-white shadow-md rounded-lg overflow-hidden flex-grow ${viewMode === "list" ? "flex items-center p-4" : ""}`}>
              {viewMode === "list" && (
                <div className="flex-grow p-4">
                  <h3 className="font-bold">{college.name}</h3>
                  <p className="text-black  border-b border-gray-300">{college.location}</p>
                  {college.details.map((detail, i) => (
                    <p key={i} className="text-black text-sm mt-2">{detail}</p>
                  ))}
                </div>
              )}
              <div className="relative order-2">
                <Image
                  src={college.image}
                  alt={college.name}
                  className={`w-full h-40 object-cover ${viewMode === "list" ? "w-40 h-40" : "lg:w-full"} rounded-lg`}
                  height={100}
                  width={300}
                />
                <button className="absolute top-2 right-2 bg-[#007296] p-2 rounded-full shadow">
                  <CiHeart className="text-white animate-heartbeat" />
                </button>
              </div>
              {viewMode === "grid" && (
                <div className="p-4">
                  <h3 className="font-bold">{college.name}</h3>
                  <p className="text-gray-600 text-nowrap">{college.location}</p>
                </div>
              )}  
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}

export default Page;
