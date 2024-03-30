import React from 'react';
import Container from '../Container/Container';
import moonimageIcon from '@/assets/moonMisson/Group.png';
import moonimageLarge from '@/assets/moonMisson/Groups237835.png';
import moonimageSmall from '@/assets/moonMisson/Group237835.png';

const MoonMisssion = () => {
  return (
    <div className='xl:pt-[320px] lg:pt-[120px] md:pt-[70px] xl:mb-[190px] lg:mb-[190px] md:mb-[170px]'>
      <Container>

        {/*  section title   */}
        <div>
          <p className='text-[#111] textShadow xl:text-[80px] md:text-[60px] text-[28px] font-bold leading-[96px] tracking-[1.6px] lg:mb-[25px] md:mb-[10px] mb-[-15px]'>MOON MISSION</p>
          <p className='text-[#333131] md:text-[24px] text-[12px] font-karla font-medium leading-[36px]'>To Infinity and Beyond!</p>
          <img className='hidden lg:block 2xl:w-[340px] xl:w-[320px] lg:w-[290px] 2xl:ml-1 xl:ml-4 lg:ml-[26px]' src={moonimageIcon} alt="image" />
        </div>

        {/*  section images large  */}
        <div className='hidden lg:block 2xl:ml-[-20px] xl:ml-[-20px] 2xl:mt-[-700px] xl:mt-[-550px] lg:mt-[-350px]'>
          <img src={moonimageLarge} alt="image" />
        </div>

        {/*  section images small  */}
        <div className='block lg:hidden md:w-auto'>
          <img className='mx-auto md:w-[400px]' src={moonimageSmall} alt="image" />
        </div>

        {/*  section text content  */}
        <div className='flex float-end mx-auto 2xl:mt-[-100px] xl:mt-[-80px] lg:mt-5'>
          <p className='xl:w-[664px] text-center text-[#333131] md:text-[20px] text-[12px] font-karla font-medium md:leading-[30px]'>Doug’s here to make crypto fun, accessible, and profitable for everyone, from the seasoned trader to the curious snewcomer. Get Doug now, or risk being left behind.</p>
        </div>
      </Container>
    </div>
  );
};

export default MoonMisssion;