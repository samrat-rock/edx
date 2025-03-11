"use client";

import React, { useState } from "react";
import SearchButton from "../components/SearchButton/SearchButton";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import GridButton from "../components/gridbutton/GridButton";

const colleges = [
  {
    name: "Boston",
    location: "Kamal Pokhari, Kathmandu",
    image: "/BostonCollege.jpg",
  },
  {
    name: "ABC College",
    location: "New Baneshwor, Kathmandu",
    image: "/BostonCollege.jpg",
  },
  {
    name: "XYZ University",
    location: "Pulchowk, Lalitpur",
    image: "/BostonCollege.jpg",
  },
  {
    name: "PQR Institute",
    location: "Kirtipur, Kathmandu",
    image: "/BostonCollege.jpg",
  },
  {
    name: "LMN Academy",
    location: "Maitighar, Kathmandu",
    image: "/BostonCollege.jpg",
  },
  {
    name: "UVW College",
    location: "Dillibazar, Kathmandu",
    image: "/BostonCollege.jpg",
  },
  {
    name: "RST University",
    location: "Thamel, Kathmandu",
    image: "/BostonCollege.jpg",
  },
  {
    name: "OPQ College",
    location: "Boudha, Kathmandu",
    image: "/BostonCollege.jpg",
  },
];

function Page() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = searchQuery.trim() ? searchQuery.split(" ") : [];

  const removeFilter = (filterToRemove: string) => {
    setSearchQuery(
      filters.filter((filter) => filter !== filterToRemove).join(" ")
    );
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <section className="bg-gray-200">
        <div className="lg:pl-20">
          <h3 className="lg:text-5xl text-2xl lg:bg-white pl-4 py-3">
            Choose your Future College
          </h3>
        </div>

        <div className="py-4 lg:flex items-center justify-between lg:px-10">
          <div className="px-10 w-full lg:w-auto flex-grow">
            <SearchButton
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="flex items-center gap-10 justify-center lg:justify-start">
            <p className="inline-flex items-center gap-2 text-2xl lg:text-base cursor-pointer">
              Sort by: <span className="font-semibold">Name</span>{" "}
              <FaAngleDown />
            </p>
            <GridButton setViewMode={setViewMode} />
          </div>
        </div>

        {filters.length > 0 && (
          <div className="pl-20 pb-3 mt-2">
            <h2 className="text-xl font-bold mb-2">
              Search Results for: <span className="text-[#007296]"></span>
            </h2>
            <div className="flex flex-wrap gap-4">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white px-4 py-1 rounded-md flex items-center gap-2"
                  onClick={() => removeFilter(filter)}
                >
                  {filter}
                </button>
              ))}
              <button
                className="bg-red-500 text-white px-4 py-1 rounded-md"
                onClick={clearSearch}
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-center mb-4 px-20">
          <h2 className="text-xl font-bold mb-2 lg:mb-0">Trending colleges</h2>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            View all
          </a>
        </div>

        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              : "flex flex-col gap-6"
          } lg:px-20 px-5`}
        >
          {colleges.map((college, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg overflow-hidden ${
                viewMode === "list" ? "flex flex-grow" : "flex-grow"
              }`}
            >
              <div className="relative">
                <Image
                  src={college.image}
                  alt={college.name}
                  className={`w-full h-40 object-cover ${
                    viewMode === "list"
                      ? "sm:w-32 md:w-40 lg:w-60"
                      : "lg:w-full"
                  } rounded-lg`}
                  height={100}
                  width={300}
                />
                <button className="absolute top-2 right-2 bg-[#007296] p-2 rounded-full shadow">
                  <CiHeart className="text-white animate-heartbeat" />
                </button>
              </div>

              <div className="p-4 flex-grow">
                <h3 className="font-bold">{college.name}</h3>
                <p className="text-gray-600">{college.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
