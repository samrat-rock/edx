"use client";

import Image from "next/image";
import Link from "next/link";
import SearchButton from "@/app/components/SearchButton/SearchButton";

// data/colleges.ts
export const colleges = [
  {
    name: "Kathmandu Medical College",
    slug: "kathmandu-medical-college",
    logo: "/images/kmc-logo.png",
    imageUrl: "/BostonCollege.jpg",
    description:
      "Kathmandu Medical College is a leading medical institution affiliated with Tribhuvan University. It provides comprehensive medical education with state-of-the-art facilities and a dedicated faculty.",
    establishmentYear: 2010,
    location: "Kathmandu, Nepal",
    type: "Private Institution",
    graduationRate: "89%",
    phone: "9860591234",
    email: "info@kmc.edu.np",
    website: "www.kmc.edu.np",
    affiliation: "Tribhuvan University",
    programs: 23,
  },
  {
    name: "Pokhara University",
    slug: "pokhara-university",
    logo: "/images/pokhara-university-logo.png",
    imageUrl: "/images/pokhara-university.jpg",
    description:
      "Pokhara University is a well-established university in Nepal, offering a wide range of academic programs and known for its beautiful campus surrounded by natural beauty.",
    establishmentYear: 1996,
    location: "Pokhara, Nepal",
    type: "Public University",
    graduationRate: "92%",
    phone: "061-524347",
    email: "info@pu.edu.np",
    website: "www.pu.edu.np",
    affiliation: "Tribhuvan University",
    programs: 18,
  },
  // Add more colleges here with `slug` and `programs`
];


export default function CollegeList() {
  return (
    <>
      <div className="md:flex items-center px-2">
        <div className="p-3 lg:flex flex-grow gap-3 items-center text-center">
          <h3 className="md:font-bold font-bold text-nowrap pb-4 lg:pb-0 text-3xl lg:text-base">
            Colleges
          </h3>
        </div>
        <div className="pl-3 py-4 pr-3">
          <SearchButton />
        </div>
      </div>
      <div className="border border-gray-200 mx-5 "></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {colleges.map((college) => (
          <Link key={college.slug} href={`/colleges/${college.slug}`}>
            <div className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="relative h-24 bg-blue-200 flex justify-center items-center">
                <Image
                  src={college.logo}
                  alt={`${college.name} Logo`}
                  width={50}
                  height={100}
                  className="absolute top-14 shadow-2xl rounded left-3"
                />
                <p className="text-xs font-semibold text-[#E66E19] bg-[#FFF5EE] px-3 py-1 rounded-lg absolute top-21 right-3">
                  {college.programs} Programs
                </p>
              </div>
              <div className="p-4 bg-gray-200">
                <h3 className="text-base font-bold text-[#007296] whitespace-normal">
                  {college.name}
                </h3>
                <p className="text-sm">{college.location}</p>
                <p className="text-xs text-gray-600 mt-2">Click to view details</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
