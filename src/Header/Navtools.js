import React from "react";
import { GoMail } from "react-icons/go";
import Navcompany from "./Navcompany";
import Frame1 from "../Assets/Frame1.png";
import Frame2 from "../Assets/Frame2.png";
import Frame3 from "../Assets/Frame3.png";
import Frame4 from "../Assets/Frame4.png";
const Navtools = () => {
  return (
    <>
      <div className="flex justify-center pt-10 bg-gray-100">
        <div
          className="bg-gray-900 relative"
          style={{ width: "1140px", height: "568px" }}
        >
          <img
            className="absolute top-0 left-0"
            src={Frame1}
            alt="Frame1"
          />
          <img
            className="absolute top-6 right-6"
            src={Frame2}
            alt="Frame2"
          />
          <img
            className="absolute bottom-6 left-6"
            src={Frame3}
            alt="Frame3"
          />
          <img
            className="absolute bottom-0 right-0"
            src={Frame4}
            alt="Frame4"
          />

          <div className="flex flex-col justify-center items-center mt-20">
            <button className="bg-[#22C55E] text-white rounded-full uppercase text-sm py-0.5 px-1 font-medium">
              Header
            </button>
            <p className="text-6xl text-white font-bold text-center pt-6">
              A small business is only <br /> as good as its tools.
            </p>
            <p className="text-xl font-medium py-8 text-[#8896AB]">
              We’re different. Flex is the only saas business platform
              that lets you run <br /> your business on one platform,
              seamlessly across all digital channels.
            </p>
            <div className="flex justify-center">
              <div className="flex justify-center relative">
                <GoMail className="text-sm absolute left-2 top-3" />
                <input
                  type="text"
                  placeholder="Enter your work email"
                  className="rounded text-sm pl-8 w-60"
                />
              </div>
              <button className="bg-[#22C55E] text-white rounded text-sm py-2 px-6 font-normal ml-3">
                Get early access
              </button>
            </div>
            <p className="text-sm font-medium pt-6 text-[#8896AB] ">
              Start your free 14-day trial today, no credit card
              required.
            </p>
          </div>
        </div>
      </div>
      <Navcompany />
    </>
  );
};

export default Navtools;
