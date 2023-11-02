import React from 'react'
import Image from 'next/image';
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-[#F7F9FF] text-[#0B0C10]">
  <aside>
    <Image src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/logo_ps.webp" className="md:w-[10rem] w-[7rem] " alt="" width={10000} height={10000}/>
    <p className="font-bold">
      Poly Smart Ltd. <br/>Providing Flexible Packaging Solutions since 2016
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
</footer>
    </div>
  )
}

export default Footer