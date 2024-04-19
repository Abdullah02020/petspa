import React from "react";
import { footerlogo, jps, phon, hour, emile } from "../assets/index";
import { FooterUL } from "../constants";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400 });
const Footer = () => {
  return (
    <div className="section__padding bg-primary rounded- rounded-t-[30px] overflow-hidden">
      <div className="section__padding-x sm:flex-row flex-col gap-10 flex justify-between">
        <div className="">
          <img src={footerlogo} alt="" data-aos="fade-right" />
          <p
            className="text-[#FFF1E8] mt-3 sm:w-[50%] w-full leading-[25px]"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            At Pawfect, we're dedicated to providing top- quality grooming
            services with a personal touch. Our skilled team of groomers treats
            every pet with love and care, ensuring a stress-free and enjoyable
            experience.
          </p>
        </div>
        <div className="">
          {" "}
          <ul>
            {FooterUL.map((item) => (
              <li className="flex gap-5 mb-5" data-aos="fade-left">
                <img src={item.imgPaht} alt="" />
                <p className="w-[70%]">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
