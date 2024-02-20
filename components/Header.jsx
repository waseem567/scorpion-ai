"use client"
import main_img from "../assets/final_main.png";
import Image from "next/image";
import useThemeStore from "@/store/store";
const Header = () => {
  const {isDarkMode} = useThemeStore();
  return (
    <div
      data-aos="zoom-in"
      className="relative roboto-bold max-w-screen-xl grid-cols-1 mx-auto grid md:grid-cols-2 sm:gap-0 mt-7"
    >
      {/* 1 */}
      <div className="flex-1 flex flex-col justify-center items-end">
        <div className="mx-auto flex flex-col justify-center items-around h-full lg:w-full gap-5">
          <h1 className={`bg-green-100 mx-auto md:m-0 w-max font-semibold text-base leading-4 tracking-[1px] sm:text-[14px] px-3 py-2 rounded-full flex justify-between items-center gap-3 text-black`}>
            WELCOME{" "}
            <span className=" bg-white blinking-cursor inline-block border-r-0 border-b-0 border-t-0 border-4 border-green-800 h-4 pt-1"></span>
          </h1>
          <div className="text-center md:text-start md:text-7xl text-4xl leading-[45px] md:leading-[65px] font-bold">
           Transforming <span className="text-green-600">Data</span> into <span className="text-green-800">Innovation</span>
          </div>
          <div className="text-center md:text-start text-base font-normal px-0 md:w-9/12 ">
          Elevate your business with Scorpion AI. We specialize in Big Data, Data Science, and AI, crafting intelligent solutions for innovation and growth.
          </div>
          <div className="py-3">
            <button className="px-10 py-3 mx-auto md:mx-0 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex justify-center items-center text-white">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="sm:flex-1 flex justify-center items-center sm:flex sm:justify-end sm:items-end w-full">
        <div className="relative h-[500px] w-full flex justify-center items-center md:justify-end md:items-end">
          <Image className="h-[300px] w-[300px] md:w-[450px] md:h-[400px] mx-auto block main_img absolute md:right-0 md:bottom-0" height={400} width={500} src={main_img} alt="main header" />
            {/* <Image className="absolute hidden md:block transition-all bottom-0 main_img right-0 hover:animate-spin hover:cursor-pointer" alt="main" height={150} width={150} src={ring}/>
            <Image className="absolute hidden md:block top-3 main_img left-5 hover:animate-bounce hover:cursor-pointer" alt="main" height={150} width={150} src={box}/>
        */}</div> 
      </div>
    </div>
  );
};

export default Header;
