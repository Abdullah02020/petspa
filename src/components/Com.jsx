import React from "react";
import com from "../assets/communities-icon.svg";
const Com = () => {
  return (
    <div className="round rounded-[25px] flex gap-2 py-[9px] px-[15px] w-fit border-[1px] border-[#AFCBD8] cursor-pointer m-auto">
      <img src={com} alt="" />
      <p className="text-[#2A879B]">Communities</p>
    </div>
  );
};

export default Com;
