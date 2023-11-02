import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
    <div className="py-[10rem] px-[2rem] pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] bg-[#0B0C10]">
      <div className=" align-middle ">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#01bf71]">Contact Us</h1>
          <div className='flex pb-6 pt-[3rem] items-center'>
            <div className='rounded-full bg-[#F7F9FF] p-[0.5rem] w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center min-h-[3rem] min-w-[3rem] md:min-h-[4rem] md:min-w-[4rem]'>
              <img src="https://drive.google.com/uc?id=1Bog0Q1M_w0cZp3pm1_JXNI5DptKFpEyz" className='w-[70%] h-[70%]' />
            </div>
            <p className="text-base md:text-xl text-[#F7F9FF] ml-4 flex items-center">
              Poly Smart,
              NO.28B, 15TH CROSS, 2ND MAIN
              3RD BLOCK, VISHWAPRIYA LAYOUT,
              BEGUR, BANGALORE - 560068
            </p>
          </div>

          <div className='flex py-6 items-center'>
            <div className='rounded-full bg-[#F7F9FF] p-[0.5rem] w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center min-h-[3rem] min-w-[3rem] md:min-h-[4rem] md:min-w-[4rem]'>
              <img src="https://drive.google.com/uc?id=1BaV2coyWLlQcXvHygxWNPaAmW0BT_N_D" className='w-[70%] h-[70%]' />
            </div>
            <p className="text-base md:text-xl text-[#F7F9FF] ml-4 flex items-center">
            +91 8095919190 – ANUJ BAID<br/>
            +91 8050737114 – TANUJ BAID
            </p>
          </div>
          <div className='flex py-6 items-center'>
            <div className='rounded-full bg-[#F7F9FF] p-[0.5rem] w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] flex items-center justify-center min-h-[3rem] min-w-[3rem] md:min-h-[4rem] md:min-w-[4rem]'>
              <img src="https://drive.google.com/uc?id=16rD-yWOO_6m6XPaUdKYkqqkfyWfJh8P4" className='w-[70%]l h-[70%]' />
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