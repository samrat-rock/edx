"use client"
import React from 'react';
import CollegeCards from '../components/CollageCard/page';



const CollegePage = () => {
  

  return (
    <section className="bg-gray-200 p-3">
      <div className='bg-white rounded '>
      <div className='p-5 font-bold flex justify-between items-center'>
        <h3 className=' text-xl'>Programs</h3>
        <input
        type="text"
        placeholder="Search Document"
        className="border border-gray-200 px-3 py-1 rounded-md w-60 lg:w-2xl bg-gray-100"
      />
     
      </div>
      
      <div className='border border-gray-200 mx-3 '></div>

      <CollegeCards/>
     

      
     

    
    
      </div>
    </section>
  );
};

export default CollegePage;
