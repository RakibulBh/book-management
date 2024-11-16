import React from "react";
import ReadingBook from "./book/reading-book";
import SectionTitle from "./section-title";

const ReadingBooks = () => {
  return (
    <div className="w-1/2 bg-gray-900 rounded-xl p-6 space-y-6 flex flex-col shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* <BookOpen className="w-5 h-5 text-indigo-500" /> */}
          <h2 className="text-xl font-semibold text-white">
            Continue Reading...
          </h2>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          {/* <MoreHorizontal className="w-5 h-5" /> */}
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
        <ReadingBook />
        <ReadingBook />
        <ReadingBook />
        <ReadingBook />
      </div>
    </div>
  );
};

export default ReadingBooks;
