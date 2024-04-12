import { sericon } from "../assets/index";
import { rat } from "../constants/index";

const Rat = () => {
  const bgColors = ["#3F7A8C", "#512772"];

  return (
    <div className="section__padding">
      {" "}
      <div className="pb-7">
        {" "}
        <div className="flex gap-2 bg-[#E2D6CE] w-fit py-2 px-4 m-auto rounded-[25px] mb-4">
          <img src={sericon} alt="" />
          <p className="t text-primary cursor-pointer">Testimonials</p>
        </div>
        <div className=" mb-6 text-primary hed text-center text-[3.4rem] leading-[45px] sm:text-[5rem] sm:leading-[55px]">
          Paw-some Praise <br />
          <span className="text text-secondary">
            Pet Parents Share the Love!
          </span>
        </div>
      </div>
      <div className="grid4">
        {rat.map((item, index) => (
          <div className="">
            <div
              key={index}
              className="bg-[#3F7A8C] w-fit rounded-[20px] py-5 px-3"
              style={{ backgroundColor: bgColors[index % bgColors.length] }}
            >
              <img src={item.imgpath} alt="" className="" />
              <div className="text-center">
                {" "}
                <h1 className="hed text-center text-[23px] font-semibold pt-4 pb-6">
                  {item.header}
                </h1>
                <p className="text-[15px] text-center pb-5">{item.dec}</p>
                <p>{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rat;
