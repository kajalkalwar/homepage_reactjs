import React from "react";
import Group from "../Assets/Group.png";
import Navtools from "./Navtools";
const navData = [" Product", "Features", "Pricing", " Resources"];
const Navbar = () => {
  return (
    <div className="bg-gray-100 pb-20">
      <div className="flex justify-between  pt-8 px-20 bg-gray-100 items-center">
        <div className="flex items-center">
          <img src={Group} alt="vector Group" />
          <div className="text-2xl font-bold ml-2">Flex</div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            {navData.map((item) => (
              <div className="pr-12 text-[#556987] text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <button className="text-[#556987] text-sm ">Log In</button>
          <button className="bg-[#22C55E] py-2 px-3 text-sm text-white rounded-lg hover:bg-sky-500 ml-4">
            Sign Up
          </button>
        </div>
      </div>
      <Navtools />
    </div>
  );
};

export default Navbar;
