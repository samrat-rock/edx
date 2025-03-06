import Link from "next/link";
import { CiHome, CiTwitter, CiHeart } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", icon: <CiHome className="text-3xl" />, path: "/dashboard" },
  { name: "Application", icon: <ImProfile className="text-3xl" />, path: "/application" },
  { name: "Documents", icon: <CiTwitter className="text-3xl" />, path: "/documents" },
  { name: "Calendar", icon: <SlCalender className="text-3xl" />, path: "/calendar" },
  { name: "Recommendation", icon: <CiHeart className="text-3xl" />, path: "/recommendation" },
  { name: "College", icon: <CgProfile className="text-3xl" />, path: "/college" },
  { name: "Profile", icon: <CgProfile className="text-3xl" />, path: "/profile" },
];

const extraNavItems: NavItem[] = [
  { name: "Health and Support", path: "/healthsupport", icon: null },
  { name: "Get Edxplor App", path: "/edxplorapp", icon: null },
  { name: "Other links", path: "/otherlinks", icon: null },
];

function Sidenavbar() {
  return (
    <div className="hidden md:block w-80 h-screen bg-white p-6">
      <ul className="space-y-4 pl-10">
        {navItems.map((item, index) => (
          <li key={index} className="flex items-center gap-4 py-3">
            <Link href={item.path} className="flex items-center gap-4 w-full hover:text-blue-500">
              {item.icon}
              {item.name}
              <MdKeyboardArrowRight className="ml-auto text-2xl" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 my-6"></div>

      <ul className="space-y-4 pl-10">
        {extraNavItems.map((item, index) => (
          <li key={index} className="flex items-center gap-4 py-3">
            <Link href={item.path} className="hover:text-blue-500 flex items-center w-full">
              {item.name}
              <MdKeyboardArrowRight className="ml-auto text-2xl" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidenavbar;