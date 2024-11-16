import React from "react";

const BookAuthor = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
      {children}
    </p>
  );
};

export default BookAuthor;
