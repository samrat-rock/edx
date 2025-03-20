import { CiHome, CiTwitter, CiHeart } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

export interface Application {
    id: string;
    college: string;
    address: string;
    course: string;
    date: string;
    status: "Approved" | "Rejected";
  }
  
  export const applications: Application[] = [
    {
      id: "#3066",
      college: "Islington College",
      address: "Kathmandu, Nepal",
      course: "Bsc.(Hons) Computing",
      date: "Jan 6, 2022",
      status: "Approved",
    },
    {
      id: "#3065",
      college: "CSU Chico",
      address: "Chico, CA, USA",
      course: "Multimedia",
      date: "Jan 6, 2022",
      status: "Approved",
    },
    {
      id: "#3064",
      college: "University of Texas Austin",
      address: "Austin, TX, USA",
      course: "Bsc.(Hons) Computing",
      date: "Jan 6, 2022",
      status: "Approved",
    },
    {
      id: "#3063",
      college: "London Met Uni",
      address: "London, UK",
      course: "ACCA",
      date: "Jan 5, 2022",
      status: "Approved",
    },
    {
      id: "#3062",
      college: "Little Angels’ College",
      address: "Lalitpur, Nepal",
      course: "BBA (Marketing)",
      date: "Jan 5, 2022",
      status: "Rejected",
    },
    {
        id: "#3063",
        college: "London Met Uni",
        address: "London, UK",
        course: "ACCA",
        date: "Jan 5, 2022",
        status: "Approved",
      },
      {
        id: "#3063",
        college: "London Met Uni",
        address: "London, UK",
        course: "ACCA",
        date: "Jan 5, 2022",
        status: "Approved",
      },
      {
        id: "#3063",
        college: "London Met Uni",
        address: "London, UK",
        course: "ACCA",
        date: "Jan 5, 2022",
        status: "Approved",
      },
      {
        id: "#3063",
        college: "London Met Uni",
        address: "London, UK",
        course: "ACCA",
        date: "Jan 5, 2022",
        status: "Approved",
      },
  ];
  

  export interface NavItem {
    name: string;
    icon: React.ReactNode;
    path: string;
  }
  
  export  const navItems: NavItem[] = [
    { name: "Dashboard", icon: <CiHome className="text-xl" />, path: "/dashboard" },
    { name: "Application", icon: <ImProfile className="text-xl" />, path: "/application" },
    { name: "Documents", icon: <CiTwitter className="text-xl" />, path: "/documents" },
    { name: "Calendar", icon: <SlCalender className="text-xl" />, path: "/calendar" },
    { name: "Recommendation", icon: <CiHeart className="text-xl" />, path: "/recommendation" },
    { name: "College", icon: <CgProfile className="text-xl" />, path: "/college" },
    { name: "Profile", icon: <CgProfile className="text-xl" />, path: "/profile" },
  ];
  
  export  const extraNavItems: NavItem[] = [
    { name: "Health and Support", path: "/healthsupport", icon: null },
    { name: "Get Edxplor App", path: "/edxplorapp", icon: null },
    { name: "Other links", path: "/otherlinks", icon: null },
  ];




  
  export const colleges = [
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
    },
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