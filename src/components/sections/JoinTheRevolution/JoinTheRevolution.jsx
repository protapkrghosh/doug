import React from 'react';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import JoinTheRevolutionImg from '@/assets/joinThe/image 390.png'
import largeDevice from '@/assets/joinThe/Line12.png'
import smallDevice from '@/assets/joinThe/Line16.png'
import shapeImg from '@/assets/joinThe/Group.png'

const JoinTheRevolution = () => {
  return (
    <div className='mb-20 md:my-[75px]'>
      <Container>
        <div className='flex flex-col-reverse lg:flex-row items-center xl:gap-[105px] lg:gap-[80px]'>
          {/* images section  */}
          <div className='lg:w-1/2'>
            <div className='relative'>
              <img src={shapeImg} alt="Image" className='md:w-[300px] lg:w-[210px] xl:w-[240px] 2xl:w-auto absolute -left-[90px] xl:-left-[115px] 2xl:-left-[115px] -bottom-14 lg:bottom-0 2xl:-bottom-14 hidden md:block' />

              <div>
                <img className='xl:w-auto lg:w-[95%] md:w-auto' src={JoinTheRevolutionImg} alt="" />
                <p className='xl:mt-[-15px] lg:mb-[30px] md:mb-[30px] mb-[24px] text-[#333131] md:text-[20px] xl:text-[19px] 2xl:text-[20px] text-[12px] text-center font-semibold leading-[30px]'>Join today. Revolutionize your crypto journey. Buy now</p>
                <div className='flex justify-center'>
                  <Button className="uppercase px-8 xl:text-[17px] 2xl:text-[20px]">Get some $doug</Button>
                </div>
              </div>
            </div>
          </div>

          {/* contant section  */}
          <div className='lg:w-1/2'>
            <div className='relative'>
              <p className='text-[#080808] font-karla lg:text-[24px] text-[14px] lg:leading-[36px] leading-[21px] lg:mb-[15px] mb-[10px]'>Buy, HODL, and Vibe with Doug.</p>
              <h1 className='text-[#111] textShadow font-montserrat xl:text-[80px] lg:text-[50px] md:text-[54px] text-[26px] font-bold xl:leading-[96px] lg:leading-[75px] tracking-[1.6px] mb-[36px] hidden md:block'>JOIN THE REVOLUTION</h1>

              <h1 className='text-[#111] textShadowSm font-montserrat xl:text-[80px] lg:text-[50px] md:text-[54px] text-[26px] font-bold xl:leading-[96px] lg:leading-[75px] tracking-[1.6px] mb-[36px] block md:hidden'>JOIN THE REVOLUTION</h1>

              {/* -------------------------------------large device line -------------------------------------- */}
              <div className='hidden lg:block'>
                <div className='hidden lg:block'>
                  <div className='absolute 2xl:bottom-[266px] xl:bottom-[266px] lg:bottom-[277px] 2xl:left-[20px] xl:left-[20px] lg:left-[20px]'>
                    <img src={largeDevice} alt="" />
                  </div>
                  {/* 2 */}
                  <div className='absolute 2xl:bottom-[190px]  xl:bottom-[190px] lg:bottom-[195px] 2xl:left-[20px] xl:left-[20px] lg:left-[20px]'>
                    <img src={largeDevice} alt="" />
                  </div>
                  {/* 3 */}
                  <div className='absolute 2xl:bottom-[118px] xl:bottom-[118px] lg:bottom-[116px] 2xl:left-[20px] xl:left-[20px] lg:left-[20px]'>
                    <img src={largeDevice} alt="" />
                  </div>
                  {/* 4 */}
                  <div className='absolute 2xl:bottom-[42px] xl:bottom-[42px] lg:bottom-[42px] 2xl:left-[20px] xl:left-[20px] lg:left-[20px]'>
                    <img src={largeDevice} alt="" />
                  </div>
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

              {/*----------------------------------- small device line -------------------------------------------- */}
              <div className='block lg:hidden'>
                <div>
                  <div className='absolute bottom-[164px] left-3.5'>
                    <img src={smallDevice} alt="Image" />
                  </div>
                  <div className='absolute bottom-[119px] left-3.5'>
                    <img src={smallDevice} alt="Image" />
                  </div>
                  <div className='absolute bottom-[74px] left-3.5'>
                    <img src={smallDevice} alt="Image" />
                  </div>
                  <div className='absolute bottom-[29px] left-3.5'>
                    <img src={smallDevice} alt="Image" />
                  </div>
                </div>

                <div>
                  <div className='flex items-center gap-[10px] mb-[15px]'>
                    <div className='w-[30px] h-[30px] bg-[#EEB10E] border-[6px] border-[#8F7F53] rounded-full flex justify-center items-center'>
                    </div>
                    <p className='text-[#111] md:text-[20px] text-[12px] font-karla font-medium'>Inclusive Airdrops</p>
                  </div>
                  <div className='flex items-center gap-[10px] mb-[15px]'>
                    <div className='w-[30px] h-[30px] bg-[#EEB10E] border-[6px] border-[#8F7F53] rounded-full flex justify-center items-center'>
                    </div>
                    <p className='text-[#111] md:text-[20px] text-[12px] font-karla font-medium'>Exclusive NFTs for Community Members</p>
                  </div>
                  <div className='flex items-center gap-[10px] mb-[15px]'>
                    <div className='w-[30px] h-[30px] bg-[#EEB10E] border-[6px] border-[#8F7F53] rounded-full flex justify-center items-center'>
                    </div>
                    <p className='text-[#111] md:text-[20px] text-[12px] font-karla font-medium'>Community-Driven Initiatives</p>
                  </div>
                  <div className='flex items-center gap-[10px] mb-[15px]'>
                    <div className='w-[30px] h-[30px] bg-[#EEB10E] border-[6px] border-[#8F7F53] rounded-full flex justify-center items-center'>
                    </div>
                    <p className='text-[#111] md:text-[20px] text-[12px] font-karla font-medium'>Community Forums</p>
                  </div>
                  <div className='flex items-center gap-[10px]'>
                    <div className='w-[30px] h-[30px] bg-[#EEB10E] border-[6px] border-[#8F7F53] rounded-full flex justify-center items-center'>
                    </div>
                    <p className='text-[#111] md:text-[20px] text-[12px] font-karla font-medium'>Community Crypto Academy</p>
                  </div>

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