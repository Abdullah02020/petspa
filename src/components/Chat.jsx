import mes from "../assets/messg.svg";
import Learn from "./Learn";
import mesenger1 from "../assets/Messenger1.png";
import mesenger2 from "../assets/Messenger2.svg";
import mesenger3 from "../assets/Messenger3.svg";
import mesenger4 from "../assets/Messenger4.svg";
import cat from "../assets/caticon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease", once: false });
const Chat = () => {
  return (
    <div className="section__padding  bg-white mt-[-2px]">
      <div className="sm:w-[45%] w-fit relative">
        <div
          className="round rounded-[25px] flex gap-2 py-[9px] px-[15px] bg-[#F8F5FF] w-fit border-[1px] border-[#B499FE] cursor-pointer z-10 relative"
          data-aos="fade-right"
        >
          <img src={mes} alt="" />
          <p className="text-[#7140FD]">Messenger</p>
        </div>
        <h1
          className="sm:text-[4rem] sm:leading-[5rem] leading-[38px] text-primary font-semibold text-[2rem] my-4 z-10 relative"
          data-aos="fade-right"
        >
          Chat privately with friends
        </h1>
        <p
          className="sm:text-[23px] sm:pr-5 pr-0 text-[16px] font-medium my-3 mb-5 z-10 relative "
          data-aos="fade-right"
        >
          Protect your right to free speech with decentralised messaging,
          metadata privacy and e2e encryption.{" "}
        </p>
        <Learn className="z-10 relative" />

        <div className="absolute z-0 w-[75%] h-[65%] red__gradient"></div>
        <div className="absolute z-0 w-[75%] h-[65%] red1__gradient"></div>
      </div>
      <div className=" sm:flex-row flex flex-col justify-between relative z-10 mt-[3rem] w-full gap-6">
        <div
          className="card sm:w-[35%] flex rounded-[25px] border-[1px] py-0 pt-4 px-4 border-bordercolor purble__g h-[50rem] w-[100%]"
          data-aos="fade-up"
        >
          <img src={mesenger1} alt="" className="rounded-[25px]" />
        </div>
        <div className="card flex-col flex gap-8 ">
          <div
            className="r rounded-[25px] px-3 pb-3 border-[1px] border-bordercolor"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-center text-[25px] font-semibold leading-[29px] w-full pt-4 pb-6">
              Create and join unstoppable group chats.{" "}
            </p>
            <img src={mesenger2} alt="" className="w-full h-full" />
          </div>
          <div
            className="sm:w-[440px] rounded-[25px] px-3 pb-3 border-[1px] border-bordercolor w-full "
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <img
              src={mesenger3}
              alt=""
              className="sm:w-[80%] w-full m-auto h-full"
            />
            <p className="text-center text-[25px] font-semibold leading-[29px] py-5">
              It’s the internet. Verify your contacts..
            </p>
          </div>
        </div>
        <div
          className="sm:h-[50rem] h-full sm:w-[35%] rounded-[25px] border-[1px]  px-4  border-bordercolor text-center"
          data-aos="fade-up"
        >
          <img src={mesenger4} alt="" />
          <p className="text text-primary text-[25px] font-semibold pt-[5rem]">
            Send crypto to your friends directly from chat.{" "}
          </p>
        </div>
        <img
          src={cat}
          alt=""
          className="sm:block hidden absolute top-[94%] left-[-3%]"
        />
      </div>
    </div>
  );
};

export default Chat;
