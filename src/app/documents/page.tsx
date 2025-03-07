"use client"
import React, { useState } from "react";
import UploadButton from "../components/UplaodButton/page";
import GridButton from "../components/gridbutton/GridButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegFilePdf, FaRegFileWord, FaRegFileAlt, FaRegFile } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

type FileType = "pdf" | "doc" | "txt";

const documents = [
  { name: "certificate.pdf", type: "pdf" as FileType },
  { name: "letter.doc", type: "doc" as FileType },
  { name: "documents.txt", type: "txt" as FileType },
  { name: "recommendation.pdf", type: "pdf" as FileType },
  { name: "notes.txt", type: "txt" as FileType },
  { name: "report.pdf", type: "pdf" as FileType },
  { name: "document.doc", type: "doc" as FileType },
  { name: "license.pdf", type: "pdf" as FileType },
  { name: "readme.txt", type: "txt" as FileType },
  { name: "manual.pdf", type: "pdf" as FileType },
  { name: "draft.doc", type: "doc" as FileType },
  { name: "instructions.txt", type: "txt" as FileType },
];

const getFileIcon = (type: FileType) => {
  switch (type) {
    case "pdf":
      return <FaRegFilePdf className="text-red-500" size={24} />;
    case "doc":
      return <FaRegFileWord className="text-blue-600" size={24} />;
    case "txt":
      return <FaRegFileAlt className="text-green-600" size={24} />;
    default:
      return <FaRegFile className="text-gray-500" size={24} />;
  }
};

export default function Page() {
  const [isListView, setIsListView] = useState(false);

  return (
    <section className="p-6 bg-gray-200">
      <div className="lg:w-8xl mx-auto bg-white rounded-lg shadow-lg p-6" style={{ marginLeft: '16px' }}>
        <div className="mb-6 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          <h3 className="font-bold text-lg pl-5">Your Documents</h3>
          <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-end lg:gap-4">
            <h4 className="flex items-center gap-2 pl-7">
              Sort by Name: <FaChevronDown />
            </h4>

        
            <GridButton setViewMode={(mode: "grid" | "list") => setIsListView(mode === "list")} />

            <UploadButton />
          </div>
        </div>

        {isListView ? (
          <div className="rounded-lg overflow-hidden py-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="font-bold border-b-2 border-gray-300">
                  <tr>
                    <th className="py-3 px-4 text-left">File Name</th>
                    <th className="py-2 pl-52 text-right">Size</th>
                    <th className="py-2 px-4 text-right">Uploaded On</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-4 text-left font-medium flex items-center gap-2">
                        {getFileIcon(doc.type)}
                        {doc.name}
                      </td>
                      <td className="py-1 text-right">12 MB</td>
                      <td className="py-1 px-4 text-right">2025-03-07</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
            {documents.map((doc, index) => (
              <div key={index} className="relative flex flex-col h-56 w-full sm:w-64 rounded-lg shadow-lg bg-gray-200">
                <div className="w-full py-3 px-4 flex items-center justify-between rounded-t-lg">
                  <div className="flex items-center gap-2">
                    {getFileIcon(doc.type)}
                    <p className="font-semibold text-sm truncate max-w-[140px]">{doc.name}</p>
                  </div>
                  <button className="text-gray-500 hover:text-black transition-colors">
                    <BsThreeDotsVertical size={18} />
                  </button>
                </div>
                <div className="flex-1 bg-white m-4 rounded-lg"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
