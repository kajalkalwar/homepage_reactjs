import React from "react";
import Vector1 from "../Assets/Vector1.png";
import Vector2 from "../Assets/Vector2.png";
import Vector3 from "../Assets/Vector3.png";
import Vector4 from "../Assets/Vector4.png";
import Vector5 from "../Assets/Vector5.png";
import jiggle from "../Assets/jiggle.png";
import resecurb from "../Assets/resecurb.png";
import welytics from "../Assets/welytics.png";
import wishelp from "../Assets/wishelp.png";
import symtric from "../Assets/symtric.png";

const Navcompany = () => {
  return (
    <div className="bg-gray-100">
      <p className="text-sm font-medium pt-20 text-[#BBC3CF] text-center">
        Join 4,000+ companies already growing
      </p>
      <div className="flex justify-around items-center mt-10">
        <div className="flex justify-center items-center">
          <img
            src={Vector1}
            alt="vector1"
            className="h-10 w-10 mr-4"
          />
          <img src={jiggle} alt="jiggle" className="h-4 w-28" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Vector5}
            alt="vector5"
            className="h-10 w-10 mr-4"
          />
          <img src={symtric} alt="symtric" className="h-7 w-28" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Vector4}
            alt="vector4"
            className="h-12 w-12 mr-4"
          />
          <img src={wishelp} alt="wishelp" className="h-8 w-28" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Vector3}
            alt="vector3"
            className="h-10 w-12 mr-4"
          />
          <img src={resecurb} alt="resecurb" className="h-5 w-28" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Vector2}
            alt="vector2"
            className="h-8 w-11 mr-4"
          />
          <img src={welytics} alt="welytics" className="h-5 w-32" />
        </div>
      </div>
    </div>
  );
};

export default Navcompany;
