import React from "react";
import Button from "../Buttons/Button";
import FeaturesBtn from "../Buttons/FeaturesBtn";

const PlatformProject = () => {
  return (
    <div className="flex flex-col justify-center">
      <FeaturesBtn />
      <p className="font-bold text-5xl py-8">
        Gain more insight <br /> into how people <br />
        use your
      </p>
      <p className="text-xl font-medium text-[#556987] pb-8">
        With our integrated CRM, project <br /> management,
        collaboration and invoicing <br /> capabilities, you can
        manage every aspect <br /> of your business in one secure
        platform.
      </p>
      <Button />
    </div>
  );
};

export default PlatformProject;
