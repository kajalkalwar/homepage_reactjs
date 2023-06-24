import React from "react";
import FeaturesBtn from "../Buttons/FeaturesBtn";
import FeatureList from "./FeatureList";

const Feature = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20 ">
        <FeaturesBtn />
        <p className="text-4xl font-bold my-4">
          Gain more insight into how people use your
        </p>
        <p className="text-[#556987] font-medium text-center">
          With our integrated CRM, project management, collaboration
          and invoicing capabilities,
          <br /> you can manage every aspect of your business in one
          secure platform.
        </p>
      </div>
      <FeatureList />
    </div>
  );
};

export default Feature;
