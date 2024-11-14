import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="relative w-full">
    {/* Input Field */}
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-300 ease-in-out transform hover:scale-105"
    />
    
    {/* Search Icon */}
    <Search
      size={20}
      className="absolute left-3 top-2 text-gray-500 transition-all duration-300 ease-in-out"
    />
  </div>
);

export default SearchBar;
