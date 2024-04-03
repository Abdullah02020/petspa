import Learn from "./Learn";
import walticon from "../assets/walt-icon.svg";
import walt1 from "../assets/walt1.svg";
import walt3 from "../assets/walt-3.svg";
import walt2 from "../assets/walt2.svg";
import walt4 from "../assets/walt-4.svg";
import walticon2 from "../assets/wlaticon2.svg";
import walticon3 from "../assets/walticon3.svg";
import walticon4 from "../assets/walticon4.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease", once: false });
const Walt = () => {
  return (
    <div className="section__padding  bg-white mt-[-2px] ">
      <div className="sm:w-[45%] w-fit relative">
        <div
          className="round rounded-[25px] flex gap-2 py-[9px] px-[15px] bg-[#FFFBF5] w-fit border-[1px] border-[#FCE5BE] cursor-pointer z-10 relative"
          data-aos="fade-right"
        >
          <img src={walticon} alt="" />
          <p className="text-[#F6B03C]">Wallet</p>
        </div>
        <h1
          className="sm:text-[4rem] sm:leading-[5rem] leading-[38px] text-primary font-semibold text-[2rem] my-4 z-10 relative"
          data-aos="fade-right"
        >
          The future is multi-chain
        </h1>
        <p
          className="sm:text-[23px] sm:pr-5 pr-0 text-[16px] font-medium my-3 mb-5 z-10 relative "
          data-aos="fade-right"
        >
          L2s made simple - send and manage your crypto easily and safely across
          multiple networks.
        </p>
        <Learn className="z-10 relative" />

        <div className="absolute z-0 w-[75%] h-[65%] orng__gradient"></div>
        <div className="absolute z-0 w-[75%] h-[65%] orng1__gradient"></div>
      </div>
      <div className=" sm:flex-row flex flex-col justify-between relative z-10 mt-[3rem] w-full gap-6">
        <div
          className="sm:h-[48.4rem] h-full sm:w-[35%] rounded-[25px] border-[1px]  px-4  border-bordercolor text-center"
          data-aos="fade-up"
        >
          <p className="text text-primary text-[25px] font-semibold  py-[1rem]">
            Send with automatic bridging. No more multi- chain hassle.{" "}
          </p>
          <img src={walt1} alt="" className="pt-[0]" />
        </div>

        <div className="card flex-col flex gap-8 ">
          <div
            className="r sm:w-[420px] sm:h-[23.3rem] w-full rounded-[25px] px-3 pb-3 border-[1px] border-bordercolor"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-center text-[25px] font-semibold leading-[29px] w-full pt-4">
              Fully self-custodial. Nobody can stop you from using your tokens.{" "}
            </p>
            <img src={walt2} alt="" className="w-full h-full" />
          </div>
          <div
            className="sm:w-[420px] rounded-[25px] px-3 pb-3 border-[1px] border-bordercolor w-full "
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <p className="text-center text-[25px] font-semibold leading-[29px] py-5">
              See how your total balances change over time, in fiat.
            </p>
            <img
              src={walt3}
              alt=""
              className="sm:w-[80%] w-full m-auto h-full "
            />
          </div>
        </div>
        <div
          className="card sm:w-[35%] flex rounded-[25px] border-[1px] py-0 pt-4 px-4 border-bordercolor chat__g h-[50rem] w-[100%]"
          data-aos="fade-up"
        >
          <img src={walt4} alt="" className="rounded-[25px]" />
        </div>
        <img
          src={walticon2}
          alt=""
          className="sm:block hidden absolute top-[-8%] right-0"
        />
        <img
          src={walticon3}
          alt=""
          className="sm:block hidden absolute top-[45%] left-[-5%]"
        />
        <img
          src={walticon4}
          alt=""
          className="sm:block hidden absolute top-[92%] right-[30%]"
        />
      </div>
    </div>
  );
};

export default Walt;
