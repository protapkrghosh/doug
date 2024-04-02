import React from 'react';
import Container from '../Container/Container';
import tokenImg from '@/assets/tokenomics/Frame 375.png';
import tokenTitleImg from '@/assets/tokenomics/Vector.png';

const Tokenomics = () => {
  return (
    <div className='xl:mb-[150px]'>
      <Container>
        <div>

          {/* title section  */}
          <div>
            <p className='text-[#111] text-center textShadow font-montserrat xl:text-[80px] font-bold lg:leading-[96px] tracking-[1.6px] mb-[25px]'>TOKENOMICS</p>
            <div className='flex items-center gap-4 w-fit bg-[#EEB10E] mx-auto px-[30px] py-[15px] rounded-full text-[#FFF] font-karla 2xl:text-[28px] xl:text-[24px] font-medium leading-[42px]'>
              <img src={tokenTitleImg} alt="" />
              <p>Max Supply: 777 trillion.</p>
            </div>
          </div>

          <div className='flex justify-evenly items-center mt-[135px]'>
            {/* image section  */}
            <div>
              <img className='2xl:w-[90%] xl:w-[80%]' src={tokenImg} alt="" />
            </div>

            {/* image contain section  */}
            <div>

              {/* 1 button  */}
              <div className='flex items-center gap-[10px] bg-[#EEB10E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div className='h-5 w-5 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla text-[28px] leading-[42px]'>20% Airdrop</p>
              </div>

              {/* 2 button  */}
              <div className='flex items-center gap-[10px] bg-[#ED730E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div className='h-5 w-5 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla text-[28px] leading-[42px]'>20% Liquidity</p>
              </div>

              {/* 3 button  */}
              <div className='flex items-center gap-[10px] bg-[#ED970E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div className='h-5 w-5 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla text-[28px] leading-[42px]'>20% Community Reserve</p>
              </div>

              {/* 4 button  */}
              <div className='flex items-center gap-[10px] bg-[#31CC20] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div className='h-5 w-5 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla text-[28px] leading-[42px]'>15%  Burn Mechanism</p>
              </div>

              {/* 5 button  */}
              <div className='flex items-center gap-[10px] bg-[#EDCD0E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div className='h-5 w-5 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla text-[28px] leading-[42px]'>15% Marketing & Development</p>
              </div>

              {/* 6 button  */}
              <div className='flex items-center gap-[10px] bg-[#EDE80E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div className='h-5 w-5 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla text-[28px] leading-[42px]'>10% Early Contributors</p>
              </div>

            </div>

          </div>

          {/* bottom section  */}
          <div className='mt-[20px] text-center'>
            <p className='text-[#111] font-karla text-[28px] font-semibold leading-[42px]'>TOKEN INFO</p>
          </div>

          <div className='flex gap-[40px] justify-center mt-[30px]'>
            <p className='w-fit bg-[#EEB10E] px-[30px] py-[20px] rounded-lg text-[#FFF] font-karla text-[28px] leading-[42px]'>Token Name: Doug</p>

            <p className='w-fit bg-[#EEB10E] px-[30px] py-[20px] rounded-lg text-[#FFF] font-karla text-[28px] leading-[42px]'>Token Symbol: <span className='uppercase'>$Doug</span></p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;