import React from "react";
import book from "../Assets/book.png";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Frame from "../Assets/Frame.png";
import Pattern from "../Assets/Pattern.png";
const Pages = () => {
  return (
    <div className="py-20">
      <div className="pl-20">
        <button className="bg-[#22C55E] rounded-lg py-2 px-4">
          Feature
        </button>
        <p className="text-4xl font-bold py-4">
          Gain more insight into how people use your
        </p>
        <p className="text-lg font-medium text-[#556987]">
          With our integrated CRM, project management, collaboration
          and invoicing capabilities, <br /> you can manage every
          aspect of your business in one secure platform.
        </p>
      </div>
      <div className="flex flex-row justify-evenly pt-10">
        <div>
          <div className="flex items-center my-10">
            <div className="bg-[#22C55E] rounded-lg py-2 px-4 text-[#ffffff]">
              <AiOutlineMail />
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg">
                Measure your performance
              </p>
              <p className="text-sm font-medium text-[#556987]">
                Stay connected with your team and make
                <br className="md:block hidden" /> quick decisions
                wherever you are.
              </p>
            </div>
          </div>
          <div className="flex items-center my-10">
            <div className="bg-[#22C55E] rounded-lg py-2 px-4 text-[#ffffff]">
              <AiOutlineEdit />
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg">Build your website</p>
              <p className="text-sm font-medium text-[#556987]">
                A tool that lets you build a dream website <br /> even
                if you know nothing about web design or <br />
                programming.
              </p>
            </div>
          </div>
          <div className="flex items-center my-10">
            <div className="bg-[#22C55E] rounded-lg py-2 px-4 text-[#ffffff]">
              <AiOutlineAppstore />
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg">
                Connect multiple apps
              </p>
              <p className="text-sm font-medium text-[#556987]">
                The first business platform to bring together <br />
                all of your products from one place.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={book} alt="book" />
          <img
            className="absolute top-[-25px] left-[-45px]"
            src={Frame}
            alt="Frame"
          />
          <img
            className="absolute right-[-25px] bottom-[-30px]"
            src={Pattern}
            alt="Pattern"
          />
        </div>
      </div>
    </div>
  );
};

export default Pages;
