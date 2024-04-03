import party from "../assets/party.svg";

const Hero = () => {
  return (
    <div className="bg-hero">
      <div className="hero-content sm:w-fit w-full px-7 ">
        <div className="sm:flex-row flex-col flex gap-2 mb-2 border-hero w-fit m-auto">
          <p className="bg-but px-[10px] py-[1px] rounded-xl text-white">New</p>
          <p className="text-primary text-[18px] text-center ">
            Token-Gated Community Management in Status 2.0
          </p>
        </div>
        <h1 className="sm:text-[4rem] sm:l-h1 l-h text-primary text-center font-semibold text-[3rem] leading-relaxed capitalize py-2">
          Make the jump <br className="sm:block hidden " /> to web3
        </h1>
        <p className="text-primary text-[21px] text-center mb-3">
          Use the open source, decentralised crypto communication super app.
        </p>
        <div className="border-hero p-5 w-fit bg-blue-700 flex gap-2 m-auto cursor-pointer">
          <img src={party} alt="" />
          <p className="text-white">Sign up for early access</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
