"use client";
import Image from "next/image";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuDot } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const servicesArray = [
  {
    title: "Tutoring Service",
  },
  {
    title: "Career Counseling",
  },
  {
    title: "Mentorship Programs",
  },
  {
    title: "Tutoring Service",
  },
  {
    title: "Tutoring Service",
  },
  {
    title: "Tutoring Service",
  },
  {
    title: "Tutoring Service",
  },

  {
    title: "Personal Development Workshops",
  },
  {
    title: "Internship Placement",
  },
  {
    title: "Financial Aid Guidance",
  },
  {
    title: "Job Search Support",
  },
];

type CollageComponentsProps = {
  params: { id: string };
  activeSection: string;
};

function CollageComponents({ activeSection }: CollageComponentsProps) {
  return (
    <>
      <section>
        {activeSection === "about" && (
          <div className="lg:px-10">
            <div>
              <span className="font-bold text-xl ">OverView</span>
              <ul className="flex gap-10 font-bold  pt-5">
                <li className="flex items-center gap-1 ">
                  <MdErrorOutline className="mr-2" />
                  Private
                  <LuDot className="mr-2" />
                  Large
                  <LuDot className="mr-2" />
                  Urban
                </li>
                <li className="flex items-center gap-1">
                  <BsTelephone className="mr-2" />
                  01-5970012,9860605959
                </li>
                <li className="flex items-center gap-1">
                  <BsTelephone className="mr-2" /> ESTD 2002
                </li>
              </ul>
              <ul className="flex gap-10 font-bold py-8 ">
                <li className="flex items-center gap-2  ">
                  <FaGraduationCap className="mr-2" />
                  57% Graduation Rate
                </li>
                <li className="flex items-center gap-2 pl-10">
                  <CiMail className="mr-2" />
                  info@islington.edu.np
                </li>
                <li className="flex items-center gap-2 pl-2">
                  <CiMail className="mr-2" />
                  islington.np
                </li>
              </ul>
            </div>
            <div className="border border-gray-300">
              <h3 className="font-bold pb-2 pt-4 px-5">About College</h3>
              <p className="py-4 px-5">
                This is a modern and one of the best colleges in Nepal dedicated
                to excellence with practical-based education. Being an
                institution with a long history, it has developed many leaders
                and entrepreneurs. It assures that every student is technically
                competent.
              </p>
              <div className="flex p-4">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
                  <iframe
                    className="lg:w-4xl h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96"
                    src="https://www.youtube.com/embed/kaHDlzuyK_Y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 mt-10">
              <h3 className="font-bold pb-2 pt-4 px-5">Why This College</h3>
              <p className="py-4 px-5">
                This is a modern and one of the best colleges in Nepal dedicated
                to excellence with practical-based education. Being an
                institution with a long history, it has developed many leaders
                and entrepreneurs. It assures that every student is technically
                competent.
              </p>
              <div className="flex p-4">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
                  <iframe
                    className="lg:w-4xl h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96"
                    src="https://www.youtube.com/embed/kaHDlzuyK_Y"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <h3 className="font-bold pb-2 pt-4 px-5">Services</h3>
              <div className="border border-gray-300 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
                  {servicesArray.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-2 rounded-lg  border border-gray-200"
                    >
                      <h4 className="text-center">{service.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3">
              <h3 className="font-bold pb-1 pt-4 px-5">Location</h3>
              <div className="border border-gray-300 mt-3 mb-5">
                <div className="p-5">
                  <div className="w-full h-96 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.287559169117!2d85.3204703150614!3d27.67509838280271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c0d1474c7b%3A0x6b8b5e9e72b6a6e4!2sIslington%20College!5e0!3m2!1sen!2snp!4v1621234567890!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="lg:font-bold">Social meida</h3>
              <div className="flex justify-between rounded-lg gap-2 py-3">
                <button className="bg-blue-500 text-white py-1 px-10 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                  <CiFacebook /> Facebook
                </button>
                <button className="bg-red-500 text-white py-1 px-10 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2">
                  <AiOutlineYoutube /> Youtube
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-[#F7543B] text-white py-1 px-10 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                  <FaInstagram /> Instagram
                </button>
                <button className="bg-[#1DA1F2] text-white py-1 px-10 rounded-lg hover:bg-[#1991db] transition-colors flex items-center gap-2">
                  <CiTwitter /> Twitter
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === "admission" && (
          <div className="lg:px-10 py-10 ">
            <h3 className="font-bold pb-5 text-center text-3xl">IT Degree</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:px-20">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="lg:max-w-4xl mx-auto bg-[#FAFAFA] shadow-lg border border-gray-300 rounded-lg p-5"
                >
                  <Image
                    src="/BostonCollege.jpg"
                    alt="IT Degree"
                    className="w-full h-48 object-cover rounded-md"
                    height={100}
                    width={300}
                  />
                  <h4 className="text-xl font-bold mt-3 text-[#007296]">
                    BSc Hons Computing
                  </h4>
                  <p className="text-gray-600 text-sm flex items-center gap-1 border-b border-gray-200 pb-2">
                    {" "}
                    <CiClock1 />3 Years <RiCalendarScheduleLine /> Kathmandu,
                    Nepal
                  </p>
                  <p className="text-gray-700 text-sm mt-2  pb-5">
                    Bsc (Hons) Computing, a 3 year IT course in Nepal is a
                    unique blend of pratical and theoretical learning that lays
                    primary focus on the techniques, theory and application
                    along with interpersonal, team working and IT skills
                  </p>
                  <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md">
                    View details
                  </button>
                </div>
              ))}
            </div>

            <h3 className="font-bold pb-5 pt-10 text-center text-3xl">
              Business Degree
            </h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:px-20">
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="lg:max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-300 p-5"
                >
                  <Image
                    src="/business-degree.jpg"
                    alt="Business Degree"
                    className="w-full h-48 object-cover rounded-md"
                    height={100}
                    width={200}
                  />
                  <h4 className="text-xl font-bold mt-3 text-[#007296]">
                    BBA Hons Business
                  </h4>
                  <p className="text-gray-600 text-sm flex items-center gap-1 border-b border-gray-200 pb-2">
                    <CiClock1 />4 Years <RiCalendarScheduleLine /> Kathmandu,
                    Nepal
                  </p>
                  <p className="text-gray-700 text-sm mt-2 pb-4">
                    Bsc (Hons) Computing, a 3 year IT course in Nepal is a
                    unique blend of pratical and theoretical learning that lays
                    primary focus on the techniques, theory and application
                    along with interpersonal, team working and IT skills
                  </p>
                  <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md">
                    View details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default CollageComponents;
