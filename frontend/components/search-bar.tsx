"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`
      relative
      w-[60%]
      transition-all
      duration-200
      ${isFocused ? "scale-105" : "scale-100"}
    `}
    >
      <div
        className={`
        flex
        items-center
        bg-white
        rounded-lg
        border
        shadow-sm
        px-4
        py-2
        gap-2
        transition-all
        duration-200
        ${
          isFocused
            ? "border-blue-500 shadow-lg"
            : "border-gray-200 hover:border-gray-300"
        }
      `}
      >
        <Search
          className={`
            w-5 
            h-5
            transition-colors
            duration-200
            ${isFocused ? "text-blue-500" : "text-gray-400"}
          `}
        />
        <input
          type="text"
          placeholder="Search..."
          className="
            w-full
            outline-none
            bg-transparent
            text-gray-800
            placeholder-gray-400
            text-base
          "
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
