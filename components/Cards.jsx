/* eslint-disable @next/next/no-img-element */

const Cards = () => {
    return <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center sm:grid-cols-2 max-w-screen-xl mx-auto py-32 gap-5 grid-cols-1 p-5">
        {/* card 1 */}
        <div className="mx-auto bg-white cursor-pointer shadow-sm hover:drop-shadow-2xl transition-all duration-500 p-11 border rounded-lg min-h-[400px] max-w-[380px]">
            <div className="">
                <img className="h-[70px] w-[80px]" src="https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solutions1.svg" alt="" />
            </div>
            <p className="text-2xl leading-8 font-semibold text-wrap my-4">Data Collection <br />Relevence Geneted</p>
            <div className="border border-b my-6"></div>
            <p className="leading-6 font-normal text-base">Efficient data collection, instant relevance. Unlock insights seamlessly with our streamlined approach to data management and analysis.</p>
            <div>
            <button className="text-[#230fbf] px-0 mt-5 text-base text-start font-semibold">READ MORE</button>
        </div>
        </div>
       {/* card 2 */}
       <div className="mx-auto bg-white cursor-pointer shadow-sm hover:drop-shadow-2xl transition-all p-11 border rounded-lg min-h-[400px] max-w-[380px]">
            <div className="">
                <img className="h-[70px] w-[80px]" src="https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution2-1.svg" alt="" />
            </div>
            <p className="text-2xl leading-8 font-semibold text-wrap my-4">Algorithmic AI <br />
& Matching Text</p>
            <div className="border border-b my-6"></div>
            <p className="leading-6 font-normal text-base">Elevate data interactions with Algorithmic AI, ensuring precise <br /> and efficient text matching. Empower your systems effortlessly and smoothly.</p>
            <div>
            <button className="text-[#230fbf] px-0 mt-5 text-base text-start font-semibold">READ MORE</button>
        </div>
    </div>
    {/* card 3 */}
    <div className="bg-white cursor-pointer shadow-sm hover:drop-shadow-2xl transition-all p-11 border mx-auto rounded-lg min-h-[400px] max-w-[380px]">
            <div className="">
                <img className="h-[70px] w-[80px]" src="https://aipt.modeltheme.com/wp-content/uploads/2023/04/Aipt-solution3.svg" alt="" />
            </div>
            <p className="text-2xl leading-8 font-semibold text-wrap my-4">Data & Quality <br />
Expertise Ethically</p>
            <div className="border border-b my-6"></div>
            <p className="leading-6 font-normal text-base">Navigate data with expertise and ethics. Ensuring quality insights through a commitment to ethical practices in handling <br /> information.</p>
            <div>
            <button className="text-[#230fbf] px-0 mt-5 text-base text-start font-semibold">READ MORE</button>
        </div>
    </div>
    </div>
};

export default Cards;