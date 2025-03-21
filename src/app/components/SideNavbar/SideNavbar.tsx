import Link from "next/link";
import React from "react";
import { navItems } from "../Data/Page";

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

      

    
    </div>
  );
}

export default Sidenavbar;
