import React from 'react'

const Hero = () => {
  return (
    <div id='hero'>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/images/hero2.png)'}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl md:text-6xl font-bold text-[#01bf71]">Poly Smart</h1>
      <p className="mb-5">Provident </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero