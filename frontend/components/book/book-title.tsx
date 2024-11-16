import React from "react";

const BookTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
      {children}
    </h3>
  );
};
export default BookTitle;
