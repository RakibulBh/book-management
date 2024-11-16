import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="font-extrabold text-xl text-white">{children}</h1>;
};

export default SectionTitle;
