"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import GridButton from "../components/gridbutton/GridButton";
import SearchButton from "../components/SearchButton/SearchButton";
import {colleges}  from "../components/Data/Page"



export default function CollegePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-gray-100">
      <div className="pl-10">
        <h3 className="text-3xl pt-5">Choose your Future College</h3>
      </div>
      <div className="py-4 lg:flex gap-3 items-center justify-between lg:pl-10">
        <div className="px-10 lg:px-0 flex-grow">
          <SearchButton searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        <div className="flex items-center justify-between px-10 md:px-10 flex-grow">
          <p className="font-bold flex items-center py-3 text-xl lg:text-sm lg:pr-20">
            Sort by: Name <FaAngleDown />
          </p>
          <GridButton setViewMode={setViewMode} />
        </div>
      </div>

      <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-center mb-4 lg:px-10">
        <h2 className="lg:text-base text-2xl font-bold mb-2 lg:mb-0">Trending Colleges</h2>
        <a href="#" className="text-[#007296] hover:underline font-bold lg:text-xl text-2xl pr-2">View all</a>
      </div>

      <div className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "flex flex-col gap-6"} lg:px-10`}>
        {colleges
          .filter(college => college.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((college, index) => (
            <Link href={`/college/${college.id}`} key={index} className="flex-grow">
              <div className={`bg-white shadow-md rounded-lg overflow-hidden flex-grow relative ${viewMode === "list" ? "flex flex-row items-center p-4" : ""}`}>
                {viewMode === "list" && (
                  <div className="flex-grow p-4">
                    <h3 className="font-bold">{college.name}</h3>
                    <p className="text-black border-b border-gray-300">{college.location}</p>
                    {college.details.map((detail, i) => (
                      <p key={i} className="text-black text-sm mt-2">{detail}</p>
                    ))}
                  </div>
                )}
                <div className="relative order-2 flex-shrink-0">
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
                  <div className="p-4 flex-grow">
                    <h3 className="font-bold">{college.name}</h3>
                    <p className="text-gray-600">{college.location}</p>
                  </div>
                )}
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
