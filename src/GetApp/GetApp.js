import React from "react";
import work from "../Assets/work.png";
import Shape from "../Assets/Shape.png";
import Group1 from "../Assets/Group1.png";
import Frame33 from "../Assets/Frame33.png";
const GetApp = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center my-20">
        <img
          src={Group1}
          alt="Group1"
          className="absolute left-[250px] z-[-1] rounded-full"
        />
        <img
          src={Frame33}
          alt="Frame33"
          className="absolute right-[250px]  z-[-1]"
        />
        <button className="bg-[#DCFCE7] text-sm text-[#22C55E] rounded-full font-medium py-0.5 px-2">
          Application
        </button>
        <p className="font-bold text-4xl py-8">
          Great work starts with your app
        </p>
        <img src={work} alt="work" width="760px" height="505px" />
        <img src={Shape} alt="shape" width="942px" height="16px" />
        <p className="font-medium text-xl text-[#556987] text-center py-6">
          Our philosophy is simple — hire a team of diverse,
          passionate people and foster a culture <br /> that empowers
          you to do you best work.
        </p>
        <div>
          <button className="bg-[#22C55E] text-white rounded text-sm py-2 px-6 font-normal">
            Learn More
          </button>
          <button className="bg-white rounded text-sm py-2 px-6 font-normal ml-3 border-solid border-2 border-Gray/200">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
