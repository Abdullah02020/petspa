import { useState } from "react";
import Logo from "../assets/navlogo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="flex justify-between py-3 px-10 border-[4px] border-bordercolor border-t-0 rounded-bl-[25px] rounded-br-[25px]">
      <div className="logo flex gap-x-3">
        <img src={Logo} alt="" />
      </div>
      <ul className="sm:flex hidden gap-x-4 text-primary font-medium">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="hover:text-yellow transition-all duration-300 font-bold text-[17px]"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          onClick={() => settoggle((prev) => !prev)}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
        p-6 bg-black-gradient absolute top-[32px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10 bg-secondary`}
        >
          <ul className="list-none flex  justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text[16px] text-white mb-3`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
