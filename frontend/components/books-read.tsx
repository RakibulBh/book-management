import React from "react";
import BookRead from "./book/book-read";

const BooksRead = () => {
  return (
    <div className="bg-gray-900 rounded-md p-4 flex gap-4 max-w-screen-xl overflow-x-auto">
      <BookRead />
      <BookRead />
      <BookRead />
      <BookRead />
      <BookRead />
    </div>
  );
};

export default BooksRead;
