import React from 'react'
import Image from 'next/image';
const Contact = () => {
  return (
    <div id='contact'>
    <div className="py-[10rem] px-[2rem] pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] bg-[#0B0C10]">
      <div className=" align-middle ">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#01bf71]">Contact Us</h1>
          <div className='flex pb-6 pt-[3rem] items-center'>
            <div className='rounded-full bg-[#F7F9FF] p-[0.5rem] w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center min-h-[3rem] min-w-[3rem] md:min-h-[4rem] md:min-w-[4rem]'>
              <Image src="https://drive.google.com/uc?id=1j12ZO5dRpRY5BLLg5pOps6dxJVzVefXJ" className='w-[70%] h-[70%]' alt="" width={10000} height={10000}/>
            </div>
            <p className="text-base md:text-xl text-[#F7F9FF] ml-4 flex items-center">
              POLY SMART,
     No. 303 to 307, STB Industrial EST Road
     Haragadde, Anakal – Jignie Road,
     Banglore -560105

            </p>
          </div>

          <div className='flex py-6 items-center'>
            <div className='rounded-full bg-[#F7F9FF] p-[0.5rem] w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center min-h-[3rem] min-w-[3rem] md:min-h-[4rem] md:min-w-[4rem]'>
              <Image src="https://drive.google.com/uc?id=11K7oLAhtEyqkBMYksdNRuOU2ZfQv4C4r" className='w-[70%] h-[70%]' alt="" width={10000} height={10000}/>
            </div>
            <p className="text-base md:text-xl text-[#F7F9FF] ml-4 flex items-center">
            +91 8095919190 – ANUJ BAID<br/>
            +91 8050737114 – TANUJ BAID
            </p>
          </div>
          <div className='flex py-6 items-center'>
            <div className='rounded-full bg-[#F7F9FF] p-[0.5rem] w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center min-h-[3rem] min-w-[3rem] md:min-h-[4rem] md:min-w-[4rem]'>
              <Image src="https://drive.google.com/uc?id=1pLIqCsMUTwhoC-D5S_Umk6gTyW34cD4h" className='w-[70%]l h-[70%]' alt="" width={10000} height={10000}/>
            </div>
            <p className="text-base md:text-xl text-[#F7F9FF] ml-4 flex items-center">
            polysmartblr@gmail.com
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact