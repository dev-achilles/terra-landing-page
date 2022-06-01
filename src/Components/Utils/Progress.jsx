import React from "react";

const Progress = ({ progress }) => {
  return (
    <div className="my-2">
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-[#FB71AE] h-2.5 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
