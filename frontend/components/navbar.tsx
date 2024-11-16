import React from "react";
import SearchBar from "./search-bar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 h-16 bg-[#26272B]">
      <SearchBar />
      <div className="w-10 h-10 bg-transparent border-2 border-white rounded-md" />
    </nav>
  );
};

export default Navbar;
