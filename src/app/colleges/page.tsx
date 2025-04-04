import Image from "next/image";
import Link from "next/link";
import SearchButton from "../components/SearchButton/SearchButton";

const colleges = [
  { name: "Canvas International College", slug: "canvas-international-college" },
  { name: "St. Xavier’s College", slug: "st-xaviers-college" },
  { name: "Yeti International College", slug: "yeti-international-college" },
  { name: "National College", slug: "national-college" },
  { name: "Swastik College", slug: "swastik-college" },
  { name: "Central College", slug: "central-college" },
  { name: "Kathmandu Model College (KMC)", slug: "kmc" },
  { name: "Kathmandu College of Management (KCM)", slug: "kcm" },
  { name: "St. Lawrence College", slug: "st-lawrence-college" },
  { name: "Islington College", slug: "islington-college" },
  { name: "Prime College", slug: "prime-college" },
  { name: "Thames International College", slug: "thames-international-college" },
];

export default function CollegeList() {
  return (
    <>
    <div className="md:flex items-center px-2">
    <div className="p-3 lg:flex flex-grow gap-3 items-center text-center">
      <h3 className="md:font-bold font-bold text-nowrap pb-4 lg:pb-0 text-3xl lg:text-base">
        Collages
      </h3>
      
    </div>
    <div className="pl-3 py-4 pr-3">
      <SearchButton  />
    </div>

  </div>
  <div className="border border-gray-200 mx-5 "></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {colleges.map((college) => (
        <Link key={college.slug} href={`/colleges/${college.slug}`}>
          <div className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-24 bg-blue-200 flex justify-center items-center">
              <Image
                src="/islington.png"
                alt="College Logo"
                width={50}
                height={100}
                className="absolute top-14 shadow-2xl rounded left-3"
              />
              <p className="text-xs font-semibold text-[#E66E19] bg-[#FFF5EE] px-3 py-1 rounded-lg absolute top-21 right-3">
                23 Programs
              </p>
            </div>
            <div className="p-4 bg-gray-200">
              <h3 className="text-base font-bold text-[#007296] whitespace-normal">
                {college.name}
              </h3>
              <p className="text-sm">Bagbazar, Kathmandu - London Met</p>
              <p className="text-xs text-gray-600 mt-2">
                Click to view details
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}
