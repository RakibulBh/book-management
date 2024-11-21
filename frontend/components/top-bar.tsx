import React from "react";
import Button from "./button";
import SearchBar from "./search-bar";

const TopBar = () => {
  return (
    <div className="bg-white p-2 flex gap-1 rounded-md">
      <Button>Shelves</Button>
      <Button>All books</Button>
      <SearchBar />
    </div>
  );
};

export default TopBar;
