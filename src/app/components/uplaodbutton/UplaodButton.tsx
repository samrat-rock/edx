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
        className="flex items-center justify-center gap-2 px-2 py-1 bg-[#007296] text-white text-sm border   rounded-md w-28 h-8"
      >
        + Upload file
      </button>
    </div>
  );
}

export default UploadButton;
