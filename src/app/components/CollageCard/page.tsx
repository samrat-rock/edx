  "use client";

import Image from "next/image";
import Link from "next/link";

const colleges = [
  {
    name: "Canvas International College",
    slug: "canvas-international-college",
    location: "Bagbazar, Kathmandu",
    logo: "/canvas_logo.png",
    description: "Canvas is a reputed college offering diverse programs."
  },
  {
    name: "St. Xavier’s College",
    slug: "st-xaviers-college",
    location: "Maitighar, Kathmandu",
    logo: "/stx_logo.png",
    description: "St. Xavier's is known for academic excellence."
  },
  // Add other colleges here similarly...
];

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w]+/g, "-");

export default function CollegeCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {colleges.map((college, index) => (
        <Link
          key={index}
          href={`/colleges/${slugify(college.name)}`}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[1.01] transition"
        >
          <div className="relative h-24 bg-blue-200 flex justify-center items-center">
            <Image
              src={college.logo}
              alt={`${college.name} Logo`}
              width={50}
              height={100}
              className="absolute top-14 shadow-2xl rounded left-3"
            />
          </div>

          <div className="p-4 bg-gray-200">
            <h3 className="text-base font-bold text-[#007296] whitespace-normal">
              {college.name}
            </h3>
            <p className="text-sm">{college.location}</p>
            <p className="text-xs text-gray-600 mt-2">{college.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
