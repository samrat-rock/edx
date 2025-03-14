"use client"
import Image from "next/image";
import React from "react";

interface Program {
  title: string;
  duration: string;
  startDate: string;
  description: string;
  category: "IT degree" | "Business Degree";
  image: string;
}

interface OfferedProgramsProps {
  collegeId: string;
}

const collegePrograms: { [key: string]: string[] } = {
  "boston-1": [
    "Bachelor in Computer Science",
    "Bachelor in Business Administration",
    "Master in Data Science",
  ],
  "abc-1": [
    "Bachelor in Information Technology",
    "MBA in Finance",
    "Diploma in Graphic Design",
  ],
  "bost": [
    "Bachelor in Computer Science",
    "Bachelor in Business Administration",
    "Master in Data Science",
  ],
  "sss": [
    "Bachelor in Information Technology",
    "MBA in Finance",
    "Diploma in Graphic Design",
  ],
};

const programDetails: { [key: string]: Program } = {
  "Bachelor in Computer Science": {
    title: "Bachelor in Computer Science",
    duration: "4 Years",
    startDate: "28 March, 2024",
    description: "Comprehensive computer science program covering modern technologies.",
    category: "IT degree",
    image: "/cs-program.jpg"
  },
  "Bachelor in Business Administration": {
    title: "Bachelor in Business Administration",
    duration: "4 Years",
    startDate: "15 April, 2024",
    description: "Business management and entrepreneurship development program.",
    category: "Business Degree",
    image: "/business-program.jpg"
  },
  "Master in Data Science": {
    title: "Master in Data Science",
    duration: "2 Years",
    startDate: "10 May, 2024",
    description: "Advanced data analysis and machine learning program.",
    category: "IT degree",
    image: "/data-science-program.jpg"
  },
  "Bachelor in Information Technology": {
    title: "Bachelor in Information Technology",
    duration: "4 Years",
    startDate: "20 April, 2024",
    description: "IT infrastructure and network management program.",
    category: "IT degree",
    image: "/it-program.jpg"
  },
  "MBA in Finance": {
    title: "MBA in Finance",
    duration: "2 Years",
    startDate: "1 June, 2024",
    description: "Advanced financial management and analysis program.",
    category: "Business Degree",
    image: "/mba-finance.jpg"
  },
  "Diploma in Graphic Design": {
    title: "Diploma in Graphic Design",
    duration: "1 Year",
    startDate: "15 May, 2024",
    description: "Professional graphic design and visual communication program.",
    category: "Business Degree",
    image: "/graphic-design.jpg"
  }
};

const OfferedPrograms: React.FC<OfferedProgramsProps> = ({ collegeId }) => {
  const programs = collegePrograms[collegeId].map(title => programDetails[title]);
  
  const categorizedPrograms = programs.reduce((acc, program) => {
    if (!acc[program.category]) {
      acc[program.category] = [];
    }
    acc[program.category].push(program);
    return acc;
  }, {} as { [key: string]: Program[] });

  return (
    <div className="p-6">
      {Object.entries(categorizedPrograms).map(([category, programs]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Changed to 2 columns */}
            {programs.map((program) => (
              <div key={program.title} className="border rounded-lg p-4 shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="relative h-40 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    className="rounded-t-lg object-cover"
                    layout="fill"
                  />
                </div>
                <div className="pt-4 flex-1">
                  <h3 className="text-lg font-semibold">{program.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {program.duration} - {program.startDate}
                  </p>
                  <p className="mt-2 text-sm line-clamp-3">{program.description}</p>
                </div>
                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors">
                  View details
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};



export default OfferedPrograms;