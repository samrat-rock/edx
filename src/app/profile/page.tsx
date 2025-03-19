"use client";
import React, { useState } from "react";
import { GiEgyptianProfile } from "react-icons/gi";
import { IoAddSharp, IoLocationOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaGraduationCap } from "react-icons/fa";
import { RiSchoolLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const studentDetails = [
  { icon: <CiMail />, label: "longemallexample@email.com" },
  { icon: <FaPhoneAlt />, label: "+977 9841526369" },
  { icon: <FaGraduationCap />, label: "Bachelor's Degree" },
  { icon: <RiSchoolLine />, label: "The Times International College" },
  { icon: <IoLocationOutline />, label: "Pembroke Pines, Florida" },
];

const colleges = [
  {
    name: "Boston",
    location: "Kamal Pokhari, Kathmandu",
    image: "/BostonCollege.jpg",
    details: ["Public", "65% Graduation rate", "01-5970012"],
  },
  {
    name: "Boston",
    location: "Kamal Pokhari, Kathmandu",
    image: "/BostonCollege.jpg",
    details: ["Public", "65% Graduation rate", "01-5970012"],
  },
  {
    name: "Boston",
    location: "Kamal Pokhari, Kathmandu",
    image: "/BostonCollege.jpg",
    details: ["Public", "65% Graduation rate", "01-5970012"],
  },
  {
    name: "Boston",
    location: "Kamal Pokhari, Kathmandu",
    image: "/BostonCollege.jpg",
    details: ["Public", "65% Graduation rate", "01-5970012"],
  },
  
];
const studentPreferences = [
  "Masters",
  "USA",
  "Computer Science",
  "Australia",
  "Business Studies",
  "UK",
  "Software Engineering",
];

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("academics");

  const renderContent = () => {
    switch (activeTab) {
      case "academics":
        return (
          <div className="pt-8 text-center lg:text-left">
            <div className="pt-5">
              <h3 className="Font-bold text-3xl pb-6">Current Academics</h3>
              <p className="font-bold">Enrolled College</p>
              <span>California State University, East Bay</span>
            </div>

            <div className="pt-5 pb-5">
              <h3 className="font-bold">Course</h3>
              <p>Bsc. (Hons)</p>
            </div>

            <div>
              <p className="font-bold pt-3">Enrolled College</p>
              <span>California State University, East Bay</span>
            </div>

            <div className="pt-3 text-center lg:text-left">
              <div className="pt-5">
                <h3 className="Font-bold text-3xl pb-6">Test Score</h3>
              </div>

              <div className="lg:flex items-center">
                <div>
                  <div className="pb-3 lg:pl-2">
                    <h3 className="font-bold">Ielts</h3>
                    <p>3.0</p>
                  </div>

                  <div className="lg:pl-2">
                    <p className="font-bold pt-3">Under Graduate</p>
                    <span>3.0(est)</span>
                  </div>
                </div>

                <div className="pb-3 py-4 lg:pl-20">
                  <h3 className="font-bold">Ielts</h3>
                  <p>3.0</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "activity":
        return (
          <div className="pt-8 text-center px-10 lg:text-left">
            <div className="py-10">
              <span className="md:flex items-center gap-5">
                <GoDotFill className="hidden md:block" />
                <h4>Islington Collage</h4>
                <p className="font-bold">
                  Important infomration about your applic....
                </p>
                <p>12/02/2024</p>
              </span>
            </div>
            <div className="py-10">
              <span className="md:flex items-center gap-5">
                <GoDotFill className="hidden md:block" />
                <h4>Islington Collage</h4>
                <p className="font-bold">
                  Important infomration about your applic....
                </p>
                <p>12/02/2024</p>
              </span>
            </div>
            <div className="py-10">
              <span className="md:flex items-center gap-5">
                <GoDotFill className="hidden md:block" />
                <h4>Islington Collage</h4>
                <p className="font-bold">
                  Important infomration about your applic....
                </p>
                <p>12/02/2024</p>
              </span>
            </div>

            <div className="py-10">
              <span className="md:flex items-center gap-5">
                <GoDotFill className="hidden md:block"/>
                <h4>Islington Collage</h4>
                <p className="font-bold">
                  Important infomration about your applic....
                </p>
                <p>12/02/2024</p>
              </span>
            </div>
          </div>
        );

      case "collections":
        return (
          <div className="pt-8">
            <h3 className="font-bold text-xl pb-4">Favortie collages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={college.image}
                      alt={college.name}
                      className="w-full h-40 object-cover rounded-lg"
                      height={160}
                      width={300}
                    />
                    <button className="absolute top-2 right-2 bg-[#007296] p-2 rounded-full shadow">
                      <CiHeart className="text-white animate-heartbeat" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{college.name}</h3>
                    <p className="text-gray-600">{college.location}</p>
                    <div className="mt-2">
                      {college.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-500">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="md:px-5">
        <div className="bg-white">
          <div className="relative bg-gradient-to-br from-[#2d2e2f] via-[#5B666C] to-[#1C1F21] text-white rounded-xl lg:h-44 p-4 lg:flex flex-col md:flex-row md:justify-between md:items-end lg:pl-20">
            <div className="lg:flex items-center flex-grow">
              <div className="lg:border-4 border-blue-500 lg:bg-gray-100 rounded-full p-3 flex items-center justify-center lg:-mb-20 relative">
                <GiEgyptianProfile className="text-9xl  text-black" />
              </div>
              <div className="lg:ml-4 lg:pt-20 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold">
                  Birendra Bikram
                </h3>
                <p>@birendra</p>
              </div>
            </div>
            <div className="md:flex  gap-5  justify-center pl-20 md:pl-0 mt-4     flex-grow">
              <button className="bg-[#CBCBC9] text-black px-6 py-2 rounded-full flex items-center gap-2">
                <IoAddSharp className="text-xl" /> Public View
              </button>
              <button className="bg-[#CBCBC9] text-black px-6 py-2 rounded-full flex items-center gap-2 ">
                <GoPencil className="text-xl" /> Edit Profile
              </button>
            </div>
          </div>

          <div className="lg:flex">
            <div className="lg:pl-20 text-center lg:text-left lg:pb-10 flex-grow">
              <div className="lg:pt-30 pt-5">
                <h3 className="font-bold text-2xl pb-5">Student Details</h3>
                {studentDetails.map((detail, index) => (
                  <p
                    key={index}
                    className="flex gap-3 items-center pt-5 text-base md:pl-52 pl-20 lg:pl-0"
                  >
                    {detail.icon} {detail.label}
                  </p>
                ))}
              </div>

              <div className="pt-5 ">
                <h3 className="text-2xl font-bold pb-5">Student Preference</h3>
                <div className="flex flex-wrap gap-2 pl-10 lg:pl-0">
                  {studentPreferences.map((preference, index) => (
                    <button
                      key={index}
                      className="bg-gray-200 py-4 px-7 rounded-full border text-center"
                    >
                      {preference}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className=" ">
              <div >
                <div className="flex grid-col-3 font-bold lg:space-x-48 text-center px-10 py-10  justify-between">
                  <button
                    onClick={() => setActiveTab("academics")}
                    className={`pb-5 ${
                      activeTab === "academics"
                        ? "border-b-4 border-yellow-600"
                        : "opacity-50"
                    }`}
                  >
                    Academics
                  </button>
                  <button
                    onClick={() => setActiveTab("activity")}
                    className={`pb-5 ${
                      activeTab === "activity"
                        ? "border-b-4 border-yellow-600"
                        : "opacity-50"
                    }`}
                  >
                    Activity
                  </button>
                  <button
                    onClick={() => setActiveTab("collections")}
                    className={`pb-5 px-4 ${
                      activeTab === "collections"
                        ? "border-b-4 border-yellow-600"
                        : "opacity-50"
                    }`}
                  >
                    Collections
                  </button>
                </div>

                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
