import React from 'react'
import Image from 'next/image';
const Apparels = () => {
  return (
    <div className='py-[4rem]' id='apparels'>
        <h1 className='text-2xl md:text-4xl font-bold px-[2rem] pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] text-[#0B0C10]'>Apparels Packing Item</h1>
        <p className='text-xl md:text-2xl font-bold my-4 px-[2rem] pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] text-[#0B0C10]'>POLY SMART is also one of largest manufacturer Apparel Packing item in South India. We manufacture PVC Collar Stays, Clips, Tags, Inseters, Back support  ETC.. We work with some of the largest names in the Indian Fashion space..</p>
        <p className='text-xl md:text-2xl font-bold my-4 px-[2rem] pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] text-[#0B0C10]'>We are supplying</p>
        <div className="flex flex-col justify-center gap-6 md:gap-0">
            <div className='md:py-8  flex flex-col gap-6 justify-evenly pt-8 pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] px-[2rem]'>
                <div className="card bg-[#1C2233]  rounded-none mb-4 ">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl font-bold text-[#F7F9FF]">Shirt Backsupport</p>
                        <p className="text-base md:text-lg text-[#F7F9FF]">POLY SMART is one of the largest manufacturers of Shirt Back Support / Shirt Attai. We manufacture back support from 250-700 GSM. We manufacture foam and plain backsupport</p>
                    </div>
                </div>
                <div className="card bg-[#1C2233]   rounded-none mb-4">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl font-bold text-[#F7F9FF]">Cardboard Inserters</p>
                        <p className="text-base md:text-lg text-[#F7F9FF]">POLY SMART manufacturers cardboard inserters used for various apparel packing purposes. Inserters range from 250-450 GSM and can be customised.</p>
                    </div>
                </div>
                <div className="card bg-[#1C2233]   rounded-none mb-4">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl font-bold text-[#F7F9FF]">Plastic Patti / Collar Stay</p>
                        <p className="text-base md:text-lg text-[#F7F9FF]">POLY SMART manufacturers Plastic – PET/PVC collar stays used for Collar support for Shirts during the ironing and packing stage. Thickness available from .35MM to .50MM.</p>
                    </div>
                </div>
                <div className="card bg-[#1C2233]   rounded-none mb-4">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl font-bold text-[#F7F9FF]">Clips - Metal and Plastic</p>
                        <p className="text-base md:text-lg text-[#F7F9FF]">POLY SMART manufactures Plastic and Metal Clips used for packing shirts, Kurtis and T shirts. Our metal clips are made our of Stainless Steel and nickel free. Our plastic Clips are made out of recycled plastic. </p>
                    </div>
                </div>
                <div className="card bg-[#1C2233]   rounded-none mb-4">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl font-bold text-[#F7F9FF]">Foam for Garment Packing</p>
                        <p className="text-base md:text-lg text-[#F7F9FF]">POLY SMART deals in foam sheets used for packing garments. We are experts in foam Back supports for Shirts. Foam thickness ranges from 3/4/5 MM.</p>
                    </div>
                </div>
                <div className="card bg-[#1C2233]   rounded-none mb-4">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl font-bold text-[#F7F9FF]">Butter Paper and Tissue Paper for Garment Packing</p>
                        <p className="text-base md:text-lg text-[#F7F9FF]">Ritika Ventures manufactures Butter Paper and Tissue paper used for packing Shirts , Kurtis and T-Shirts. We also print on the same.</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='flex md:gap-[5rem] gap-[2rem] h-auto flex-wrap px-[2rem] justify-center'>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w6.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>Paper Patti</p>
            </div>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w7.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>PVC Butterfly</p>
            </div>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w8.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>Pins and Cables</p>
            </div>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w1.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>Collar Stay</p>
            </div>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w3.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>Cardboard Inserter</p>
            </div>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w4.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>Clips</p>
            </div>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w2.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>Back Support</p>
            </div>
            <div className="p-[1rem] bg-[#0B0C10] rounded-lg md:w-[14rem] w-[11rem] h-fit">
                <div className="">
                    <Image className='rounded-lg' src="https://raw.githubusercontent.com/Devansh633/Poly-Smart-Images/main/Poly-Smart-Images/w5.webp" alt="" width={10000} height={10000}/>
                </div>
                <p className='text-[#F7F9FF] text-sm sm:text-base md:text-xl text-center font-bold py-[0.5rem] md:py-[1rem]'>Printed Tissue</p>
            </div>
        </div>
    </div>
  )
}

export default Apparels;