import React from "react";
import ReadBookImage from "./read-book-image";
import ReadBookInfo from "./read-book-info";

const BookRead = () => {
  return (
    <div className="group flex-shrink-0 flex h-48 gap-4 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
      <ReadBookImage />
      <ReadBookInfo />
    </div>
  );
};

export default BookRead;
