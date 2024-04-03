import com from "../assets/communities-icon.svg";
import Learn from "./Learn";
import communitie1 from "../assets/Communities_01.png";
import communitie2 from "../assets/Communities2.png";
import communitie3 from "../assets/Communities3.png";
import communitie4 from "../assets/Communities4.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease", once: false });
const community = () => {
  return (
    <div className="section__padding  bg-white mt-[-2px] ">
      <div className="sm:w-[45%] w-fit relative">
        <div
          className="round rounded-[25px] flex gap-2 py-[9px] px-[15px] bg-[#ECF1F3] w-fit border-[1px] border-[#AFCBD8] cursor-pointer z-10 relative"
          data-aos="fade-right"
        >
          <img src={com} alt="" />
          <p className="text-[#2A879B]">Communities</p>
        </div>
        <h1
          className="sm:text-[4rem] sm:leading-[5rem] leading-[38px] text-primary font-semibold text-[2rem] my-4 z-10 relative"
          data-aos="fade-right"
        >
          Discover your community
        </h1>
        <p
          className="sm:text-[23px] text-[16px] font-medium my-3 mb-5 z-10 relative"
          data-aos="fade-right"
        >
          Find your tribe in the metaverse of truly free Status Communities.
        </p>
        <Learn className="z-10 relative" />

        <div className="absolute z-0 w-[75%] h-[65%] pink__gradient"></div>
      </div>
      <div className=" sm:flex-row flex flex-col justify-between relative z-10 mt-[3rem] w-full gap-6">
        <div
          className="sm:h-[50rem] h-full sm:w-[35%] rounded-[25px] border-[1px] py-0 pt-4 px-4  border-bordercolor text-center"
          data-aos="fade-up"
        >
          <p className="text text-primary text-[25px] font-semibold pb-4">
            Explore the universe of self- sovereign communities.
          </p>
          <img src={communitie1} alt="" />
        </div>
        <div className="card flex-col flex gap-6 ">
          <div
            className="r rounded-[25px] px-3 pb-3 border-[1px] border-bordercolor"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={communitie2} alt="" className="w-full h-full" />
            <p className="text-center text-[25px] font-semibold leading-[29px] w-full">
              Decentralised and permissionless.
            </p>
          </div>
          <div
            className="sm:w-[440px] rounded-[25px] px-3 pb-3 border-[1px] border-bordercolor w-full "
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <p className="text-center text-[25px] font-semibold leading-[29px] py-3">
              Access token-gated <br />
              channels. Become eligible <br /> for airdrops.
            </p>
            <img src={communitie3} alt="" className="w-full h-full" />
          </div>
        </div>
        <div
          className="card flex rounded-[25px] border-[1px] py-0 pt-4 px-4 border-bordercolor blue__g h-[50rem]"
          data-aos="fade-up"
        >
          <img src={communitie4} alt="" className="rounded-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default community;
