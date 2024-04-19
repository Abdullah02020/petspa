import { dogfooter, catfooter } from "../assets/index";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400 });
const Cute = () => {
  return (
    <div className="section__padding mt-10 flex flex-col">
      <div className="flex flex-row justify-between w-full ">
        {" "}
        <img src={catfooter} alt="" className="mb-[-6%] z-10 hidden sm:block" />
        <img
          src={dogfooter}
          alt=""
          className="mb-[-16.5%] z-10 h hidden sm:block"
        />
      </div>
      <div className="relative sm:w-[85%] w-full m-auto  h-full rounded-[25px] bg-[#FFB800] py-5 px-3">
        <h1
          className="hed text-primary text-center  leading-[3.8rem] pt-5  font-semibold text-[4rem]"
          data-aos="fade-up"
        >
          LET THE <span className=" text-secondary">CUTENESS</span> BEGIN!
        </h1>
        <p
          className="text-primary text-center sm:px-[30px] px-2 font-semibold text-[20px] mb-[2rem] mt-[1.7rem]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Ready to treat your pet to a paw-dorable experience? Click the button
          below to embark on a journey of fluff, bubbles, and endless cuteness.
          Because your pet deserves nothing but the best. Let's make memories,
          one paw at a time!
        </p>
        <div
          className="border-4 mt-5 border-bordercolor w-fit border-r-0 border-l-0 border-t-0 mx-auto rounded-xl pb-4 "
          data-aos="flip-up"
          data-aos-delay="550"
        >
          <a
            href="#"
            className="bg bg-bordercolor py-3 px-4 rounded-[10px] text-white font-semibold "
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cute;
