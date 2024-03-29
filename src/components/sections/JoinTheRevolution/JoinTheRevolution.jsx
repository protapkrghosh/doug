import React from 'react';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import JoinTheRevolutionImg from '@/assets/joinThe/image 390.png'
import largeDevice from '@/assets/joinThe/Line12.png'

const JoinTheRevolution = () => {
  return (
    <div className='my-[75px]'>
      <Container>
        <div className='flex items-center 2xl:gap-[105px]'>
          {/* images section  */}
          <div className='lg:w-1/2'>
            <div>
              <img src={JoinTheRevolutionImg} alt="" />
              <p className='xl:mt-[-15px] lg:mb-[30px] text-[#333131] text-[20px] font-semibold leading-[30px]'>Join today. Revolutionize your crypto journey. Buy now</p>
              <Button className="uppercase px-6">Get some $doug</Button>
            </div>
          </div>

          {/* contant section  */}
          <div className='lg:w-1/2'>
            <div className='relative'>
              <p className='text-[#111] textShadow font-montserrat 2xl:text-[80px] font-bold leading-[96px] tracking-[1.6px] mb-[36px]'>JOIN THE REVOLUTION</p>

              {/* large device line  */}
              {/* 1 */}
              <div className='absolute 2xl:bottom-[266px] 2xl:left-[20px]'>
                <img src={largeDevice} alt="" />
              </div>
              {/* 2 */}
              <div className='absolute 2xl:bottom-[190px] 2xl:left-[20px]'>
                <img src={largeDevice} alt="" />
              </div>
              {/* 3 */}
              <div className='absolute 2xl:bottom-[118px] 2xl:left-[20px]'>
                <img src={largeDevice} alt="" />
              </div>
              {/* 4 */}
              <div className='absolute 2xl:bottom-[42px] 2xl:left-[20px]'>
                <img src={largeDevice} alt="" />
              </div>

              <div>

                <div className='flex items-center gap-[15px] mb-[30px]'>
                  <div className='w-11 h-11 bg-[#EEB10E] border-4 border-[#8F7F53] rounded-full flex justify-center items-center'>
                  </div>
                  <p className='text-[#111] text-[20px] font-karla font-medium'>Inclusive Airdrops</p>
                </div>

                <div className='flex items-center gap-[15px] mb-[30px]'>
                  <div className='w-11 h-11 bg-[#EEB10E] border-4 border-[#8F7F53] rounded-full flex justify-center items-center'>
                  </div>
                  <p className='text-[#111] text-[20px] font-karla font-medium'>Exclusive NFTs for Community Members</p>
                </div>

                <div className='flex items-center gap-[15px] mb-[30px]'>
                  <div className='w-11 h-11 bg-[#EEB10E] border-4 border-[#8F7F53] rounded-full flex justify-center items-center'>
                  </div>
                  <p className='text-[#111] text-[20px] font-karla font-medium'>Community-Driven Initiatives</p>
                </div>

                <div className='flex items-center gap-[15px] mb-[30px]'>
                  <div className='w-11 h-11 bg-[#EEB10E] border-4 border-[#8F7F53] rounded-full flex justify-center items-center'>
                  </div>
                  <p className='text-[#111] text-[20px] font-karla font-medium'>Community Forums</p>
                </div>

                <div className='flex items-center gap-[15px]'>
                  <div className='w-11 h-11 bg-[#EEB10E] border-4 border-[#8F7F53] rounded-full flex justify-center items-center'>
                  </div>
                  <p className='text-[#111] text-[20px] font-karla font-medium'>Community Crypto Academy</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinTheRevolution;