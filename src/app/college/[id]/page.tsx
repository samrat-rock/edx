"use client";
import { useParams } from "next/navigation";
import CollageComponents from '@/app/components/AboutCollage/collagecompoents/Page';
import Image from 'next/image';
import { useState } from 'react';

export default function CollegePage() {
  const params = useParams<{ id: string }>(); // Get dynamic route params
  const [activeSection, setActiveSection] = useState<string>('about');

  const colleges = [
    {
      id: "boston-1",
      name: "Boston",
      location: "Kamal Pokhari, Kathmandu",
      image: "/BostonCollege.jpg",
      details: ["Public", "65% Graduation rate", "01-5970012"]
    },
    {
      id: "abc-1",
      name: "ABC College",
      location: "New Baneshwor, Kathmandu",
      image: "/BostonCollege.jpg",
      details: ["Private", "75% Graduation rate", "01-4467890"]
    }
  ];

  const college = colleges.find((c) => c.id === params.id);

  if (!college) {
    return <p className="text-center text-xl mt-10">College not found</p>;
  }

  return (
    <>
      {/* College Header Section */}
      <div className="relative">
        <div className="bg-[url('/bg.jpg')] bg-cover lg:h-60 h-full bg-center rounded-b-lg rounded-t-lg relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
          <div className="relative lg:flex p-4 rounded-lg shadow-md">
            <Image
              src="/islington.png"
              alt="College Logo"
              width={180}
              height={100}
              className="mr-4 rounded-b ml-20"
            />
            <div className="text-white text-center lg:text-left">
              <h3 className="text-5xl font-bold pb-2 pt-5">{college.name}</h3>
              <p className="py-4 text-xl">{college.location}</p>
              <button className="mt-2 px-8 py-2 bg-orange-500 text-white text-xl rounded-md">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="lg:pt-16 pt-10 px-10 pb-10">
          <div className="lg:flex gap-40 text-center">
            <p
              className={`cursor-pointer px-4 ${activeSection === 'about' ? 'border-b-4 border-yellow-500 pb-2' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </p>
            <p
              className={`cursor-pointer px-4 ${activeSection === 'admission' ? 'border-b-4 border-yellow-500 pb-2' : ''}`}
              onClick={() => setActiveSection('admission')}
            >
              Admission
            </p>
          </div>
        </div>

        {activeSection === "about" && <CollageComponents params={params} activeSection={activeSection} />}
        
        {activeSection === "admission" && <CollageComponents params={params} activeSection={activeSection} />}
      </section>
    </>
  );
}
