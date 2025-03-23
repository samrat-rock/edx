import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";


interface SearchButtonProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center border border-gray-400 rounded-lg px-4 w-full md:w-96 lg:w-xl max-w-3xl bg-white shadow-sm">
      <CiSearch className="text-gray-600 text-2xl" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search College, Degree, or Location..."
        aria-label="Search for colleges"
        className="flex-grow px-3 py-2 outline-none w-full text-gray-700 placeholder-gray-500 bg-transparent"
      />
      <button className="flex items-center justify-center ml-2 px-3 py-1 rounded-lg hover:bg-gray-200 transition">
  <IoAddOutline className="pb-1" /> Filter
</button>

    </div>
  );
};

export default SearchButton;
