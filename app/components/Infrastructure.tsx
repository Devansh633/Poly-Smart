import React from 'react'

const Infrastructure = () => {
  return (
      <div className='py-[7rem] bg-[#0B0C10]' id='infrastructure'>
        <h1 className='text-4xl md:text-5xl font-bold pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] text-[#01bf71]'>Infrastructure</h1>
        <div className='w-full pb-[5rem] pt-[2rem] px-4'>
          <div className='max-w-[200px] md:max-w-[900px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#F7F9FF]'>
              <div className='mx-auto'>
                <img src="https://drive.google.com/uc?id=1s0ADlPd6HPjo1_P-OPiRkOo1S8I4navj" />
              </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#F7F9FF]'>
              <div className=' mx-auto  '>
                <img src="https://drive.google.com/uc?id=1t0pUCxY1fn4kdkm-g9tXHIGaqDu-7kfB" />
              </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#F7F9FF] '>
              <div className=' mx-auto '>
                <img src="https://drive.google.com/uc?id=1kSJh5FXThLxsYifO87lUWH8qN_7y81Co" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Infrastructure