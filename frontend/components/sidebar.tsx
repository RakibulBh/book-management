import React from "react";
import UserProfile from "./user-profile";
import { navLinks } from "@/lib/data";
import Navlink from "./navlink";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-full px-8 pt-4 pb-8 flex flex-col justify-between border-r border-[3px] border-opacity-15">
      <div className="space-y-16">
        <p className="text-center">Logo</p>
        {/* Nav links */}
        <div className="space-y-2">
          {navLinks.map((link) => (
            <Navlink Icon={link.icon} title={link.title} />
          ))}
        </div>
      </div>
      <UserProfile />
    </div>
  );
};

export default Sidebar;
