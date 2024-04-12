import { sericon } from "../assets/index";
import { blog } from "../constants/index";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400 });
const Blog = () => {
  return (
    <div className="section__padding ">
      <div className="pb-10">
        <div
          className="flex gap-2 bg-[#E2D6CE] w-fit py-2 px-4  rounded-[25px] mb-4"
          data-aos="fade-up"
        >
          <img src={sericon} alt="" />
          <p className="t text-primary cursor-pointer">Blogs & Insights</p>
        </div>
        <div
          className=" mb-6 text-primary hed  text-[2.9rem] leading-[45px] sm:text-[5rem] sm:leading-[60px]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          PAWSOME
          <span className=" text-secondary pl-2">ARTICLES </span>
        </div>
      </div>
      <div className="grid4">
        {blog.map((item) => (
          <div className="" data-aos="fade-right">
            <div className="relative">
              <img src={item.imgPaht} alt="" className=" rounded-[25px]" />
              <p className="absolute top-[-10px] left-[-10px] text-[#fff1e8d6] py-2 px-4 bg-primary rounded-[25px]">
                {item.data}
              </p>
            </div>
            <div className="flex justify-between py-4">
              <p className="text-dec text-[12px]  border-[#D5CAC3] border px-2 py-1 rounded-[25px]">
                {item.title}
              </p>
              <div className="flex gap-1 items-center">
                <img src={item.blogicon} alt="" className="mt-1" />
                <p className="text-dec text-[14px]">{item.name}</p>
              </div>
            </div>
            <a
              href="#"
              className="text-[#141414c9] hed font-semibold text-[30px] leading-[28px]"
            >
              {item.header}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
