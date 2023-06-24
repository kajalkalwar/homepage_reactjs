import React from "react";
import { listData } from "../data/data";
import IdeaToLive from "./IdeaToLive";

const FeatureList = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 mt-20 pb-40">
        {listData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-evenly items-center"
          >
            <div>
              <button className="bg-[#22C55E] text-white p-3 rounded">
                {item.icon}
              </button>
            </div>
            <div>
              <p className="font-bold text-2xl my-4">{item.title}</p>
            </div>
            <div>
              <p className="font-medium text-sm text-[#556987] text-center h-14 w-60 mb-20">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
      <IdeaToLive />
    </div>
  );
};

export default FeatureList;
