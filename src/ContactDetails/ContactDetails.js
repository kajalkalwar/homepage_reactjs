import React from "react";
import ContactData from "./ContactData";
const ContactDetails = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-[#DCFCE7] text-sm text-[#22C55E] rounded-full font-medium uppercase py-0.5 px-2">
          Contact
        </button>
        <p className="font-bold text-5xl py-4">
          Let’s stay connected
        </p>
        <p className="text-[#556987] font-medium text-xl text-center">
          It's never been easier to get in touch with Flex. Call us,
          use our live chat widget or email and <br /> we'll get back
          to you as soon as possible!
        </p>
      </div>
      <ContactData />
    </div>
  );
};

export default ContactDetails;
