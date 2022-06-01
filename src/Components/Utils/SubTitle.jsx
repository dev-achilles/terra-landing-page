import React from "react";

const SubTitle = ({ title, name, color }) => {
  return (
    <h6 className="text-white my-2">
      <span className="font-semibold mr-3 font-rubik">{title}:</span>{" "}
      <span
        className={`${color ? "text-[#ba84ff]" : ""} font-roboto font-medium`}
      >
        {name}
      </span>
    </h6>
  );
};

export default SubTitle;
