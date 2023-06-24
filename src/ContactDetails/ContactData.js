import React from "react";
import { contactData } from "../data/data";
import map from "../Assets/map.png";
const ContactData = () => {
  return (
    <div className="relative pb-80">
      <div className="flex justify-around mt-20 pb-40">
        {contactData.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div>
              <button className="bg-[#22C55E] text-white p-2 rounded-full">
                {item.icon}
              </button>
            </div>
            <p className="font-bold text-3xl my-4">{item.title}</p>
            <p className="text-[#556987] font-medium text-xl">
              {item.contact}
            </p>
            <div className="flex text-[#22C55E] text-2xl">
              {item.social}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-[150px]">
        <img
          src={map}
          alt="Google map"
          Width="1140px"
          Height="641px"
        />
      </div>
    </div>
  );
};

export default ContactData;
