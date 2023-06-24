import React from "react";
import { workGainData } from "../data/data";
const WorkData = () => {
  return (
    <div className="grid grid-cols-3 mt-20 pb-40">
      {workGainData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-evenly items-center pb-10"
        >
          <div>
            <button className="bg-[#22C55E] text-white w-12 h-12 rounded-full">
              {item.circle}
            </button>

            <p className="font-bold text-2xl my-4 text-[#ffffff]">
              {item.title}
            </p>

            <p className="font-medium text-sm text-[#556987] h-18 w-80">
              {item.para}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkData;
