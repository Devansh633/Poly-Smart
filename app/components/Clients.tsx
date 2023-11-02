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
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=18y3vftHkND8OuT_5Kobmzjj5dYGATwR8" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=17WNpyIsNw9r_U94g-QAgXB4SvSzz4k_8" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1Knlt4e07FYQ7dJeM_UNTfirEpDEvW8lK" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=12xjKr0p6e6icWJdKrrse5JQqttqheU-d" alt="" width={10000} height={10000}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1y8EvipURIQPn9lwMcd1mcYCIShXtXFx2" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1aoNLouH0-hkfUnHAqv_cl8r3T_Of60O1" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=17urV3uBSHuHuCfCLE-xXS3V2c1KWrFJj" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1KGryq7HK9oL1MqNuUnvUy01pPrMQxgo_" alt="" width={10000} height={10000}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1TNZsLRYHPZTDoEoF9fyHF6EZZrpXtund" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1ARy4JP7Ks5dXQ9uEQ5840cPs51G2P-4w" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1HDVl0c0ffHBrVZC818mfdE7Wc6UXKsXx" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1du-rNLodYe8Lzwi6lC23AubPTVnoFUEB" alt="" width={10000} height={10000}/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1JpFSUbjhGrXDK5ee4btvHn9RIWkgG_qi" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1EvA8cV9pmqYwbrlvCmtkLTOZ0Pl_hJkO" alt="" width={10000} height={10000}/>
                    </div>
                    <div>
                        <Image className="h-auto max-w-[70%] rounded-lg" src="https://drive.google.com/uc?id=1NCNwR9lFhokgCTXG66g601yg5L8NkM8x" alt="" width={10000} height={10000}/>
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