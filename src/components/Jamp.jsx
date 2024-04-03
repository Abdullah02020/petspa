import jamp from "../assets/jampicon.svg";
import jamp1 from "../assets/jampf.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1000, delay: 400, easing: "ease", once: false });
const Jamp = () => {
  return (
    <div className="section__padding overflow-hidden bt ">
      <div className="sm:flex-row flex-col flex items-center justify-around">
        <div className="sm:w-[40%] sm:text-left w-full text-center">
          <h1
            className="sm:flex-row flex flex-col items-center gap-4 text-primary font-semibold text-[1.7rem] mb-3"
            data-aos="fade-up"
          >
            <img src={jamp} alt="" />
            Jump between tasks
          </h1>
          <p
            className="text-[#09101C]  sm:pl-[13.4%] font-medium"
            data-aos="fade-up"
          >
            Like an operating system, whatever you’ve recently been doing is
            just a few taps away. Go from chatting with a friend to an account
            without having to navigate your way back.
          </p>
          <ul className="sm:pl-[13.4%]  pt-5">
            <li className="pb-5" data-aos="fade-right">
              <h1 className="font font-semibold text-[1.4rem]">
                Track your notifications
              </h1>
            </li>
            <li className="pb-5" data-aos="fade-right" data-aos-delay="450">
              <h1 className="font-semibold text-[1.4rem]">Make it your own</h1>
            </li>
            <li data-aos="fade-right" data-aos-delay="500">
              <h1 className="font-semibold text-[1.4rem]">
                Use multiple profiles
              </h1>
            </li>
          </ul>
        </div>
        <div className=" mt-6 sm:mt-0 " data-aos="fade-left">
          <img src={jamp1} alt="" className="h-[37rem]  rounded-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Jamp;
