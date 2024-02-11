/* eslint-disable @next/next/no-img-element */
import icon from "../assets/ring.png";
const SERVICES = [
  {
    id: 1,
    heading: "AI Writer",
    img: "https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution1.svg",
    text: "Diversify what do you feel you would bring to the table if you were hire.",
  },
  {
    id: 2,
    heading: "AI Text Completer",
    img: "https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution2.svg",
    text: "Level the playing field high touch client we need more the loop.",
  },
  {
    id: 3,
    heading: "AI Image Generator",
    img: "https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution6.svg",
    text: "Personal development turd polishing, so commitment to the cause draft.",
  },
  {
    id: 4,
    heading: "AI Social Post",
    img: "https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution4.svg",
    text: "We need to future-proof this where do we stand on the latest client.",
  },
  {
    id: 5,
    heading: "Ai Video Generator",
    img: "	https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution05-1.svg",
    text: "We need to socialize the comms with the wider stakeholder community.",
  },
  {
    id: 4,
    heading: "AI Social Post",
    img: "https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution4.svg",
    text: "We need to future-proof this where do we stand on the latest client.",
  },
];
const Solution = () => {
  return (
    <>
      <div id="solutions" className="my-20 max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center my-20">
          <h1 className="bg-green-100 my-20 mx-auto md:m-0 w-max font-semibold text-base leading-4 tracking-[1px] sm:text-[14px] px-3 py-2 rounded-full flex justify-between items-center gap-3">
            SOLUTIONS WE PROVIDE
            <span className=" bg-white blinking-cursor inline-block border-r-0 border-b-0 border-t-0 border-4 border-purple-800 h-4 pt-1"></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded border flex flex-col justify-center items-center p-5 cursor-pointer hover:shadow-md gap-3 mx-4 sm:mx-0 hover:border-green-200 transition-all duration-500 overflow-hidden solution_card hover:scale-105"
            >
              <div className="sol_img">
                <img
                  height={50}
                  width={60}
                  src={service.img}
                  alt="small logos"
                />
              </div>
              <h1 className="text-lg poppins-medium font-semibold">
                {service.heading}
              </h1>
              <p className="font-normal text-center poppins-medium">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solution;
