import React from 'react'
import Image from 'next/image';
const Infrastructure = () => {
  return (
      <div className='py-[7rem] bg-[#0B0C10]' id='infrastructure'>
        <h1 className='text-4xl md:text-5xl font-bold pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] text-[#01bf71]'>Infrastructure</h1>
        <div className='w-full pb-[5rem] pt-[2rem] px-4'>
          <div className='max-w-[200px] md:max-w-[900px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#F7F9FF]'>
              <div className='mx-auto'>
                <Image src="https://drive.google.com/uc?id=1Ey4cX9wRwlEA_RgWUaOL-0XMIdj38RS6" alt="" width={10000} height={10000}/>
              </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#F7F9FF]'>
              <div className=' mx-auto  '>
                <Image src="https://drive.google.com/uc?id=1Xlm6ynvasPns2mcWXi-oGTryd6Hso9J6" alt="" width={10000} height={10000}/>
              </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#F7F9FF] '>
              <div className=' mx-auto '>
                <Image src="https://drive.google.com/uc?id=12Cpfaq11n7PsVKNX2vF4GbQ3HrBxXLrb" alt="" width={10000} height={10000}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Infrastructure