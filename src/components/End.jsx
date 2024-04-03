import biglogo from "../assets/biglogo.svg";
import party from "../assets/party.svg";
const End = () => {
  return (
    <div className="section__padding relative h-[75vh]" data-aos="fade-in">
      <div className="a absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center w-full">
        <img src={biglogo} alt="" className="m-auto" />
        <h1 className="sm:text-[4rem] text-[2rem] font-semibold text-white my-3">
          Be unstoppable
        </h1>
        <p className="text-[#fafafa] font-normal text-[20px] ">
          Use the open source, decentralised crypto communication super app.
        </p>
        <div className="border-hero p-5 w-fit bg-blue-700 flex gap-2 m-auto cursor-pointer mt-4">
          <img src={party} alt="" />
          <p className="text-white">Sign up for early access</p>
        </div>
      </div>
    </div>
  );
};

export default End;
