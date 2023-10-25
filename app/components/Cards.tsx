import React from 'react';
import Carousal from './Carousal';

const Cards = () => {
  return (
    <div className=' pb-[5rem] pt-[2rem] px-[2rem] bg-[#F7F9FF]'>
      <div className='md:max-w-[1240px] max-w-[240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className=' shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#1C2233]'>
            <div className=' mx-auto  '>
                <Carousal/>
            </div>
              <h2 className='text-xl md:text-2xl font-bold text-center py-4 md:py-8 text-[#F7F9FF]'>Propylene bag  (PP)</h2>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#1C2233]'>
          <div className=' mx-auto  '>
                <Carousal/>
            </div>
              <h2 className='text-xl md:text-2xl font-bold text-center py-4 md:py-8 text-[#F7F9FF]'>Low Density Polyethylene bags (LDPE)</h2>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#1C2233] '>
          <div className=' mx-auto '>
                <Carousal/>
            </div>
              <h2 className='text-xl md:text-2xl font-bold text-center py-4 md:py-8 text-[#F7F9FF]'>High Density Polyethylene (HDPE)</h2>
          </div>
      </div>
    </div>
  );
};

export default Cards;
