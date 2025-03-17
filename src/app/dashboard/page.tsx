
  "use client";
import React, { useState } from "react";
import Cards from "../components/cards/cards";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import Modal from "../components/modal/Modal";


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

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-100 flex flex-col min-h-screen">
    
      <div className="flex-grow flex flex-col">
        <Cards />

        
        <div className="bg-white m-4 rounded-xl flex-grow flex flex-col">
          <div className="w-full py-5 flex justify-center lg:justify-start lg:pl-8">
            <h3 className="font-bold text-xl">You’ve applied to</h3>
          </div>

          <div className="flex flex-col lg:flex-row flex-grow items-center lg:items-start">
            
            <div className="lg:pl-14 text-center mb-8 lg:mb-0 lg:flex-shrink-0">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#007296] pb-2">
                24
              </h3>
              <p className="text-lg md:text-xl lg:text-xl pb-6">Colleges</p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 lg:px-20 pb-4">
              <div className="flex flex-col items-center justify-center rounded-md bg-green-100 p-4 gap-3 h-full">
                <span className="text-5xl md:text-6xl text-[#027A48]">8</span>
                <span className="text-[#027A48]">Accepted</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-md bg-red-100 p-4 gap-3 h-full">
                <span className="text-5xl md:text-6xl text-[#B42318]">2</span>
                <span className="text-[#B42318]">Rejected</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-md bg-gray-100 p-4 gap-3 h-full md:col-span-2 lg:col-span-1">
                <span className="text-5xl md:text-6xl text-[#344054]">13</span>
                <span className="text-[#344054]">Pending</span>
              </div>
            </div>
          </div>

        
          <div className="lg:pl-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 px-4 lg:px-8">
              <h3 className="font-bold text-lg lg:text-xl">Your Applications</h3>
              <button className="text-[#007296] font-bold transition-colors">
                See All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 px-4 lg:px-8">
              <div className="flex-1">
                <ul className="space-y-2">
                  <span className="font-bold block mb-2">Accepted Application</span>
                  <li className="py-1">Kantipur College</li>
                  <li className="py-1">St.Xavier College</li>
                </ul>
              </div>
              <div className="flex-1">
                <ul className="space-y-2">
                  <span className="font-bold block mb-2">Rejected Application</span>
                  <li className="py-1">Kantipur College</li>
                  <li className="py-1">St.Xavier College</li>
                </ul>
              </div>
              <div className="flex-1">
                <ul className="space-y-2">
                  <span className="font-bold block mb-2">Pending Application</span>
                  <li className="py-1">Kantipur College</li>
                  <li className="py-1">St.Xavier College</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="px-4 lg:px-8 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {colleges.map((college, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
      >
        {/* Image container with aspect ratio */}
        <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <div className="absolute inset-0">
            <Image
              src={college.image}
              alt={college.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <button className="absolute top-2 right-2 bg-[#007296] p-2 rounded-full shadow hover:bg-[#005a75] transition-colors z-10">
            <CiHeart className="text-white text-xl" />
          </button>
        </div>
        
        {/* Content section */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-lg mb-2">{college.name}</h3>
          <p className="text-gray-600 text-sm">{college.location}</p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* 
      <div className="text-center py-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Choose Preferences
        </button>
      </div> */}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default Dashboard;