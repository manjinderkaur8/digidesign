import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-[999] w-full px-[5.922vw] py-5 font-[NeueMontreal] flex items-center justify-between backdrop-blur-2xl">
      <div className="logo">
      <svg
  width="100"
  height="30"
  viewBox="0 0 100 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>

  <path
    d="M10 5C5 5 1 9 1 15C1 21 5 25 10 25C15 25 19 21 19 15C19 9 15 5 10 5ZM10 22C7 22 4.5 19.5 4.5 15C4.5 10.5 7 8 10 8C13 8 15.5 10.5 15.5 15C15.5 19.5 13 22 10 22Z"
    fill="currentColor"
  ></path>


  <text x="22" y="20" font-family="Arial, sans-serif" font-size="15" fill="currentColor">Digi</text>


  <path
    d="M50 5 L53 20 L57 10 L61 20 L64 5"
    stroke="currentColor"
    stroke-width="2"
    fill="none"
  ></path>

 
  <text x="68" y="20" font-family="Arial, sans-serif" font-size="15" fill="currentColor">Web</text>
</svg>

      </div>
      <div className="links flex gap-[3vw]">
        {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-[2.1vw] md:text-[1.3vw] font-light capitalize ${
                index === 4 && "ml-[10vw]"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
