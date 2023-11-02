import React from 'react'
import Image from 'next/image';
const Machinery = () => {
  return (
    <div id='machinery' className=' bg-[#F7F9FF]'>

            <div className=" flex flex-col md:flex-row justify-center mx-auto gap-6 md:gap-0 px-7 md:px-[5rem]">
                <div className='md:py-16 pl-6 md:w-3/6 pt-16 2xl:w-5/12'>
                    <div className='card  rounded-none mb-4'>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#01bf71]">Machinery</h1>
                        <p className="py-6 text-xl md:text-2xl text-[#0B0C10]">We own sophisticated manufacturing unit with modern machines managed by our qualified team, that help us serve our clients better.
</p>
                    </div>                
                </div>
                <div className='md:w-3/6 md:py-16  pl-12 flex flex-col gap-6 2xl:w-5/12'>
                    <div className='card  rounded-none mb-4'>
                        
                        <div className="grid grid-cols-2  gap-1">
                            <div className="grid gap-2">
                                <div>
                                    <Image className="h-auto max-w-[80%] rounded-lg" src="https://drive.google.com/uc?id=1oIYGoAzJaP7-8DJMeEo4cM6BwxH6tn7a" alt="" width={10000} height={10000}/>
                                </div>
                                <div>
                                    <Image className="h-auto max-w-[80%] rounded-lg" src="https://drive.google.com/uc?id=1hpe4nHagCNiYxKF20WpjabijGvzsSmFB" alt="" width={10000} height={10000}/>
                                </div>
                                <div>
                                    <Image className="h-auto max-w-[80%] rounded-lg" src="https://drive.google.com/uc?id=1r-DmohRl_3oYMlkuKuclXUi-GQvtp2bp" alt="" width={10000} height={10000}/>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div>
                                    <Image className="h-auto max-w-[80%] rounded-lg" src="https://drive.google.com/uc?id=14oO4Fgs7mIIasdk95__ffy2nHuxxFh0F" alt="" width={10000} height={10000}/>
                                </div>
                                <div>
                                    <Image className="h-auto max-w-[80%] rounded-lg" src="https://drive.google.com/uc?id=1QuM2zfKlZUQ-VIzqDOMh9M-HMlldEkDh" alt="" width={10000} height={10000}/>
                                </div>
                                <div>
                                    <Image className="h-auto max-w-[80%] rounded-lg" src="https://drive.google.com/uc?id=16U7xNBXh0dssAo3xiCGNFWu8KxvZS90V" alt="" width={10000} height={10000}/>
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