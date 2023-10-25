import React from 'react'

const Clients = () => {
  return (
    <div className='py-[7rem] bg-[#F7F9FF]' id='clients'>
      <div className=' pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem]'>
        <h1 className='md:text-5xl text-4xl font-bold text-[#01bf71]'>Clients</h1>
          <div className='md:w-3/6 md:py-16  pl-12 flex flex-col gap-6 2xl:w-9/12 pt-[2rem]'>
            <div className='card  rounded-none mb-4'>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-125.png" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-126.png" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-127.png" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-128.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-129.png" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-130.png" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-131.png" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-132.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-133.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-138.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-108.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-[70%] rounded-lg" src="/images/image-108.jpg" alt=""/>
                    </div>
                </div>
              </div>     
            </div>
          </div>
          <h1 className='md:text-2xl text-xl text-[#0B0C10] right-0'> And Many More....</h1>
      </div>
    </div>
  )
}

export default Clients