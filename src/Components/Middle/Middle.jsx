import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";

const Middle = () => {
  return (
    <div className="flex justify-center items-center md:justify-start md:items-start flex-wrap w-[95%] md:w-[85%] mx-auto mt-20 pb-20">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Middle;
