import Com from "./Com";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease", once: false });
const Back = () => {
  return (
    <div className="back_section " data-aos="fade-in">
      <div className=" absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center w-full ">
        <Com className="bg-[#ECF1F3]" />

        <h1 className="sm:text-[3.7rem] text-white mb-4 text-[40px] leading-[42px] mt-5 font-semibold capitalize">
          Take back control
        </h1>
        <p className=" text-[#e9eff2c4] text-[15px] mt-[-10px]">
          Don’t give Discord or Telegram power over your community.
        </p>
        <div
          className="mt-4 w-fit m-auto px-4 py-2
          rounded-[25px] border border-[#AFCBD8] cursor-pointer "
        >
          <p className="text-white text-sm">Set your community free</p>
        </div>
      </div>
    </div>
  );
};

export default Back;
