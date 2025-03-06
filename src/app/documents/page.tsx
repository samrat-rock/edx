"use client"
import React, { useState } from "react";
import UploadButton from "../components/UplaodButton/page";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegFilePdf, FaRegFileWord, FaRegFileAlt, FaRegFile } from "react-icons/fa";

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
    <section className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-bold">Your Documents</h3>
        <div className="flex items-center gap-4 pr-24">
          <button
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            onClick={() => setIsListView(!isListView)}
          >
            {isListView ? "Grid View" : "List View"}
          </button>
          <UploadButton  />
        </div>
      </div>

      {isListView ? (
        <div className="w-full border rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-200 font-bold">
              <tr>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">{getFileIcon(doc.type)}</td>
                  <td className="py-3 px-4 font-medium">{doc.name}</td>
                  <td className="py-3 px-4">
                    <button className="text-gray-500 hover:text-black transition-colors">
                      <BsThreeDotsVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="relative flex flex-col h-56 w-full sm:w-64 rounded-lg shadow-lg border border-gray-300 bg-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="w-full py-3 px-4 flex items-center justify-between border-gray-300 bg-gray-200">
                <div className="flex items-center gap-2">
                  {getFileIcon(doc.type)}
                  <p className="font-semibold text-sm truncate max-w-[140px]">
                    {doc.name}
                  </p>
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
    </section>
  );
}