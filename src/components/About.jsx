import { sericon, abouts } from "../assets/index";

const About = () => {
  return (
    <div className="section__padding">
      <div className="flex gap-2 bg-[#E2D6CE] w-fit py-2 px-4 m-auto rounded-[25px] mb-4">
        <img src={sericon} alt="" />
        <p className="t text-primary cursor-pointer">Who We Are</p>
      </div>
      <div className=" mb-6 text-secondary hed text-center text-[3.4rem] leading-[45px] sm:text-[5rem] sm:leading-[55px]">
        <span className=" text-primary">
          KNOW <br />
        </span>{" "}
        ABOUT US
      </div>
      <div className="bg-[#3F7A8C] mt-4 px-10 pt-10 rounded-[15px]">
        <div className="grid2 mb-[4rem]">
          <h1 className="text-center text-[23px]">
            Hey there! We're Cuddlepaws, your pet's new best friend in grooming.
            We believe in fluffy cuddles, happy tails, and making your pets look
            paw-sitively fabulous. Let's bring out the cuteness together!{" "}
          </h1>
          <p className="text-center font-normal text-[15px] flex items-center">
            As pet lovers ourselves, Cuddlepaws was born out of a simple yet
            profound vision — to offer a grooming haven where pets are not just
            clients but cherished members of the family. Our mission is to blend
            expertise with love, ensuring each pet receives personalized care,
            tailored grooming, and leaves with tails wagging and hearts full.{" "}
          </p>
        </div>
        <img src={abouts} alt="" />
      </div>
    </div>
  );
};

export default About;
