import React from 'react';
import Container from '../Container/Container';
import tokenImg from '@/assets/tokenomics/Frame 375.png';
import { FaRegCircle } from "react-icons/fa";

const Tokenomics = () => {
  return (
    <div className='xl:mb-[150px]'>
      <Container>
        <div>

          {/* title section  */}
          <div>
            <p className='text-[#111] text-center textShadow font-montserrat xl:text-[80px] font-bold lg:leading-[96px] tracking-[1.6px] mb-[25px]'>TOKENOMICS</p>
            <p className='w-fit bg-[#EEB10E] mx-auto px-[30px] py-[15px] rounded-full text-[#FFF] font-karla text-[28px] font-medium leading-[42px]'>Max Supply: 777 trillion.</p>
          </div>

          <div className='flex items-center'>
            {/* image section  */}
            <div>
              <img className='2xl:w-[80%]' src={tokenImg} alt="" />
            </div>

            <div className='mt-[135px]'>
              {/* image contain section  */}

              {/* 1 button  */}
              <div className='flex items-center gap-[10px] bg-[#EEB10E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div>
                  <span><FaRegCircle /></span>
                </div>
                <div>
                  <p className='text-[#111] font-karla text-[28px] leading-[42px]'>20% Airdrop</p>
                </div>
              </div>

              {/* 2 button  */}
              <div className='flex items-center gap-[10px] bg-[#ED730E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div>
                  <span><FaRegCircle /></span>
                </div>
                <div>
                  <p className='text-[#111] font-karla text-[28px] leading-[42px]'>20% Liquidity</p>
                </div>
              </div>

              {/* 3 button  */}
              <div className='flex items-center gap-[10px] bg-[#ED970E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div>
                  <span><FaRegCircle /></span>
                </div>
                <div>
                  <p className='text-[#111] font-karla text-[28px] leading-[42px]'>20% Community Reserve</p>
                </div>
              </div>

              {/* 4 button  */}
              <div className='flex items-center gap-[10px] bg-[#31CC20] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div>
                  <span><FaRegCircle /></span>
                </div>
                <div>
                  <p className='text-[#111] font-karla text-[28px] leading-[42px]'>15%  Burn Mechanism</p>
                </div>
              </div>

              {/* 5 button  */}
              <div className='flex items-center gap-[10px] bg-[#EDCD0E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div>
                  <span><FaRegCircle /></span>
                </div>
                <div>
                  <p className='text-[#111] font-karla text-[28px] leading-[42px]'>15% Marketing & Development</p>
                </div>
              </div>

              {/* 6 button  */}
              <div className='flex items-center gap-[10px] bg-[#EDE80E] w-fit py-[15px] px-[20px] rounded-full mb-[20px]'>
                <div>
                  <span><FaRegCircle /></span>
                </div>
                <div>
                  <p className='text-[#111] font-karla text-[28px] leading-[42px]'>10% Early Contributors</p>
                </div>
              </div>

            </div>

          </div>

          <div className='mt-[20px] text-center'>
            <p className='text-[#111] font-karla text-[28px] font-semibold leading-[42px]'>TOKEN INFO</p>
          </div>

          <div className='flex gap-[40px] justify-center mt-[30px]'>
            <div>
              <p className='w-fit bg-[#EEB10E] px-[30px] py-[20px] rounded-lg text-[#FFF] font-karla text-[28px] leading-[42px]'>Token Name: Doug</p>
            </div>
            <div>
              <p className='w-fit bg-[#EEB10E] px-[30px] py-[20px] rounded-lg text-[#FFF] font-karla text-[28px] leading-[42px]'>Token Name: Doug</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;