import { sericon, ser1, ser2, ser3, ser4, ser5, ser6 } from "../assets/index";
const Serv = () => {
  return (
    <div className="section__padding">
      <div
        className="flex gap-2 bg-[#E2D6CE] w-fit py-2 px-4 m-auto rounded-[25px] mb-4"
        data-aos="fade-up"
      >
        <img src={sericon} alt="" />
        <p className="t text-primary cursor-pointer">Our Services</p>
      </div>
      <div
        className=" mb-6 text-secondary hed text-center text-[3.4rem] leading-[45px] sm:text-[5rem] sm:leading-[55px]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Bubblelicious{" "}
        <span className="tex text-primary">
          Spa <br /> Adventures
        </span>
      </div>

      <div className=" Cgrid py-7 pt-[11rem]">
        <div
          className="flex flex-col w-[88%]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-[#FFC65C] h-[5rem] w-full z-10 relative rounded-tr-[75px]">
            <img
              src={ser1}
              alt=""
              className="a absolute r right-[50%] left-[50%]  t translate-x-[-50%] sm:translate-y-[-60%] translate-y-[-59%]"
            />
          </div>

          <div className="bg-primary py-5 px-7 text-center">
            <h1 className="hed pb-5 text-[2rem]">Bath & Brush</h1>
            <p className="text text-[#FFF1E8] text-[12px] leading-[25px] f font-normal">
              Treat your pet to a luxurious bath and grooming experience. Our
              gentle cleansing shampoos and professional brushing techniques
              leave your pet's coat clean, shiny, and irresistibly soft.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col w-[88%]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="bg-[#FFC65C] h-[5rem] w-full z-10 relative rounded-tr-[75px]">
            <img
              src={ser2}
              alt=""
              className="a absolute r right-[50%] left-[50%]  t translate-x-[-50%] sm:translate-y-[-60%] translate-y-[-59%]"
            />
          </div>
          <div className="bg-[#3F7A8C] py-5 px-7 text-center">
            <h1 className="hed pb-5 text-[2rem]">Haircut & Styling</h1>
            <p className="text text-[#FFF1E8] text-[12px] leading-[25px] f font-normal">
              Transform your pet into a style sensation with our Haircut &
              Styling extravaganza! Our groomers are like pet fashion wizards,
              turning your furry friend into the trendiest trendsetter.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col w-[88%]"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          <div className="bg-[#FFC65C] h-[5rem] w-full z-10 relative rounded-tr-[75px]">
            <img
              src={ser3}
              alt=""
              className="a absolute r right-[50%] left-[50%]  t translate-x-[-50%] sm:translate-y-[-60%] translate-y-[-59%]"
            />
          </div>
          <div className="bg-[#67196B] py-5 px-7 text-center">
            <h1 className="hed pb-5 text-[2rem]">Nail Clipping</h1>
            <p className="text text-[#FFF1E8] text-[12px] leading-[25px] f font-normal">
              Pamper those precious paws with our Nail Trimming escapade!
              Picture this: stress-free nail care, no fuss, only cute little paw
              perfection. It's a nail-tastic experience without the drama!
            </p>
          </div>
        </div>
        <div
          className="flex flex-col w-[88%]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-[#FFC65C] h-[5rem] w-full z-10 relative rounded-tr-[75px]">
            <img
              src={ser4}
              alt=""
              className="a absolute r right-[50%] left-[50%]  t translate-x-[-50%] sm:translate-y-[-60%] translate-y-[-59%]"
            />
          </div>
          <div className="bg-[#1A4173] py-5 px-7 text-center">
            <h1 className="hed pb-5 text-[2rem]">Face Trim</h1>
            <p className="text text-[#FFF1E8] text-[12px] leading-[25px] f font-normal">
              Our skilled groomers delicately sculpt your pet's adorable face,
              turning each fur tuft into a masterpiece of cuteness. Little
              expressions —prepare for 'awws' and extra snuggles guaranteed!
            </p>
          </div>
        </div>
        <div
          className="flex flex-col w-[88%]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="bg-[#FFC65C] h-[5rem] w-full z-10 relative rounded-tr-[75px]">
            <img
              src={ser5}
              alt=""
              className="a absolute r right-[50%] left-[50%]  t translate-x-[-50%] sm:translate-y-[-60%] translate-y-[-59%]"
            />
          </div>
          <div className="bg-[#005450] py-5 px-7 text-center">
            <h1 className="hed pb-5 text-[2rem]">De-shedding</h1>
            <p className="text text-[#FFF1E8] text-[12px] leading-[25px] f font-normal">
              Say cheerio to fur tumbleweeds with our De- shedding Treatments!
              It's like a magical fluff-away potion, leaving your home cleaner
              and your pet looking as cute as a furball can be. Shedding is so
              last season!
            </p>
          </div>
        </div>
        <div
          className="flex flex-col w-[88%]"
          data-aos="fade-up"
          data-aos-delay="550"
        >
          <div className="bg-[#FFC65C] h-[5rem] w-full z-10 relative rounded-tr-[75px]">
            <img
              src={ser6}
              alt=""
              className="a absolute r right-[50%] left-[50%]  t translate-x-[-50%] sm:translate-y-[-60%] translate-y-[-59%]"
            />
          </div>
          <div className="bg-[#275273] py-5 px-7 text-center">
            <h1 className="hed pb-5 text-[2rem]">Teeth Brushing</h1>
            <p className="text text-[#FFF1E8] text-[12px] leading-[25px] f font-normal">
              Let's talk smiles! Our Teeth Brushing service is like a dental
              dance party for your pet. Imagine pet-friendly toothpaste, gentle
              brushes. Imagine Imagine Because a cute smile is a pet's
              superpower!
            </p>
          </div>
        </div>
      </div>
      <div
        className="border-4 mt-5 border-bordercolor w-fit border-r-0 border-l-0 border-t-0 mx-auto rounded-xl pb-4"
        data-aos="flip-up"
      >
        <a
          href="#"
          className="bg bg-yellow py-3 px-4 rounded-[10px] text-[#3D3D3D] font-semibold "
        >
          View All Services
        </a>
      </div>
    </div>
  );
};

export default Serv;
