"use client"
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Example from "@/components/Carousel";
import Solution from "@/components/Solution";
import Team from "@/components/Team";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import useThemeStore from "@/store/store";
import { useEffect } from "react";
export default function Home() {
  const {isDarkMode} = useThemeStore();
  useEffect(()=> {
    if(isDarkMode)
      document.body.classList.add("dark-mode")
  else
    document.body.classList.remove("dark-mode")
  }, [isDarkMode])
  return (
    <>
    <div className=" z-[-1] h-[943px] w-full absolute top-0 left-0"></div>
    <div className="container mx-auto">
      <Nav />
      <Header />
      <Cards />
      <Example />
      <Solution />
      <Team />
      <Customers />
      <Footer />
    </div>
    </>
  );
}
