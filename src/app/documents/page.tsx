"use client";
import React, { useState } from "react";
import UploadButton from "../components/uplaodbutton/UplaodButton";
import GridButton from "../components/gridbutton/GridButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  FaRegFilePdf,
  FaRegFileWord,
  FaRegFileAlt,
  FaRegFile,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

type FileType = "pdf" | "doc" | "txt";

const documents = [
  { name: "certificate.pdf", type: "pdf" as FileType },
  { name: "letter.doc", type: "doc" as FileType },
  { name: "documents.txt", type: "txt" as FileType },
  { name: "certificate.pdf", type: "pdf" as FileType },
  { name: "letter.doc", type: "doc" as FileType },
  { name: "documents.txt", type: "txt" as FileType },
  { name: "certificate.pdf", type: "pdf" as FileType },
  { name: "letter.doc", type: "doc" as FileType },
  { name: "documents.txt", type: "txt" as FileType },
  { name: "certificate.pdf", type: "pdf" as FileType },
  { name: "letter.doc", type: "doc" as FileType },
  { name: "documents.txt", type: "txt" as FileType },
  
  
  
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
  const [isUploadView, setIsUploadView] = useState(false);

  return (
    <section className="bg-gray-200">
      <div
        className="lg:w-8xl mx-auto bg-white shadow-lg p-6"
        style={{ marginLeft: "16px" }}
      >
        <div className="mb-6 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          <h3 className="font-bold text-lg lg:pl-5 text-center">
            {isUploadView ? "Upload Your Files" : "Your Documents"}
          </h3>
          <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-end lg:gap-4 ">
            <h4 className="flex items-center text-xl gap-2 justify-center ">
              Sort by Name: <FaChevronDown />
            </h4>

            <GridButton
              setViewMode={(mode: "grid" | "list") =>
                setIsListView(mode === "list")
              }
            />

            <UploadButton onClick={() => setIsUploadView((prev) => !prev)} />
          </div>
        </div>

        {isUploadView ? (
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between w-full mb-4 border-b border-gray-200 pb-2">
              <h4 className="text-gray-700 font-semibold text-left w-1/3">
                File Name
              </h4>
              <div className="flex gap-16 text-gray-700 font-semibold text-right">
                <h4>Size</h4>
                <h4>Uploaded On</h4>
              </div>
            </div>

            <div
              className="border-dashed border border-blue-400 w-full flex flex-col items-center justify-center 
                      p-10 rounded-lg bg-white h-[600px] text-center"
            >
              <p className="font-bold">Drag files here</p>
              <p className="py-2">or</p>

              <input type="file" id="+ upload file" className="hidden" />

              <label
                htmlFor="fileUpload"
                className="px-6 py-3 border border-[#007296] text-[#007296] rounded-lg cursor-pointer"
              >
                + upload files
              </label>
            </div>
          </div>
        ) : isListView ? (
          // Added List View Table
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
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
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
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="relative flex flex-col h-56 w-full rounded-lg shadow-lg bg-gray-200"
              >
                <div className="w-full py-3 px-4 flex items-center justify-between rounded-t-lg">
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
      </div>
    </section>
  );
}