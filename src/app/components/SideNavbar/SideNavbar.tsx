import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { navItems, extraNavItems } from "../Data/Page";

function Sidenavbar() {
  return (
    <div className="hidden md:block w- h-screen bg-white p-6">
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li key={index} className="flex items-center gap-4 py-3">
            <Link href={item.path} className="flex items-center gap-4 w-full hover:text-blue-500">
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 my-6"></div>

      <ul className="space-y-4">
        {extraNavItems.map((item, index) => (
          <li key={index} className="flex items-center gap-4 py-3">
            <Link href={item.path} className="hover:text-blue-500 flex items-center w-full">
              {item.name}
              <MdKeyboardArrowRight className="ml-auto text-xl" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidenavbar;
