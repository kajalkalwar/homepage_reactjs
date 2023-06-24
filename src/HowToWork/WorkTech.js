import React from "react";
import video from "../Assets/video.mp4";
import WorkData from "./WorkData";
const WorkTech = () => {
  return (
    <div
      className="bg-gray-900"
      style={{
        width: "1440px",
        paddingTop: "120px",
      }}
    >
      <div className="flex justify-around items-center">
        <div>
          <button className="bg-[#DCFCE7] text-sm text-[#14532D] rounded-full font-medium uppercase py-0.5 px-2">
            How It Works
          </button>
          <p className="font-bold text-5xl py-6 text-[#ffffff]">
            Gain more insight into <br /> how people use your
          </p>
          <p className="text-[#556987] font-medium text-xl">
            With our integrated CRM, project management,
            <br /> collaboration and invoicing capabilities, you can
            <br />
            manage your business in one secure platform.
          </p>
        </div>
        <div>
          <video width="554px" height="312px" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <WorkData />
    </div>
  );
};

export default WorkTech;
