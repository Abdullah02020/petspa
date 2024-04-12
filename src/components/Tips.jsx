import { sericon } from "../assets/index";
import { tip } from "../constants/index";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400 });
const Tips = () => {
  return (
    <div className="section__padding">
      <div className="pb-10">
        {" "}
        <div
          className="flex gap-2 bg-[#E2D6CE] w-fit py-2 px-4 m-auto rounded-[25px] mb-4"
          data-aos="fade-up"
        >
          <img src={sericon} alt="" />
          <p className="t text-primary cursor-pointer">Pre Grooming Tips</p>
        </div>
        <div
          className=" mb-6 text-primary hed text-center text-[3.4rem] leading-[45px] sm:text-[5rem] sm:leading-[60px]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Pre-Grooming <br />
          <span className="text text-secondary">Mindfulness </span>
          for Your Pup
        </div>
        <p
          className="t text-dec text-center sm:w-[60%] w-full m-auto"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          Excitement can indicate stress, affecting your pet's quality of life
          and leading to undesirable behaviors. Distinguish between healthy
          excitement from play and stress-induced behaviors like barking or
          pulling.
        </p>
      </div>
      <div className="flex-col flex gap-[7rem]">
        {tip.map((item) => (
          <div
            className="flex sm:flex-row flex-col justify-start gap-7 sm:w-[60%] w-full"
            data-aos="fade-up"
          >
            <h1 className="text-[#FFD17B] font-bold text-[3rem] a items-start">
              {item.number}
            </h1>
            <div className="">
              {" "}
              <div className="bg-[#E8E8E8] flex text-primary px-3 py-2 rounded-[25px] w-fit">
                <img src={sericon} alt="" />
                <p className="f font-semibold">{item.header}</p>
              </div>
              <h1 className=" text-primary font-semibold text-[2rem] hed mb-2">
                {item.title}
              </h1>
              <p className="t text-dec font-semibold">{item.dec}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
