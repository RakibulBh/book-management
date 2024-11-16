import React from "react";
import ReadingBookInfo from "./reading-book-info";
import BookImage from "./book-image";

const ReadingBook = () => {
  return (
    <div className="group flex-shrink-0 flex h-48 gap-4 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 cursor-pointer">
      <BookImage />
      <ReadingBookInfo />
    </div>
  );
};

export default ReadingBook;
