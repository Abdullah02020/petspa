import React from "react";
import animles from "../assets/Hero-.svg";
import Buttons from "./button";
const Hero = () => {
  return (
    <div className="relative Hero-height dec" id="Home">
      <div className="absolute Hero-text w-full sm:w-[60%]">
        <div className="sm:flex-row flex  flex-col-reverse items-center gap-3 justify-center ">
          <img src={animles} alt="" />
          <p className="text-dec">2500+ Happy Paws</p>
        </div>
        <h1 className="sm:text-[5.2rem] sm:leading-[4.2rem]   leading-[3rem] text-primary font-[700] text-[3rem]  my-3 hed">
          THE BEST PET SPA FOR YOUR BEST{" "}
          <span className="text-secondary">FRIEND</span>
        </h1>
        <p className="px-7 text-dec text-[17px] mb-5">
          Pampering Your Beloved Pets with Unmatched Love, Care, and Expertise,
          Because Every Furry Friend Deserves the Royal Treatment!
        </p>
        <Buttons />
      </div>
    </div>
  );
};

export default Hero;
