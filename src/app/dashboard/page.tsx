  import React from "react";
  import Cards from "../components/cards/cards";
  import Image from "next/image";
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
  ];

  function Dashboard() {
    return (
      <section className="bg-gray-100 min-h-screen flex flex-col">
        <div className="py-5 flex-grow">
        
          <Cards />

          
          <div className="bg-white m-10 rounded-xl flex-grow flex flex-col">
            <div className="p-6  ">
            
<div className="w-full flex py-5">
  <h3 className="font-bold text-xl text-center pl-8 lg:pl-32">You&apos;ve applied to</h3>
</div>


              
              <div className="lg:flex flex-grow">
    <div className=" text-center flex-grow">
      <h3 className="text-8xl font-bold text-[#007296] leading-none pb-2 ">24</h3>
      <p className="text-xl pb-6">Colleges</p>
    </div>
    <div className=" lg:flex gap-5 flex-grow p-4">
      <div className="flex flex-col items-center justify-center rounded-md bg-green-100 flex-grow p-4 gap-3 m-5 lg:m-0">
        <span className="text-3xl text-[#027A48]">8</span>
        <span className="text-[#027A48]">Accepted</span>
      </div>
      <div className="flex flex-col items-center justify-center rounded-md bg-red-100 flex-grow p-4 gap-3 m-5 lg:m-0">
        <span className="text-3xl text-[#B42318]">2</span>
        <span className="text-[#B42318]">Rejected</span>
      </div>
      <div className="flex flex-col items-center justify-center rounded-md bg-gray-100 flex-grow p-4 gap-3 m-5 lg:m-0">
        <span className="text-3xl text-[#344054]">13</span>
        <span className="text-[#344054]">Pending</span>
      </div>
    </div>
  </div>

            </div>

          
            <div className="text-center lg:text-left flex-grow flex flex-col">
              <div className="lg:flex justify-between items-center lg:pl-36 pt-10 pb-5 text-center lg:text-left">
                <h3 className="text-2xl font-bold pl-5">Your Application</h3>
                <button className="font-bold text-xl text-[#007296] lg:pr-10">See all</button>
              </div>

            
              <div className="lg:flex gap-10 lg:pb-10 flex-grow">
                <div className="lg:pl-40 px-10 flex-grow">
                  <h3 className="font-bold pb-2 text-2xl">Accepted Application</h3>
                  <p>Kantipur College</p>
                  <p>St. Xavier College</p>
                </div>
                <div className="lg:px-20 py-10 lg:py-0 px-10 flex-grow">
                  <h3 className="font-bold pb-2 text-2xl">Rejected Application</h3>
                  <p>Kantipur College</p>
                  <p>St. Xavier College</p>
                </div>
                <div className="lg:px-20 px-10 flex-grow">
                  <h3 className="font-bold pb-2 text-2xl">Pending Application</h3>
                  <p>Kantipur College</p>
                  <p>St. Xavier College</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="lg:pl-10 flex-grow">
          <div className="text-center lg:text-left lg:pr-10">
            <div className="lg:flex  justify-between items-center  pt-10 pb-5 text-center lg:text-left">
              <h3 className="text-xl font-bold">Your Favorited Colleges</h3>
              <button className="font-bold text-xl text-[#007296]">View all</button>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  flex-grow px-10 lg:px-0">
              {colleges.map((college, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col flex-grow">
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
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold flex-grow">{college.name}</h3>
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
