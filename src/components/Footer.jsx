import React from "react";

const Footer = () => {
  return (
    <div className="my-2 mx-5 sm:flex-row flex-col  flex justify-between items-center gap-5">
      <div className="flex gap-6">
        <p className="text-[#647084] text-sm">
          © Status Research & Development GmbH.
        </p>
        <ul className="text-[#A1ABBD] flex gap-4 text-[12px]">
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <p className="text-[#647084]">
        Design by{" "}
        <a
          href="https://abdullah-proflie.web.app/"
          target="blank"
          className="text-[#A1ABBD] "
        >
          Abdullah Mohammed
        </a>
      </p>
    </div>
  );
};

export default Footer;
