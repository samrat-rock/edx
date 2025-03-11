"use client";

import React from "react";

interface UploadButtonProps {
  onClick: () => void;
}

function UploadButton({ onClick }: UploadButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 px-3 py-1 bg-white text-[#007296] text-sm border-2 border-dotted border-gray-400 rounded-md hover:bg-gray-100 transition-colors w-28 h-8"
      >
        + Upload file
      </button>
    </div>
  );
}

export default UploadButton;
