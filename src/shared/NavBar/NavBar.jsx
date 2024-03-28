import logo from "@/assets/banner/douglogo.png"
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }


  return (
    <div className={color ? 'sticky bg-[#eeeded] top-0 z-50 duration-300 py-1' : 'pt-0 duration-300'}>
      <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-7'}`}>

            <Link to="home" smooth={true} offset={-30} duration={600} className=" text-white text-[24px] flex items-center cursor-pointer">
              <img src={logo} alt="Logo" className="lg:w-[110px] md:w-auto mr-3 ml-5 md:ml-0" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#F2C94C]" /> : <IoMenu className="text-[#F2C94C]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 md:space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] font-karla ${open ? 'top-[65px] opacity-100 bg-[#cccbcb]' : 'top-[-490px] bg-transparent'}`}>

              <li>
                <Link to="home" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold cursor-pointer ${activeLink === "home" ? 'text-[#EEB10E]' : 'text-[#111] hover:text-[#EEB10E] duration-200'}`} onClick={() => setActiveLink("home")}>Home</Link>
              </li>

              <li>
                <Link to="about" smooth={true} offset={-90} duration={600} className={`text-[18px] font-semibold cursor-pointer ${activeLink === "about" ? 'text-[#EEB10E]' : 'text-[#111] hover:text-[#EEB10E] duration-200'}`} onClick={() => setActiveLink("about")}>About</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={-60} duration={600} className={`text-[18px] font-semibold cursor-pointer ${activeLink === "tokenomics" ? 'text-[#EEB10E]' : 'text-[#111] hover:text-[#EEB10E] duration-200'}`} onClick={() => setActiveLink("tokenomics")}>Tokenomics</Link>
              </li>

              <li>
                <Link to="roadmap" smooth={true} offset={-60} duration={600} className={`text-[18px] font-semibold cursor-pointer ${activeLink === "roadmap" ? 'text-[#EEB10E]' : 'text-[#111] hover:text-[#EEB10E] duration-200'}`} onClick={() => setActiveLink("roadmap")}>Roadmap</Link>
              </li>

              <li>
                <Link to="whitepaper" smooth={true} offset={-60} duration={600} className={`text-[18px] font-semibold cursor-pointer ${activeLink === "whitepaper" ? 'text-[#EEB10E]' : 'text-[#111] hover:text-[#EEB10E] duration-200'}`} onClick={() => setActiveLink("whitepaper")}>Whitepaper</Link>
              </li>

              <div className="block md:hidden">
                <button className="bg-[#EEB10E] hover:bg-[#d8ad37] text-[#fff] 2xl:text-[20px] font-karla px-6 2xl:px-7 py-[15px] rounded-[30px] uppercase duration-200">GET SOME $DOUG</button>
              </div>
            </ul>

            <div className="md:block hidden">
              <div className="flex items-center">
                <Button className="bg-[#EEB10E] hover:bg-[#c9a84d] text-[#fff] 2xl:text-[20px] font-karla px-6 2xl:px-7 py-[15px] rounded-[30px] uppercase duration-200">GET SOME $DOUG</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
