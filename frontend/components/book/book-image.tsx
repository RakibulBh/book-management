import React from "react";

const BookImage = () => {
  return (
    <div className="relative w-32 h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default BookImage;
