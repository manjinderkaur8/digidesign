import React from "react";

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.7" className=" h-screen w-full flex flex-col md:flex-row gap-5 items-center px-[3.922vw] relative ">
      <div className="cardcontainer w-full md:w-1/2 h-[55vh]">
        <div className="card relative h-full w-full bg-[#004d43] rounded-xl flex items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
            alt=""
            className="w-36"
          />
          <button className="absolute left-8 bottom-6 border border-[#cdea68] px-2 py-1 rounded-full text-xs text-[#cdea68]">
            &copy;2024-25
          </button>
        </div>
      </div>
      <div className="cardcontainer w-full md:w-1/2 h-[55vh] flex gap-5 ">
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            src="https://clipartcraft.com/images/transparent-logo-design-2.png"
            alt=""
            className="w-36"
          />
          <button className="absolute left-8 bottom-6 border  px-2 py-1 rounded-full text-xs ">
            RATING 5.0 
          </button>
        </div>
        <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            src="https://companieslogo.com/img/orig/CPALL.BK-18f5aefa.png?t=1593709597"
            alt=""
            className="w-36"
          />
          <button className="absolute left-8 bottom-6 border  px-2 py-1 rounded-full text-xs ">
          Your Challenges, Our Expertise.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
