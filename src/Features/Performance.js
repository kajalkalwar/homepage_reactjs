import React from "react";
import FeaturesBtn from "../Buttons/FeaturesBtn";
import { performanceData } from "../data/data";
import PaltformImage from "../Platform/PlatformImage";
import FeatureGain from "./FeatureGain";
import GainMoreFeatures from "./GainMoreFeatures";

const Performance = () => {
  return (
    <>
      <div className="bg-gray-100 pt-60">
        <div className="pl-20">
          <FeaturesBtn />
          <p className="text-4xl font-bold my-4">
            Gain more insight into how people use your
          </p>
          <p className="text-[#556987] font-medium">
            With our integrated CRM, project management, collaboration
            and invoicing capabilities,
            <br /> you can manage every aspect of your business in one
            secure platform.
          </p>
        </div>
        <div className="flex justify-evenly items-center">
          <div>
            {performanceData.map((item) => (
              <div key={item.id1} className="flex items-center">
                <div>
                  <button className="bg-[#22C55E] text-white p-3 rounded">
                    {item.icon1}
                  </button>
                </div>
                <div className="px-8">
                  <p className="font-bold text-2xl mt-8">
                    {item.title1}
                  </p>
                  <p className="font-medium text-sm text-[#556987] w-60 mt-2">
                    {item.para1}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <PaltformImage />

          {/* <img src={coins} alt="coins" width="400px" height="400px" /> */}
        </div>
        <FeatureGain />
        <GainMoreFeatures />
      </div>
    </>
  );
};

export default Performance;
