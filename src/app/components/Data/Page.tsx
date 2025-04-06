import { CiHome, CiTwitter, CiHeart } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
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
    { name: "Recommendation", icon: <CiHeart className="text-xl" />, path: "/recommendation" },
    { name: "Colleges", icon: <CgProfile className="text-xl" />, path: "/colleges" },
    { name: "Profile", icon: <CgProfile className="text-xl" />, path: "/profile" },
    { name: "Collageda", icon: <CgProfile className="text-xl" />, path: "/collageda" },
    { name: "Programs", icon: <CgProfile className="text-xl" />, path: "/programs" },
  ];
  
 



  
  export const colleges = [
    {
      name: "Kathmandu Medical College",
      slug: "kathmandu-medical-college",
      logo: "/EDlogo.png",
      imageUrl: "/BostonCollege.jpg",
      description:
        "Kathmandu Medical College is a leading medical institution affiliated with Tribhuvan University. It provides comprehensive medical education with state-of-the-art facilities and a dedicated faculty.",
      establishmentYear: 2010,
      location: "Kathmandu, Nepal",
      type: "Private Institution",
      graduationRate: "89%",
      phone: "9860591234",
      email: "info@kmc.edu.np",
      website: "www.kmc.edu.np",
      affiliation: "Tribhuvan University",
      programs: 23,
    },
    {
      name: "Pokhara University",
      slug: "pokhara-university",
      logo: "/images/pokhara-university-logo.png",
      imageUrl: "/images/pokhara-university.jpg",
      description:
        "Pokhara University is a well-established university in Nepal, offering a wide range of academic programs and known for its beautiful campus surrounded by natural beauty.",
      establishmentYear: 1996,
      location: "Pokhara, Nepal",
      type: "Public University",
      graduationRate: "92%",
      phone: "061-524347",
      email: "info@pu.edu.np",
      website: "www.pu.edu.np",
      affiliation: "Tribhuvan University",
      programs: 18,
    },
    {
      name: "Kathmandu Medical College",
      slug: "kathmandu-medical-college",
      logo: "/EDlogo.png",
      imageUrl: "/BostonCollege.jpg",
      description:
        "Kathmandu Medical College is a leading medical institution affiliated with Tribhuvan University. It provides comprehensive medical education with state-of-the-art facilities and a dedicated faculty.",
      establishmentYear: 2010,
      location: "Kathmandu, Nepal",
      type: "Private Institution",
      graduationRate: "89%",
      phone: "9860591234",
      email: "info@kmc.edu.np",
      website: "www.kmc.edu.np",
      affiliation: "Tribhuvan University",
      programs: 23,
    },
    {
      name: "Kathmandu Medical College",
      slug: "kathmandu-medical-college",
      logo: "/EDlogo.png",
      imageUrl: "/BostonCollege.jpg",
      description:
        "Kathmandu Medical College is a leading medical institution affiliated with Tribhuvan University. It provides comprehensive medical education with state-of-the-art facilities and a dedicated faculty.",
      establishmentYear: 2010,
      location: "Kathmandu, Nepal",
      type: "Private Institution",
      graduationRate: "89%",
      phone: "9860591234",
      email: "info@kmc.edu.np",
      website: "www.kmc.edu.np",
      affiliation: "Tribhuvan University",
      programs: 23,
    },
    {
      name: "Kathmandu Medical College",
      slug: "kathmandu-medical-college",
      logo: "/EDlogo.png",
      imageUrl: "/BostonCollege.jpg",
      description:
        "Kathmandu Medical College is a leading medical institution affiliated with Tribhuvan University. It provides comprehensive medical education with state-of-the-art facilities and a dedicated faculty.",
      establishmentYear: 2010,
      location: "Kathmandu, Nepal",
      type: "Private Institution",
      graduationRate: "89%",
      phone: "9860591234",
      email: "info@kmc.edu.np",
      website: "www.kmc.edu.np",
      affiliation: "Tribhuvan University",
      programs: 23,
    },
    
  ];



  export type FileType = "pdf" | "doc" | "txt";

export interface Document {
  name: string;
  type: FileType;
  size?: string;
  uploadedOn?: string;
}

export const documents: Document[] = [
  { 
    name: "certificate.pdf", 
    type: "pdf",
    size: "2.4 MB",
    uploadedOn: "2024-03-01"
  },
  { 
    name: "letter.doc", 
    type: "doc",
    size: "1.2 MB",
    uploadedOn: "2024-03-02"
  },
  { 
    name: "letter.doc", 
    type: "doc",
    size: "1.2 MB",
    uploadedOn: "2024-03-02"
  },
  { 
    name: "letter.doc", 
    type: "doc",
    size: "1.2 MB",
    uploadedOn: "2024-03-02"
  },
  { 
    name: "letter.doc", 
    type: "doc",
    size: "1.2 MB",
    uploadedOn: "2024-03-02"
  },
  { 
    name: "letter.doc", 
    type: "doc",
    size: "1.2 MB",
    uploadedOn: "2024-03-02"
  },
  { 
    name: "letter.doc", 
    type: "doc",
    size: "1.2 MB",
    uploadedOn: "2024-03-02"
  },
  { 
    name: "letter.doc", 
    type: "doc",
    size: "1.2 MB",
    uploadedOn: "2024-03-02"
  },
];


