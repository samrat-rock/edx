import React from 'react';
import SearchButton from '../components/SearchButton/SearchButton';
import { TbFileTypePdf } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";


interface Document {
  id: number;
  name: string;
  type: string;
  lastModified: string;

  description: string;
}

const documents: Document[] = [
  {
    id: 1,
    name: "High School Certificate.pdf",
    type: "High School Certificate",
    lastModified: "15th March, 2024",
    
    description: "Official academic record",
  },
  {
    id: 2,
    name: "High School Certificate.pdf",
    type: "High School Certificate",
    lastModified: "16th March, 2024",
  
    description: "Professor recommendation",
  },
  {
    id: 3,
    name: "High School Certificate.pdf",
    type: "High School Certificate",
    lastModified: "17th March, 2024",
  
    description: "Recent passport photo",
  },
  {
    id: 4,
    name: "High School Certificate.pdf",
    type: "High School Certificate",
    lastModified: "17th March, 2024",
  
    description: "Recent passport photo",
  },
  {
    id: 5,
    name: "High School Certificate.pdf",
    type: "High School Certificate",
    lastModified: "17th March, 2024",
  
    description: "Recent passport photo",
  },
 
  {
    id: 6,
    name: "High School Certificate.pdf",
    type: "High School Certificate",
    lastModified: "17th March, 2024",
  
    description: "Recent passport photo",
  },
  
];

function Page() {
  return (
    <>
      <section className="bg-gray-100 p-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Documents</h3>
              <p className="bg-[#F9F5FF] text-[#0295A9] rounded-full px-3 py-1 text-sm">
                {documents.length} documents found
              </p>
            </div>
            
            <div className="flex gap-4 items-center">
              <SearchButton />
              <button className="bg-[#E66E19] text-white px-5 py-2 rounded text-sm font-medium">
                + Add Document
              </button>
            </div>
          </div>

          <div className="overflow-x-auto max-w-full py-5">
            <table className="w-full min-w-max border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left text-sm font-semibold text-gray-500">
                    Document
                  </th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-500 hidden md:table-cell">Type</th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-500 hidden lg:table-cell">Description</th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-500 hidden sm:table-cell">Uploaded Date</th>
               
                  <th className="p-3 text-left text-sm font-semibold text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((item, index) => {
                  const displayName = item.name.endsWith('.pdf') 
                    ? item.name.slice(0, -4) 
                    : item.name;
                  
                  return (
                    <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="p-3">
                        <div className="flex items-center gap-3 font-bold">
                          <div className={`w-8 h-8 rounded flex items-center  justify-center ${
                            item.name.endsWith('.pdf') ? " text-red-500 " : 
                            "bg-gray-50 text-gray-500"
                          }`}>
                            {item.name.endsWith('.pdf') ? (
                              <TbFileTypePdf className="h-5 w-5" />
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="font-medium text-gray-900">{displayName}</span>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-gray-600 hidden md:table-cell">{item.type}</td>
                      <td className="p-3 text-sm text-gray-600 hidden lg:table-cell">{item.description}</td>
                      <td className="p-3 text-sm text-gray-600 hidden sm:table-cell">{item.lastModified}</td>
                     
                      <td className="p-3 text-center">
                                   <button className="text-gray-600 hover:text-gray-800">
                                     <HiOutlineDotsVertical size={18} />
                                   </button>
                                 </td>
                    </tr>
                  );
                })}
              </tbody>
            </table> 
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;