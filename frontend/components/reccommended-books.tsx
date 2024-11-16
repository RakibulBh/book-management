import React from "react";
import SectionTitle from "./section-title";

const ReccommendedBooks = () => {
  return (
    <div className="w-1/2 bg-[#26272B] rounded-md p-4">
      <SectionTitle>Suggested Books</SectionTitle>
      <div className="gap-2 overflow-y-auto"></div>
    </div>
  );
};

export default ReccommendedBooks;
