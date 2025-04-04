import React from "react";

function SearchButton() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Document"
        className="border border-gray-200 px-3 py-2 rounded-md w-60 lg:w-96 bg-gray-100"
      />
    </div>
  );
}

export default SearchButton;
