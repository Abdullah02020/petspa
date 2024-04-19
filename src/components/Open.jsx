import { open } from "../constants/index";
import { dogs } from "../assets/index";
const Open = () => {
  return (
    <div className="section__padding   flex flex-col" id="About">
      <div className="flex sm:w-[90%] w-full m-auto justify-end mb-[-17px] z-10">
        <img src={dogs} alt="" className="" draggable="false" />
      </div>
      <div
        className=" bg-primary sm:grid sm:grid-cols-3 sm:gap-[5rem] px-8 py-9 rounded-[7px] sm:w-[90%] w-full
       m-auto"
      >
        {open.map((item) => (
          <div
            className="card mb-5 text-center sm:text-left"
            data-aos="fade-up"
          >
            <img
              src={item.imgpath}
              alt=""
              className="m-auto sm:m-0"
              draggable="false"
            />
            <h1 className="hed text-white text-[2rem] my-2">{item.header}</h1>
            <ul>
              <li className="t">
                <p className="pb-2">{item.dec1}</p>
                <p className="pb-2">{item.dec2}</p>
                <p>{item.dec3}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Open;
