import React from "react";
import Group from "../Assets/Group.png";

const footerData = [
  "Product",
  "Features",
  "Pricing",
  "Resources",
  "Careers",
  "Help",
  "Privacy",
];
const Footer = () => {
  return (
    <div
      className="bg-gray-900"
      style={{
        width: "1440px",
        paddingTop: "500px",
      }}
    >
      <div className="flex justify-center items-center">
        <img src={Group} alt="vector Group" />
        <div className="text-xl font-bold ml-2 text-[#ffffff]">
          Flex
        </div>
      </div>

      <div className="flex justify-center items-center">
        {footerData.map((item) => (
          <div className="pr-12 font-medium text-xl py-8 text-[#8896AB]">
            {item}
          </div>
        ))}
      </div>
      <hr />
      <p className="text-center pt-8 pb-20 text-[#8896AB]">
        © 2021 Flex. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
