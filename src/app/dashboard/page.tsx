import React from 'react';
import Cards from '../components/cards/cards';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";


const colleges = [
  { name: "Boston", location: "Kamal Pokhari, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "ABC College", location: "New Baneshwor, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "XYZ University", location: "Pulchowk, Lalitpur", image: "/BostonCollege.jpg" },
  { name: "PQR Institute", location: "Kirtipur, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "LMN Academy", location: "Maitighar, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "UVW College", location: "Dillibazar, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "RST University", location: "Thamel, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "OPQ College", location: "Boudha, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "Boston", location: "Kamal Pokhari, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "ABC College", location: "New Baneshwor, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "XYZ University", location: "Pulchowk, Lalitpur", image: "/BostonCollege.jpg" },
  { name: "PQR Institute", location: "Kirtipur, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "LMN Academy", location: "Maitighar, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "UVW College", location: "Dillibazar, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "RST University", location: "Thamel, Kathmandu", image: "/BostonCollege.jpg" },
  { name: "OPQ College", location: "Boudha, Kathmandu", image: "/BostonCollege.jpg" }
];


function Dashboard() {
  return (
    <section className='bg-gray-100'>
      <div className='py-5'>
        <Cards />

        <div className='lg:pl-20  '>
         <div className='bg-white m-10 lg:w-7xl rounded-xl'>
         <div className='p-6'>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-xl px-2 lg:pl-12'>You&apos;ve applied to</h3>
          </div>
          
           <div className='lg:pl-10  lg:flex gap-5 '>
            <div className='lg:pl-10 pt-5 text-center'>
              <h3 className='text-8xl font-bold text-[#007296]'>24</h3>
              <p className='lg:pt-8 text-xl'>Collages</p>
            </div>
          <div className='lg:pl-52 lg:flex gap-5  lg:h-52'>
          <div className="flex flex-col items-center justify-center lg:w-56  rounded-md bg-green-100 my-5 ">
        <span className="text-3xl text-[#027A48]">8</span>
        <span className="text-[#027A48]">Accepted</span>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-56   rounded-md bg-red-100  my-5 ">
        <span className="text-3xl  text-[#B42318]">2</span>
        <span className="text-[#B42318]">Rejected</span>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-56  rounded-md bg-gray-100  my-5 ">
        <span className="text-3xl  text-[#344054]">13</span>
        <span className="text-[#344054]">Pending</span>
      </div>
          </div>
           </div>
          </div>

          <div className='text-center lg:text-left'>
          <div className='lg:flex  justify-between items-center lg:px-20 pt-10 pb-5 text-center lg:text-left'>
            <h3 className='text-xl font-bold '>Your Application</h3>
            <button className='font-bold text-[#007296]'>See all</button>
          </div>
          
         <div className='lg:flex gap-10 lg:pb-10'>
         <div className='lg:px-20 px-10 '>
            <h3 className='font-bold pb-2 text-2xl '>Accepted Application</h3>
            <span className=''>
              <p >Kantipur Collage</p>
            <p>St.Xavier Collage</p>
            </span>
          </div>
          <div className='lg:px-20 py-10 lg:py-0 px-10 '>
            <h3 className='font-bold pb-2  text-2xl '>Rejected Application</h3>
            <span className=''>
              <p >Kantipur Collage</p>
            <p>St.Xavier Collage</p>
            </span>
          </div>
          <div className='lg:px-20 px-10 '>
            <h3 className='font-bold pb-2 text-2xl  '>Pending Application</h3>
            <span className=''>
              <p >Kantipur Collage</p>
            <p>St.Xavier Collage</p>
            </span>
          </div>
         </div>

          </div>
         </div>

         

       
          
          

          
        </div>


       
      </div>
      
     <div className='lg:pl-20'>
     <div className='text-center lg:text-left lg:pr-36'>
          <div className='lg:flex  justify-between items-center lg:px-20 pt-10 pb-5 text-center lg:text-left'>
            <h3 className='text-xl font-bold '>Your Favorited Collage</h3>
            <button className='font-bold text-[#007296]'>View all</button>
            
              
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-20">
                        {colleges.map((college, index) => (
                          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex-grow">
                            <div className="relative">
                              <Image
                                src={college.image}
                                alt={college.name}
                                className="w-full h-40 object-cover"
                                height={100}
                                width={300}
                              />
                              <button className="absolute top-2 right-2 bg-[#007296] p-2 rounded-full shadow">
                                <CiHeart className="text-white animate-heartbeat" />
                              </button>
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold">{college.name}</h3>
                              <p className="text-gray-600">{college.location}</p>
                            </div>
                          </div>
                        ))}
                      </div>
       

          </div>
     </div>
      
    </section>
  );
}

export default Dashboard;
