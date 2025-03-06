import Image from 'next/image';
import { FaRegBell } from "react-icons/fa";
import { GiEgyptianProfile } from "react-icons/gi";
import React from 'react';

function Navbar() {
  return (
    <nav className="hidden md:flex justify-between items-center px-20 py-4 bg-white border-b border-gray-200">
      <div>
        <Image src="/EDlogo.png" alt='logo' height={100} width={200} />
      </div>
      <div className="flex items-center gap-8">
        <div className="bg-[#F6F6F6] rounded-full p-4">
          <FaRegBell className="text-3xl cursor-pointer animate-ring" />
        </div>
        <div className="bg-[#F6F6F6] rounded-full p-4">
          <GiEgyptianProfile className="text-3xl cursor-pointer bg-[#F6F6F6]" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
