import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchButtonProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function SearchButton({ searchQuery, setSearchQuery }: SearchButtonProps) {
  return (
    <div className="flex items-center border border-gray-400 rounded-lg px-4 py-1 w-full lg:w-2xl max-w-3xl">
      <span className="text-4xl"><CiSearch /></span>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search College | Your Degree | Location"
        className="flex-grow px-2 py-1 outline-none w-full placeholder-bold" 
      />
    </div>
  );
}

export default SearchButton;
