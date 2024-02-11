/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";

const TEAM = [
  {
    id: 1,
    img: "https://aipt.modeltheme.com/wp-content/uploads/2018/06/Aipt-member1.jpg",
    desg: "LEAD ENGINEER",
    name: "WASEEM AHMAD CHISHTI",
  },
  {
    id: 2,
    img: "https://aipt.modeltheme.com/wp-content/uploads/2018/06/Aipt-member1.jpg",
    desg: "WEB EXPERT",
    name: "MUHAMMAD WASEEM",
  },
  {
    id: 3,
    img: "https://aipt.modeltheme.com/wp-content/uploads/2018/06/Aipt-member1.jpg",
    desg: "COMING SOON",
    name: "COMING SOON",
  },
  {
    id: 4,
    img: "https://aipt.modeltheme.com/wp-content/uploads/2018/06/Aipt-member1.jpg",
    desg: "COMING SOON",
    name: "COMING SOON",
  },
];

const Team = () => {
 

  return (
    <React.Fragment>
      <div id="about" className="flex h-40 items-center justify-center">
        <h1 className="bg-green-100 mx-auto md:m-0 w-max font-semibold text-base leading-4 tracking-[1px] sm:text-[14px] px-3 py-2 rounded-full flex justify-between items-center gap-3">
          GET TO KNOW OUR TEAM{" "}
          <span className=" bg-white blinking-cursor inline-block border-r-0 border-b-0 border-t-0 border-4 border-purple-800 h-4 pt-1"></span>
        </h1>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center sm:grid-cols-2 max-w-screen-xl mx-auto gap-5 grid-cols-1 px-4 md:px-0">
        {/* card 1 */}
        {TEAM.map((team) => (
          <div
            key={team.id}
            className="mx-auto bg-white cursor-pointer transition-all duration-500 rounded-lg min-h-[400px] max-w-[360px]"
          >
            <div className="w-full">
              <img className="block w-full" src={team.img} alt="photo" />
            </div>
            <div className="tracking-wider text-center pt-3 text-purple-600">
              {team.desg}
            </div>
            <h2 className="text-center pb-3 text-lg font-black roboto-bold">
              {team.name}
            </h2>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Team;
