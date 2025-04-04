import Image from "next/image";

const colleges = [
  "Canvas International College",
  "St. Xavier’s College",
  "Yeti International College",
  "National College",
  "Swastik College",
  "Central College",
  "Kathmandu Model College (KMC)",
  "Kathmandu College of Management (KCM)",
  "St. Lawrence College",
  "Islington College",
  "Prime College",
  "Thames International College",
];

export default function CollegeCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {colleges.map((college, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
        
          <div className="relative h-24 bg-blue-200 flex justify-center items-center">
            <Image
              src="/islington.png"
              alt="College Logo"
              width={50}
              height={100}
              className="absolute top-14 shadow-2xl rounded left-3"
            />
           
          </div>


          <div className="p-4 bg-gray-200">
            <h3 className="text-base font-bold text-[#007296] whitespace-normal">
              {college}
            </h3>
            <p className="text-sm ">
              Bagbazar, Kathmandu - London Met
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, qui! Repellat earum temporibus a corporis ullam praesentium iste amet et?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
