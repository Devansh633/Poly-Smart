import React from 'react'

const Machinery = () => {
  return (
    <div id='machinery' className=' bg-[#F7F9FF]'>

            <div className=" flex flex-col md:flex-row justify-center mx-auto gap-6 md:gap-0 px-7 md:px-10">
                <div className='md:py-16 pl-6 md:w-3/6 pt-16 2xl:w-5/12'>
                    <div className='card  rounded-none mb-4'>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#01bf71]">Machinery</h1>
                        <p className="py-6 text-xl md:text-2xl text-[#0B0C10]">We own sophisticated manufacturing unit with modern machines managed by our qualified team that help us serve our clients better.</p>
                    </div>                
                </div>
                <div className='md:w-3/6 md:py-16  pl-12 flex flex-col gap-6 2xl:w-5/12'>
                    <div className='card  rounded-none mb-4'>
                        
                        <div className="grid grid-cols-2  gap-1">
                            <div className="grid gap-2">
                                <div>
                                    <img className="h-auto max-w-[80%] rounded-lg" src="/images/image-108.jpg" alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto max-w-[80%] rounded-lg" src="/images/image-109.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div>
                                    <img className="h-auto max-w-[80%] rounded-lg" src="/images/image-110.jpg" alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto max-w-[80%] rounded-lg" src="/images/image-111.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Machinery