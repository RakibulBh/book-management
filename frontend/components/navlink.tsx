import React from "react";

const Navlink = ({
  Icon,
  title,
}: {
  Icon: React.FunctionComponent;
  title: string;
}) => {
  return (
    <div className="px-4 py-2 rounded-xl hover:shadow-inner text-[#5F4C1C] flex gap-2 hover:cursor-pointer hover:bg-[#F2ECE4]">
      <Icon />
      <p className="">{title}</p>
    </div>
  );
};

export default Navlink;
