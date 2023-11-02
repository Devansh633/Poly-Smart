import React from 'react'
import Polybags from './Polybags'
import Apparels from './Apparels'

const Products = () => {
  return (
    <div className='py-[7rem] bg-[#F7F9FF]' id='products'>
        <h1 className='text-4xl md:text-5xl font-bold px-[2rem] pl-[3rem] md:pl-[6rem] 2xl:pl-[13rem] 3xl:pl-[15rem] text-[#01bf71]'>Products</h1>
        <p className='text-2xl md:text-3xl mt-[2rem] text-center font-bold px-[2rem] text-[#0B0C10]'>Our Product has two divisions</p>
         <div className="flex flex-col md:flex-row justify-center mx-auto gap-6 md:gap-0 px-7 md:px-10 ">
            <div className='md:py-16 pl-12 md:w-3/6 flex flex-col gap-6 justify-evenly pt-16 2xl:w-5/12'>
                <div className="card bg-[#1C2233]  rounded-none mb-4">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl text-center text-[#F7F9FF]">POLYBAGS</p>
                        <p className="text-base md:text-lg text-center text-[#F7F9FF]">(Propylene bag (PP) , Low Density Poly Ethylene bags (LDPE) and High Density Poly Ethylene (HDPE))</p>
                    </div>
                </div>
            </div>
            <div className=' md:w-3/6 md:py-16  pl-12 flex flex-col gap-6 2xl:w-5/12'>
                <div className="card bg-[#1C2233]  rounded-none mb-4">
                    <div className="card-body p-[1rem]">
                        <p className="text-xl md:text-2xl text-center text-[#F7F9FF]">APPARELS PACKING ITEMS</p>
                    </div>
                </div>
            </div>
        </div>
        <Polybags/>
        <Apparels/>

    </div>
  )
}

export default Products
