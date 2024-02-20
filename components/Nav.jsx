
"use client"
import Link from 'next/link';
import main_img from "../assets/final_main.png";
import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import { RiSunFoggyFill } from "react-icons/ri";
import useThemeStore from '@/store/store';
const Nav = () => {
  const {toggleDarkMode, isDarkMode} = useThemeStore()
  const toggleDarkModeHandle = () => {
    toggleDarkMode();
  };
    return <nav class="border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={main_img} height={45} width={45} alt='scorpion' />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Scorpion<span className='text-green-600'>AI</span></span>
      </a>
      <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <Link href="#" class={`"block py-2 px-3 ${isDarkMode ? "text-green-600" : "text-black"} rounded"`} aria-current="page">Home</Link>
          </li>
      
          <li>
            <Link href="#services" class={`"block py-2 px-3 ${isDarkMode ? "text-green-600" : "text-black"} rounded"`}>Services</Link>
          </li>
          <li>
            <Link href="#solutions" class={`"block py-2 px-3 ${isDarkMode ? "text-green-600" : "text-black"} rounded"`}>Solutions</Link>
          </li>
          <li>
            <Link href="#about" class={`"block py-2 px-3 ${isDarkMode ? "text-green-600" : "text-black"} rounded"`}>About Us</Link>
          </li>
          {/* day night button */}
          <li>
            <button onClick={toggleDarkModeHandle} className='text-xl text-green-500'>
              {isDarkMode ? <RiSunFoggyFill /> : <BsMoonStarsFill /> }  </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
};

export default Nav;