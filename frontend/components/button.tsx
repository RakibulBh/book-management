import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="px-2 py-1 bg-white text-[#CBBFB3] rounded-md hover:text-[#746452] hover:bg-[#EFECE6] hover:cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
