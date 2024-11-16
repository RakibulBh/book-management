import React from "react";
import BookTitle from "./book-title";
import BookAuthor from "./book-author";
import ProgressBar from "./progress-bar";

const ReadingBookInfo = () => {
  const timeLeft = "2h 15m left";

  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <div className="space-y-2">
        <BookTitle>Deep Learning</BookTitle>
        <BookAuthor>Author</BookAuthor>
      </div>
      <div className="space-y-3">
        <ProgressBar progress={60} />
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-300">60% Complete</p>
          <div className="flex items-center text-gray-400 group-hover:text-indigo-400 transition-colors">
            {/* <Clock className="w-4 h-4 mr-1" /> */}
            <span>{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingBookInfo;
