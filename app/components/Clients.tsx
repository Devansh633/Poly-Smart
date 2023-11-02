import Image from 'next/image';
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
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c1.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c2.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c3.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c4.webp" alt="" width={10000} height={10000}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c5.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c6.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c7.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c8.webp" alt="" width={10000} height={10000}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c9.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c10.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c11.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c12.webp" alt="" width={10000} height={10000}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c13.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c14.webp" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/c15.webp" alt="" width={10000} height={10000}/>
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