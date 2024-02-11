"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div id="services">
      <div className="flex h-48 items-center justify-center">
      <h1 className="bg-gray-50 mx-auto md:m-0 w-max font-semibold text-base leading-4 tracking-[1px] sm:text-[14px] px-3 py-2 rounded-full flex justify-between items-center gap-3">
            SERVICE{" "}
            <span className=" bg-white blinking-cursor inline-block border-r-0 border-b-0 border-t-0 border-4 border-purple-800 h-4 pt-1"></span>
          </h1>
      </div>
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-56%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-lg w-max mx-auto">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://img.freepik.com/premium-photo/business-chart-graph-businessman-touching-virtual-screen-hologram-business-technology-concept_55997-1846.jpg?size=626&ext=jpg&ga=GA1.1.717406323.1704710297&semt=ais",
    title: "DATA SCIENCE",
    id: 1,
  },
  {
    url: "https://img.freepik.com/free-photo/cloud-storage-background-remixed-from-public-domain-by-nasa_53876-104240.jpg?size=626&ext=jpg&ga=GA1.1.717406323.1704710297&semt=ais",
    title: "BIG DATA",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "ARTIFICIAL INTEL",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/3785932/pexels-photo-3785932.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "AI SOLUTION",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "MACHINE LEARNING",
    id: 5,
  },
  {
    url: "https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "DEEP LEARNING",
    id: 6,
  },
  {
    url: "https://images.pexels.com/photos/257699/pexels-photo-257699.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "TECHNOLOGY",
    id: 7,
  },
];