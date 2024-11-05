import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX);
      const angleDeg = angle * (180 / Math.PI);

      // Set the translation values based on mouse position
      setTranslate({ x: deltaX * 0.03, y: deltaY * 0.03 });

      // Set the rotation angle
      setRotate(angleDeg - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed='-.7' className='relative h-full w-full bg-[url("https://images.pexels.com/photos/2068411/pexels-photo-2068411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-center'>
        <div className="absolute flex items-center justify-between gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="relative w-[14vw] h-[14vw] bg-zinc-100 rounded-full flex items-center justify-center overflow-hidden">
            <div
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px)`,
                transition: "transform 0.1s easein",
              }}
              className="relative w-[9vw] h-[9vw] rounded-full bg-zinc-900 overflow-hidden"
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className={`line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full px-[2px]`}
              >
                <div className="w-[1.7vw] h-[1.7vw] rounded-full bg-zinc-100"></div>
              </div>
              
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                Check Now.
              </span>
          </div>

          <div className="relative w-[14vw] h-[14vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px)`,
                transition: "transform 0.1s easein",
              }}
              className="relative w-[9vw] h-[9vw] rounded-full bg-zinc-900 overflow-hidden"
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full px-[2px]"
              >
                <div className="w-[1.7vw] h-[1.7vw] rounded-full bg-zinc-100"></div>
              </div>
              
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                Want to know?
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
