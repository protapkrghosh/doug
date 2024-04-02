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
            <p className='text-[#111] text-center textShadow font-montserrat xl:text-[80px] md:text-[60px] text-[28px] font-bold lg:leading-[96px] tracking-[1.6px] md:mb-[25px] mb-[10px]'>TOKENOMICS</p>
            <div className='flex items-center gap-4 w-fit bg-[#EEB10E] mx-auto px-[30px] py-[15px] rounded-full text-[#FFF] font-karla 2xl:text-[28px] lg:text-[23px] md:text-[20px] text-[14px] font-medium leading-[42px]'>
              <img src={tokenTitleImg} alt="" />
              <p>Max Supply: 777 trillion.</p>
            </div>
          </div>

          <div className='flex justify-evenly items-center md:mt-[135px] mt-[35px]'>
            {/* image section  */}
            <div className='xl:w-auto lg:w-[60%] md:w-[55%] w-[55%]'>
              <img className='2xl:w-[90%] xl:w-[80%] lg:w-[80%] md:w-[80%]' src={tokenImg} alt="" />
            </div>

            {/* image contain section  */}
            <div className='xl:w-auto lg:w-[40%] md:w-[45%]'>

              {/* 1 button  */}
              <div className='flex items-center gap-[10px] bg-[#EEB10E] w-fit md:py-[15px] py-[10px] md:px-[20px] px-[8px] rounded-full md:mb-[20px] mb-[10px]'>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla xl:text-[28px] lg:text-[20px] text-[12px] leading-[42px]'>20% Airdrop</p>
              </div>

              {/* 2 button  */}
              <div className='flex items-center gap-[10px] bg-[#ED730E] w-fit md:py-[15px] py-[10px] md:px-[20px] px-[8px] rounded-full md:mb-[20px] mb-[10px]'>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla xl:text-[28px] lg:text-[20px] text-[12px] leading-[42px]'>20% Liquidity</p>
              </div>

              {/* 3 button  */}
              <div className='flex items-center gap-[10px] bg-[#ED970E] w-fit md:py-[15px] py-[10px] md:px-[20px] px-[8px] rounded-full md:mb-[20px] mb-[10px]'>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla xl:text-[28px] lg:text-[20px] text-[12px] leading-[42px]'>20% Community Reserve</p>
              </div>

              {/* 4 button  */}
              <div className='flex items-center gap-[10px] bg-[#31CC20] w-fit md:py-[15px] py-[10px] md:px-[20px] px-[8px] rounded-full md:mb-[20px] mb-[10px]'>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla xl:text-[28px] lg:text-[20px] text-[12px] leading-[42px]'>15%  Burn Mechanism</p>
              </div>

              {/* 5 button  */}
              <div className='flex items-center gap-[10px] bg-[#EDCD0E] w-fit md:py-[15px] py-[10px] md:px-[20px] px-[8px] rounded-full md:mb-[20px] mb-[10px]'>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla xl:text-[28px] lg:text-[20px] text-[12px] leading-[42px]'>15% Marketing & Development</p>
              </div>

              {/* 6 button  */}
              <div className='flex items-center gap-[10px] bg-[#EDE80E] w-fit md:py-[15px] py-[10px] md:px-[20px] px-[8px] rounded-full md:mb-[20px] mb-[10px]'>
                <div className='md:h-5 h-4 md:w-5 w-4 bg-[#FFF] border-2 border-black rounded-full' />
                <p className='text-[#111] font-karla xl:text-[28px] lg:text-[20px] text-[12px] leading-[42px]'>10% Early Contributors</p>
              </div>

            </div>

          </div>

          {/* bottom section  */}
          <div className='mt-[20px] text-center'>
            <p className='text-[#111] font-karla lg:text-[28px] md:text-[24px] font-semibold leading-[42px]'>TOKEN INFO</p>
          </div>

          <div className='flex gap-[40px] justify-center mt-[30px]'>
            <p className='w-fit bg-[#EEB10E] xl:px-[30px] lg:px-[20px] md:px-[20px] xl:py-[20px] lg:py-[20px] md:py-[10px] rounded-lg text-[#FFF] font-karla xl:text-[28px] lg:text-[24px] md:text-[18px] leading-[42px]'>Token Name: Doug</p>

            <p className='w-fit bg-[#EEB10E] xl:px-[30px] lg:px-[20px] md:px-[20px] xl:py-[20px] lg:py-[20px] md:py-[10px] rounded-lg text-[#FFF] font-karla xl:text-[28px] lg:text-[24px] md:text-[18px] leading-[42px]'>Token Symbol: <span className='uppercase'>$Doug</span></p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;