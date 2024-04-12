import { sericon, whydog } from "../assets/index";
import { why, whydogs } from "../constants/index";

const Why = () => {
  const bgColors = ["#3F7A8C", "#512772", "#1A4173"];

  return (
    <div className="grid2">
      <div className="bg-white rounded-[15px] p-10">
        <div className="head">
          <div className="flex gap-2 bg-[#E2D6CE] w-fit py-2 px-4 m-auto rounded-[25px] mb-4">
            <img src={sericon} alt="" />
            <p className="text-primary cursor-pointer">Our Specialities</p>
          </div>
          <div className=" mb-6 text-primary hed sm:text-left text-center text-[2.1rem] leading-[30px] sm:text-[4.3rem] sm:leading-[55px]">
            Purr-fection Starts Here:
            <span className="text-secondary">Why Us?</span>
          </div>
        </div>

        {why.map((item) => (
          <div className=" flex flex-col sm:flex-row text-center sm:text-left gap-5 tex mt-[3rem]">
            <img src={item.imgpath} alt="" />
            <div className="">
              <h1 className="t text-primary font-s font-semibold text-[30px] hed">
                {item.header}
              </h1>
              <p className="text-[#141414]">{item.dec}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <img src={whydog} alt="" className="mb-[-30px] z-[-10] relative" />
        <div className="">
          {whydogs.map((itemdog, index) => (
            <div
              key={index}
              className=" mb-5 p-5 rounded-[25px]"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <h1 className="hed text-[2rem]">{itemdog.header}</h1>
              <p>{itemdog.dec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
