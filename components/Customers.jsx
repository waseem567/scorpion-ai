/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";

const Customers = () => {
    return  <>
    <div className="flex mt-20 items-center justify-center py-10">
        <h1 className="bg-green-100 text-black mx-auto md:m-0 w-max font-semibold text-base leading-4 tracking-[1px] sm:text-[14px] px-3 py-2 rounded-full flex justify-between items-center gap-3">
          OUR CUSTOMERS{" "}
          <span className=" bg-white blinking-cursor inline-block border-r-0 border-b-0 border-t-0 border-4 border-green-800 h-4 pt-1"></span>
        </h1>
      </div>
    <Marquee autoFill={true}>
        <div className="flex items-center gap-20 pb-24">
        <img className="mx-20" height={80} width={140} src="https://www.svgrepo.com/show/303143/microsoft-logo.svg" alt="ms" />
    <img height={80} width={140} src="https://www.svgrepo.com/show/303132/coca-cola-logo.svg" alt="ms" />
    <img height={80} width={140} src="https://www.svgrepo.com/show/303141/spotify-1-logo.svg" alt="ms" />
    <img height={80} width={140} src="https://www.svgrepo.com/show/303121/forbes-logo.svg" alt="ms" />
    <img height={80} width={140} src="https://www.svgrepo.com/show/303143/microsoft-logo.svg" alt="ms" />
        </div>
    
  </Marquee>
  </>
};

export default Customers;