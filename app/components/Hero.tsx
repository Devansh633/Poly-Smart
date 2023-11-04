import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div id='hero'>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/hero.webp)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md pb-[10rem]">
    <Image src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/ps_logo.webp" className="md:w-[20rem] w-[14rem] " alt="" width={10000} height={10000}/>
    
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Hero