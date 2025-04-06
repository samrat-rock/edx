import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

function Cards() {
  return (
    <section className="flex-grow flex flex-col w-full">
      <div className="bg-white m-4 lg:h-40 flex-grow lg:flex items-center justify-between rounded-xl text-center lg:text-left py-5">
                                    
        <div className="text-6xl lg:pl-10 flex-grow flex items-center justify-center lg:justify-start">
          <IoPersonCircleSharp />
        </div>

      
        <div className="lg:py-10 lg:pl-10 px-8 flex-grow">
          <h3 className="lg:text-4xl text-2xl font-bold">Hello, Simmons!</h3>
          <p className="text-gray-600">
            Welcome todashboard! Your one-step hub for courses, progress tracking, and connections.
            Let&apos;s start your journey to knowledge and success!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
