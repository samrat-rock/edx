"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { CiShare1 } from "react-icons/ci";
import { FaCalendarAlt, FaGraduationCap, FaRegEnvelope, FaGlobeAmericas } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { LiaUniversitySolid } from "react-icons/lia";
import SearchButton from '../components/SearchButton/SearchButton';
import CollageCard from '../components/CollageCard/page'

const CollegePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const infoColumns = [
    [
      { icon: <LiaUniversitySolid />, text: "Tribhuvan University Affiliated" },
      { icon: <FaCalendarAlt />, text: "Established 2010 AD" },
      { icon: <HiOutlineBuildingOffice2 />, text: "Private Institution" }
    ],
    [
      { icon: <FaGraduationCap />, text: "89% Graduation Rate" },
      { icon: <HiOutlineLocationMarker />, text: "Kathmandu, Nepal" },
      { icon: <IoPhonePortraitOutline />, text: "9860591234" }
    ],
    [
      { icon: <GiRotaryPhone />, text: "01-4441577" },
      { icon: <FaRegEnvelope />, text: "Example@kmc.edu.np" },
      { icon: <FaGlobeAmericas />, text: "www.kmc" }
    ]
  ];

  return (
    <section className="bg-gray-200 p-3">
      <div className='bg-white rounded '>
        <div className="relative">
          <div 
            className="bg-cover bg-center bg-no-repeat h-52 rounded flex items-center justify-center relative" 
            style={{ backgroundImage: "url('/BostonCollege.jpg')" }}
          >
          </div>

          <div className="flex items-center justify-between mt-4 px-4 w-full">
  <div className="flex items-center">
    <div className="bg-white p-2 md:w-34 md:h-34 absolute md:top-40 md:left-10 shadow-lg md:flex items-center justify-center rounded overflow-hidden">
      <Image 
        src="/EDlogo.png" 
        alt="College Logo" 
        width={150} 
        height={80}
        className="rounded"
      />
    </div>

    <div className='lg:pl-52 py-3'>
      <h3 className="lg:text-3xl font-semibold">Kathmandu Model College</h3>
      <p className='text-[#606060]'>Tribhuvan University Affiliated</p>
    </div>
  </div>

  <div className='lg:pr-7'>
    <button className="bg-[#F1F1F1] text-sm px-3 py-1 rounded shadow flex items-center gap-2">
      <CiShare1 /> Share This college
    </button>
  </div>
</div>
        </div>

        <div className='px-10 py-10'>
          <div className='bg-[#FAFAFA] p-4 rounded-lg flex justify-between'>
            {infoColumns.map((column, colIdx) => (
              <div key={colIdx}>
                <ul>
                  {column.map((item, idx) => (
                    <li key={idx} className={`py-2 ${item.icon ? 'flex items-center gap-3 text-[#4E4E4E]' : ''}`}>
                      {item.icon && <span className="text-[#E66E19] text-xl">{item.icon}</span>}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      
        <div className='px-10 py-5 flex justify-between items-center'>
          <div className="flex gap-6">
            <button
              className={`px-6 py-2 rounded ${activeTab === 'about' ? 'bg-[#FDF1E9] text-[#E97E33]' : 'text-[#606060]'}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={`px-6 py-2 rounded ${activeTab === 'programs' ? 'bg-[#FDF1E9] text-[#E97E33]' : 'text-[#606060]'}`}
              onClick={() => setActiveTab('programs')}
            >
              Programs
            </button>
          </div>
          
          {activeTab === 'programs' && (
            <div className="flex gap-4">
              <SearchButton />
              <button className='bg-[#E6F1F5] text-[#007296] px-5 rounded-lg '>Search</button>
            </div>
          )}
        </div>

    
      <div className='px-10 pb-10'>
  {activeTab === 'about' && (
    <div className='py-5'>
      <h2 className='text-2xl font-bold mb-3 text-[#007296]'>About Kathmandu Model College</h2>
      <p className='text-[#606060] lg:text-justify'>
        Located in the heart of the Kathmandu metropolis, specifically in Bogbozar, Kathmandu Model College is a prestigious educational institution that has established itself as a premier academic hub for students aspiring to receive top-notch higher education in Nepal. Since its inception in 2000 A.D., the college has successfully carved out a distinguished reputation as one of the best +2 schools in the country.
      </p>
      <p className='mt-8 text-[#606060] lg:text-justify'>
        Over the course of nearly two decades, the college has earned a position of pride and stands out prominently for its exceptional academic standards throughout the nation. The institution has consistently renovated and upgraded its facilities, fostering a technologically advanced and welcoming academic environment that is conducive to effective teaching and learning. The college&apos;s continuous pursuit of excellence in professional education has played a pivotal role in shaping its current standing within the academic sphere.
      </p>
      
      
      <div className="mt-8">
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            className="w-full md:h-96" 
            src="https://www.youtube.com/embed/hf-VSQSU4-4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>


      <div className="mt-8">
        <h3 className='text-xl font-semibold mb-3 text-[#007296]'>Scholarship Information</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-decimal space-y-3 text-[#606060] pl-5">
            <li>Scholarships will only be provided on semester tuition fees on the basis of previous semester academic performance.</li>
            <li>100% worth of scholarship will be allocated equivalent to 7% of the total student number in a cohort/batch of a course.</li>
            <li>1 student will be eligible for 100% scholarship</li>
            <li>2 students will be eligible for 50% scholarship</li>
            <li>25% scholarship will be allocated to the students equivalent to the remaining 100% worth of scholarship.</li>
            <li>In the case of equal academic performance amongst students, other behavioral aspects such as class attendance will be considered.</li>
            <li>If none of the female students fall under 100% and 50% scholarship quota, 1 female student with the highest academic performance amongst female students will be eligible for 50% scholarship.</li>
          </ul>
          <div className="mt-4 font-medium text-[#4E4E4E]">
            Net worth 100% scholarship quota: 14 (7% of the total student number)
          </div>
        </div>
      </div>

      
      <div className="mt-8">
        <h3 className='text-2xl font-bold mb-3 text-[#007296] #606060'>Admission Guidelines</h3>
        
        <div className=" py-2 ">
        <div className='bg-[#FAFAFA]'>  
          <h4 className='mb-3 text-[#606060] lg:py-4 lg:pl-5'>Admission procedure in Science</h4>

        </div>
          
         <div className='bg-[#FAFAFA] py-4 px-5'>
         <h4 className='text-lg  mb-3 font-bold'>Admission procedure in Management, Law and Humanities</h4>
          
         <ol className="list-decimal space-y-4 text-[#606060] pl-5 py-5">
  <li>
    <span>Entrance form fill up</span>
    <p className='mt-2'>
      Student should fill up online admission form which will be available on the college&apos;s website after the announcement of the grade IQ (SEE) results. Student securing at least CGPA 2.85 and 8 plus grade each in Science, Mathematics, Optional Mathematics and English will be eligible to fill up the form. Students who have passed SEE without Optional mathematics are ineligible to fill up the form. The prospectus, fee structure, model questions, entrance center, entrance symbol number, entrance date, and time will be sent to your registered email ID. Along with the application form students should attach a recently taken photograph with a white background.
    </p>
  </li>

  <li>
    <span >Entrance Exam:</span>
    <ol className="list-decimal space-y-2 mt-2 ">
      <li>KMC will set an entrance exam. The date, time, and center of the entrance exam will be sent to your email.</li>
      <li>Entrance exam will be paper based, model questions will be provided through email.</li>
      <li>Entrance questions include English 20 marks, Science 40 marks and Mathematics 40 marks.</li>
      <li>Results of entrance will be published after 2nd day of the examination or informed during examination.</li>
      <li>Students who are listed in merit list (all the entrance passed students may not include in merit list) are informed to either direct admission or an interview. Date of the interview will be given along with result.</li>
    </ol>
  </li>

  <li>
    <span >Admission:</span>
    <ol className="list-decimal space-y-2 mt-2 ">
      <li>Students who are enlisted in direct admission from entrance result should not appear for interview. They can get admitted directly within deadline. Those students who are listed for interview can get admission only when they pass the interview.</li>
      <li>KMC will publish a higher number of students on the merit list than its intake capacity so students are advised to secure admission before the seats are filled.</li>
      <li>KMC will provide scholarships to deserving students on a first-come, first-served basis. Students are advised to secure admission before the scholarship quota is filled (refer to the scholarship section for details).</li>
      <li className='py-10'>Please ensure that you have accurate knowledge about the fee structure, scholarships, and payment process.</li>
    </ol>
  </li>
</ol>

         </div>
        </div>
      </div>

      <div>
        <h3 className='text-[#007296] font-bold text-xl'>Message from the Chairman</h3>
        <div  className='md:flex gap-5 py-5' >
          <Image src="/Nihar-Malaviya.jpg" alt='' width={200} height={100}/>
          <p className='text-justify'>  There is an excellent scope in Nepal for students who want to pursue their career in Information Technology.
      The global demand for highly qualified IT professionals is increasing rapidly, and Nepal cannot be left
      untouched. Over the past decade, Nepal has seen a growing number of investments from national and
      multinational companies. Business Process Outsourcing (BPO) has flourished, which has increased  employment
      opportunities for the youth of Nepal who would like to make a rewarding career out of it.</p>
          </div>
        
      </div>

      <div className=' py-5'>
          <h2 className='text-2xl font-bold text-[#007296]'>Campus Facilities & Infrastructure</h2>
          <ul className='mt-3 space-y-2'>
            {['Hostel', 'Library', 'Cafeteria', 'Sports', 'Computer Labs', 'Health Care', 'Transportation', 'So on'].map((item, idx) => (
              <li key={idx} className='bg-[#FAFAFA] p-3 rounded shadow'>{item}</li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className=' py-5'>
          <h2 className='text-2xl font-bold text-[#007296]'>FAQs</h2>
          <ul className='mt-3 space-y-2'>
            {[
              "What programs and courses does the college offer?",
              "What is the admission process and eligibility criteria?",
              "Does the college offer scholarships or financial aid?",
              "What are the placement and internship opportunities?"
            ].map((faq, idx) => (
              <li key={idx} className='bg-[#FAFAFA] p-3 rounded shadow'>{faq}</li>
            ))}
          </ul>
        </div>

        <div className='py-5'>
  <h2 className='text-2xl font-bold text-[#007296]'>Location</h2>
  <div className='mt-3'>
    <iframe 
      className="w-full h-96 rounded-lg shadow-lg" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.546134334213!2d85.3179!3d27.7025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1919b9392b4b%3A0x2a7b9e5b939f91c!2sKathmandu%20Model%20College%20(KMC)!5e0!3m2!1sen!2snp!4v1712198734567!5m2!1sen!2snp" 
      
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>

       
    </div>
  )}

  {activeTab === 'programs' && (
  
    
     <div>
     <CollageCard/>
      </div>
      
  
  )}
</div>
      </div>
    </section>
  );
};

export default CollegePage;
