import Learn from "./Learn";
import appdicon from "../assets/dappicon.svg";
import app2 from "../assets/app2.svg";
import app3 from "../assets/app3.svg";
import app1 from "../assets/app1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease", once: false });
const Dapps = () => {
  return (
    <div className="section__padding  bg-white mt-[-2px] ">
      <div className="sm:w-[45%] w-fit relative">
        <div
          className="round rounded-[25px] flex gap-2 py-[9px] px-[15px] bg-[#FEF4F8] w-fit border-[1px] border-[#F9B6CE] cursor-pointer z-10 relative"
          data-aos="fade-right"
        >
          <img src={appdicon} alt="" />
          <p className="text-[#EC266C]">dApp Browser</p>
        </div>
        <h1
          className="sm:text-[4rem] sm:leading-[5rem] leading-[38px] text-primary font-semibold text-[2rem] my-4 z-10 relative"
          data-aos="fade-right"
        >
          Explore dApps
        </h1>
        <p
          className="sm:text-[23px] sm:pr-5 pr-0 text-[16px] font-medium my-3 mb-5 z-10 relative "
          data-aos="fade-right"
        >
          Interact trustlessly with web3 dApps, DAOs, NFTs, DeFi and much more.
        </p>
        <Learn className="z-10 relative" />
      </div>
      <div className=" sm:flex-row flex flex-col justify-between relative z-10 mt-[3rem] w-full gap-6">
        <div
          className="card sm:w-[35%] flex rounded-[25px] border-[1px] py-0 pt-4 px-4 border-bordercolor chat__g h-[50rem] w-[100%]"
          data-aos="fade-up"
        >
          <img src={app1} alt="" className="rounded-[25px]" />
        </div>

        <div
          className="sm:h-[48.4rem] h-full sm:w-[35%] rounded-[25px] border-[1px]  px-4  border-bordercolor text-center"
          data-aos="fade-up"
        >
          <img src={app2} alt="" className="pt-[0] sm:h-[78%]" />
          <p className="sm:pt-[5rem] text-primary text-[25px] font-semibold  py-[1rem]">
            Be free from tracking and data collection.
          </p>
        </div>
        <div
          className="sm:h-[49.5rem] h-full sm:w-[35%] rounded-[25px] border-[1px]  px-4  border-bordercolor text-center"
          data-aos="fade-up"
        >
          <p className="text text-primary text-[25px] font-semibold  py-[1rem]">
            Omnichain dApp connections. So you don’t have to pick chains.{" "}
          </p>
          <img src={app3} alt="" className="pt-[0]" />
        </div>
      </div>
    </div>
  );
};

export default Dapps;
