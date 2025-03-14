import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiCircleAlert, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const colleges = [
  {
    id: "boston-1",
    name: "Boston",
    location: "Kamal Pokhari, Kathmandu",
    image: "/BostonCollege.jpg",
    details: ["Public", "65% Graduation rate", "01-5970012"],
  },
  {
    id: "abc-1",
    name: "ABC College",
    location: "New Baneshwor, Kathmandu",
    image: "/BostonCollege.jpg",
    details: ["Private", "75% Graduation rate", "01-4467890"],
  },
];

export default function CollegeDetail({ params }: { params: { id: string } }) {
  const college = colleges.find((c) => c.id === params.id);

  if (!college) {
    return <p className="text-center text-xl mt-10">College not found</p>;
  }

  return (
    <>
      <section>
        <div className="relative">
          <CiHeart className="absolute top-4 right-4 z-10 text-3xl bg-white bg-opacity-30 rounded-full p-2" />

          <div className="bg-[url('/bg.jpg')] bg-cover lg:h-60 h-full bg-center rounded-b-lg rounded-t-lg relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>

            <div className="relative lg:flex p-4 rounded-lg shadow-md ">
              <Image
                src="/islington.png"
                alt="College Logo"
                width={180}
                height={100}
                className="mr-4 rounded-b ml-20 "
              />

              <div className="text-white text-center lg:text-left ">
                <h3 className="text-5xl font-bold pb-2 pt-5">
                  Islington College
                </h3>
                <p className="py-4 text-xl">Kamal Marg, Kathmandu</p>
                <button className="mt-2 px-8 py-2 bg-orange-500 text-white text-xl rounded-md">
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-16 pt-10 pl-2">
          <div className="lg:flex gap-40 text-center">
            <p className="border-b-4 border-yellow-500 px-1 pb-5">About</p>
            <p className="px-4">Offered Programs</p>
            <p className="px-4">Admission</p>
          </div>
        </div>

        <div className="px-10 py-20">
          <h3 className="font-bold pb-3 px-18 lg:px-0">Overview</h3>
          <div>
            <ul className="lg:flex items-center gap-10">
              <li className="flex items-center font-bold px-10 lg:px-0">
                <CiCircleAlert className="mr-5" />
                Private <span className="pb-2 px-1">.</span>Large
                <span className="pb-2 px-1">.</span>Urban
              </li>
              <li className="flex items-center font-bold px-10">
                <BsTelephone className="mr-5" /> 01-5970012, 9860605959
              </li>
              <li className="flex items-center font-bold px-10">
                <BsTelephone className="mr-5" />
                ESTD 2002
              </li>
            </ul>
            <ul className="lg:flex items-center gap-10 py-10">
              <li className="flex items-center font-bold px-10 lg:px-0 ">
                <LuGraduationCap className="mr-5" />
                57% Graduation Rate
              </li>
              <li className="flex items-center font-bold px-10">
                <CiMail className="mr-5" /> info@islington.edu.np
              </li>
              <li className="flex items-center font-bold px-10">
                <CiMail className="mr-5" />
                islington.edu.np
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:px-10">
          <h3 className="font-bold pb-2">About College</h3>
          <div className="border border-gray-300">
            <p className="py-4 px-5">
              Islington College is a modern and best college in Nepal dedicated
              to excellence with practical-based education. Being an <br />
              institution with a long history, Islington College has developed
              many leaders and entrepreneurs. It assures that every student
              <br />
              is technically competent.
            </p>
            <div className="flex  p-4">
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
        </div>

        <div className="lg:px-10 pt-10">
          <h3 className="font-bold pb-2">Why this Collage</h3>
          <div className="border border-gray-300">
            <p className="py-4 px-5">
              Islington College is a modern and best college in Nepal dedicated
              to excellence with practical-based education. Being an <br />
              institution with a long history, Islington College has developed
              many leaders and entrepreneurs. It assures that every student
              <br />
              is technically competent.
            </p>
            <div className="flex  p-4">
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
        </div>
        <div className="lg:px-10 pt-10">
          <h3 className="font-bold pb-2">Services</h3>
          <div className="border border-gray-300">
            <div className="flex flex-wrap gap-3 p-5">
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Tutoring Service
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Career counseling
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Mentorship Programs
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Mentorship Programs
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Mentorship Programs
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Mentorship Programs
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Mentorship Programs
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Mentorship Programs
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Personal Development Workshops
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Internship Placement
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Financial Aid Guidance
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Job Search Support
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Job Search Support
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Job Search Support
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Job Search Support
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Job Search Support
              </span>
              <span className="px-4 py-2 border border-gray-300 rounded-md">
                Job Search Support
              </span>
            </div>
          </div>
        </div>

        <div className="lg:px-10 pt-10">
  <h3 className="font-bold pb-2">Location</h3>
  <div className="border border-gray-300 p-4">
    <p className="mb-4">Nepal, Bagmati, Kathmandu, Kamalmargha</p>
    <div className="w-full h-96"> 
      <iframe
        className="w-full h-full rounded-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4097034232993!2d85.32402607466265!3d27.7042015253829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ff1ee5ea4f%3A0x12e2dd8ed2d9a89d!2sIslington%20College!5e0!3m2!1sen!2snp!4v1710245723745!5m2!1sen!2snp"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>

<div className="lg:px-10 pt-10">
  <h3 className="font-bold pb-2">Social media</h3>
  <div className="flex items-center py-4  flex-wrap justify-around  ">
    <button className="flex items-center justify-center bg-blue-600 text-white px-10 py-2 rounded w-full sm:w-48">
      <CiFacebook className="mr-2" /> Facebook
    </button>
    <button className="flex items-center justify-center bg-red-500 text-white px-10 py-2 rounded w-full sm:w-48">
      <FaYoutube className="mr-2" /> YouTube
    </button>
    <button className="flex items-center justify-center text-white px-10 py-2 rounded w-full sm:w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
      <FaInstagram className="mr-2" /> Instagram
    </button>
    <button className="flex items-center justify-center bg-blue-400 text-white px-10 py-2 rounded w-full sm:w-48">
      <CiTwitter className="mr-2" /> Twitter
    </button>
  </div>
</div>







      </section>
    </>
  );
}
