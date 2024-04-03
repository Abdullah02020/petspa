import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease" });
const Learn = () => {
  return (
    <div data-aos="fade-right">
      {" "}
      <a
        href="#"
        className="f rounded-[25px] py-[9px] px-[12px] border-[1px] border-[#E8E9EC] mb-3"
      >
        Learn more
      </a>
    </div>
  );
};

export default Learn;
