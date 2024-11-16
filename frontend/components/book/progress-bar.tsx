import React from "react";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="absolute h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:from-indigo-400 group-hover:to-purple-400"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
