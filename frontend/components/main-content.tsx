import React from "react";
import ReccommendedBooks from "./reccommended-books";
import ReadingBooks from "./reading-books";
import BooksRead from "./books-read";

const MainContent = () => {
  return (
    <div className="p-8 flex-1 flex flex-col gap-8">
      <div className="flex gap-4 h-80">
        <ReadingBooks />
        <ReccommendedBooks />
      </div>
      <BooksRead />
    </div>
  );
};

export default MainContent;
