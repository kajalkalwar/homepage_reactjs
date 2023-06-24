import React from "react";
import PaltformImage from "../Platform/PlatformImage";
import PlatformProject from "../Platform/PlatformProject";
import girl from "../Assets/girl.png";

const GainMoreFeatures = () => {
  return (
    <div className="flex justify-evenly py-40 ">
      <PlatformProject coins={girl} />
      <PaltformImage coins={girl} />
    </div>
  );
};

export default GainMoreFeatures;
