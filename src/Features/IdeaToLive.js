import React from "react";
import Button from "../Buttons/Button";

const IdeaToLive = () => {
  return (
    <>
      <div className="absolute bottom-[-150px] left-[225px]">
        <div
          className="flex justify-evenly items-center bg-gray-900"
          style={{
            height: "289px",
            width: "1000px",
          }}
        >
          <div>
            <p className="font-bold text-[#ffffff] text-4xl">
              The fastest way from <br />
              idea to live site. Period.
            </p>
            <p className="text-[#8896AB] font-medium text-xl mt-4">
              Flex is a Small SaaS Business. Flex isn’t a <br />
              traditional company.
            </p>
          </div>
          <div className="flex justify-center">
            <Button />
            <button className="bg-white rounded text-sm py-2 px-6 font-normal ml-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaToLive;
