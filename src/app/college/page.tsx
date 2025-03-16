"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import GridButton from "../components/gridbutton/GridButton";
import SearchButton from "../components/SearchButton/SearchButton";

const colleges = [
  { 
    id: "boston-1",
    name: "Boston", 
    location: "Kamal Pokhari, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "65% Graduation rate", "01-5970012"]
  },
  { 
    id: "abc-1",
    name: "ABC College", 
    location: "New Baneshwor, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "75% Graduation rate", "01-4467890"]
  },
  { 
    id: "boston-1",
    name: "Boston", 
    location: "Kamal Pokhari, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "65% Graduation rate", "01-5970012"]
  },
  { 
    id: "abc-1",
    name: "ABC College", 
    location: "New Baneshwor, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "75% Graduation rate", "01-4467890"]
  },
  { 
    id: "boston-1",
    name: "Boston", 
    location: "Kamal Pokhari, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "65% Graduation rate", "01-5970012"]
  },
  { 
    id: "abc-1",
    name: "ABC College", 
    location: "New Baneshwor, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "75% Graduation rate", "01-4467890"]
  },
  { 
    id: "boston-1",
    name: "Boston", 
    location: "Kamal Pokhari, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "65% Graduation rate", "01-5970012"]
  },
  { 
    id: "abc-1",
    name: "ABC College", 
    location: "New Baneshwor, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "75% Graduation rate", "01-4467890"]
  },{ 
    id: "boston-1",
    name: "Boston", 
    location: "Kamal Pokhari, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "65% Graduation rate", "01-5970012"]
  },
  { 
    id: "abc-1",
    name: "ABC College", 
    location: "New Baneshwor, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "75% Graduation rate", "01-4467890"]
  },{ 
    id: "boston-1",
    name: "Boston", 
    location: "Kamal Pokhari, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Public", "65% Graduation rate", "01-5970012"]
  },
  { 
    id: "abc-1",
    name: "ABC College", 
    location: "New Baneshwor, Kathmandu", 
    image: "/BostonCollege.jpg", 
    details: ["Private", "75% Graduation rate", "01-4467890"]
  }
];

export default function CollegePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-gray-200">
      <div className="py-4 lg:flex gap-3 items-center justify-between lg:pl-10">
        <h3 className="text-3xl text-center py-3">Explore top college picks</h3>
        <div className="flex items-center gap-10 justify-center lg:justify-start lg:px-14">
          <p className="font-bold flex items-center gap-2 py-3 text-2xl lg:text-base lg:px-20">
            Sort by: Name <FaAngleDown />
          </p>
          <GridButton setViewMode={setViewMode} />
        </div>
      </div>

      <div className="pl-10">
        <SearchButton searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-center mb-4 lg:px-10">
        <h2 className="lg:text-xl text-2xl font-bold mb-2 lg:mb-0">Recommended colleges</h2>
        <a href="#" className="text-blue-500 hover:underline font-bold lg:text-xl text-2xl">View all</a>
      </div>

      <div className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" : "flex flex-col gap-6"} lg:px-10`}>
        {colleges
          .filter(college => college.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((college, index) => (
            <Link href={`/college/${college.id}`} key={index}>
              <div className={`bg-white shadow-md rounded-lg overflow-hidden flex-grow relative ${viewMode === "list" ? "flex items-center p-4" : ""}`}>
                <div className="relative">
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
                <div className="p-4">
                  <h3 className="font-bold">{college.name}</h3>
                  <p className="text-gray-600">{college.location}</p>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </section>
  );
}
