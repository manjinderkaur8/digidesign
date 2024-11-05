import React from 'react';

const Footer = () => {
  return (
    <div data-scroll data-scroll-section  className='relative px-[3.922vw] py-10 w-full bg-zinc-800 z-10'>
        <div className='flex items-start justify-between'>
      <div className='w-1/2 h-screen  flex flex-col justify-between'>
        <div>
          <h1 className="font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw]">Got Questions?</h1>
          <h1 className="font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw]"> Reach Out, We’re Listening.</h1>
        </div>
        
      </div>
      <div className='w-1/2 h-full '>
        <div className='flex flex-col gap-10'>
          <h1 className="font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw]"></h1>
          <div className='flex flex-col gap-0'>
            <span className='mb-4'>Social links:</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Linkedin</span>
          </div>
          <div className='flex items-center justify-between pr-7'>
            <div className='flex flex-col gap-0 '>
              <span className='mb-4'>Contact Us:</span>
              <span>787878787878</span>
              <span className='mb-4'>Faridabad</span>
              <span>India</span>
              <span></span>
            </div>
            <div className='flex flex-col gap-0'>
              <span className='mb-4'>Menu:</span>
              <span>Home</span>
              <span>Services</span>
              <span>Our work</span>
              <span>About us</span>
              <span>Insights</span>
              <span>Contact us</span>
            </div>
          </div>
          <div className='flex flex-col gap-0'>
            <span className='mb-4'>Email:</span>
            <span>manjinder114k@gmail.com</span>
          </div>
        </div>
      </div>
      </div>
      <div className='flex mt-10 '>
        <div className='w-1/2 '>
        <div > 
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
        </div>
        <div className='w-1/2 flex items-center justify-between'>
            <div>© Manjinder kaur 2024. </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
