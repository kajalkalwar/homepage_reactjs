import React from "react";
import book from "../Assets/book.png";
import Frame from "../Assets/Frame.png";
import Pattern from "../Assets/Pattern.png";
const PaltformImage = () => {
  return (
    <div className="relative pt-20">
      <img src={book} alt="book" height="556px" width="554px" />

      <img
        className="absolute top-[45px] left-[-40px]"
        src={Frame}
        alt="frame"
      />
      <img
        className="absolute bottom-[-40px] right-[-40px]"
        src={Pattern}
        alt="pattern"
      />
    </div>
  );
};

export default PaltformImage;
