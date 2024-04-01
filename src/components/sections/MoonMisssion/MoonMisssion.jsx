import React from 'react';
import Container from '../Container/Container';
import moonimageIcon from '@/assets/moonMisson/Group.png';
import moonimageLarge from '@/assets/moonMisson/Group 190.png';
import moonimageSmall from '@/assets/moonMisson/Group237835.png';

const MoonMisssion = () => {
  return (
    <div className='2xl:pt-[300px] xl:pt-[200px] lg:pt-[90px] md:pt-[70px] xl:mb-[190px] lg:mb-[190px] md:mb-[170px]'>
      <Container>

        <div className='relative'>
          {/*  section title   */}
          <div>
            <p className='text-[#111] textShadow xl:text-[80px] md:text-[60px] text-[28px] font-bold leading-[96px] tracking-[1.6px] lg:mb-[25px] md:mb-[10px] mb-[-15px]'>MOON MISSION</p>
            <p className='text-[#333131] md:text-[24px] text-[12px] font-karla font-medium leading-[36px]'>To Infinity and Beyond!</p>
            <img className='hidden lg:block 2xl:w-[340px] xl:w-[320px] lg:w-[290px] 2xl:ml-1 xl:ml-4 lg:ml-[26px]' src={moonimageIcon} alt="image" />
          </div>

          <div>
            {/*  section images large  */}
            <div className='hidden lg:block 2xl:ml-[-20px] xl:ml-[-20px] 2xl:mt-[-700px] xl:mt-[-550px] lg:mt-[-350px]'>
              <img src={moonimageLarge} alt="image" />
            </div>

            {/* botton posigition  */}
            {/* Pump to the Moon */}
            <p className='2xl:left-[211px] xl:left-[171px] lg:left-[142px] 2xl:bottom-[50px] xl:bottom-[37px] lg:bottom-[32px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] xl:py-[15px] lg:py-[5px] rounded-full text-[#FFF] font-karla xl:text-[18px] lg:text-[12px] leading-[27px]'>Pump to the Moon</p>

            {/* Worldwide Popularity */}
            <p className='2xl:left-[408px] xl:left-[333px] lg:left-[265px] left-[265px] 2xl:bottom-[135px] xl:bottom-[106px] lg:bottom-[82px] bottom-[82px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] xl:py-[15px] lg:py-[5px] rounded-full text-[#FFF] font-karla xl:text-[18px] lg:text-[12px] leading-[27px]'>Worldwide Popularity</p>

            {/* King-Sized */}
            <p className='2xl:left-[548px] xl:left-[448px] lg:left-[350px] left-[350px] 2xl:bottom-[215px] xl:bottom-[172px] lg:bottom-[132px] bottom-[132px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] xl:py-[15px] lg:py-[5px] rounded-full text-[#FFF] font-karla xl:text-[18px] lg:text-[12px] leading-[27px]'>King-Sized Community</p>

            {/* Marketcap Milestone */}
            <p className='2xl:left-[700px] xl:left-[573px] lg:left-[443px] left-[443px] 2xl:bottom-[298px] xl:bottom-[239px] lg:bottom-[182px] bottom-[182px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] xl:py-[15px] lg:py-[5px] rounded-full text-[#FFF] font-karla xl:text-[18px] lg:text-[12px] leading-[27px]'>$1B Marketcap Milestone</p>

            {/* DougCoin Dominance */}
            <p className='2xl:left-[820px] xl:left-[670px] lg:left-[510px] left-[510px] 2xl:bottom-[379px] xl:bottom-[306px] lg:bottom-[233px] bottom-[235px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] xl:py-[15px] lg:py-[5px] rounded-full text-[#FFF] font-karla xl:text-[18px] lg:text-[12px] leading-[27px]'>DougCoin Dominance</p>

            {/* Meme Coin Takeover */}
            <p className='2xl:left-[996px] xl:left-[817px] lg:left-[625px] left-[517px] 2xl:bottom-[459px] xl:bottom-[372px] lg:bottom-[284px] bottom-[372px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] xl:py-[15px] lg:py-[5px] rounded-full text-[#FFF] font-karla xl:text-[18px] lg:text-[12px] leading-[27px]'>Meme Coin Takeover</p>

            {/* Reign Forever */}
            <p className='2xl:left-[1136px] xl:left-[932px] lg:left-[713px] left-[932px] 2xl:bottom-[540px] xl:bottom-[440px] lg:bottom-[335px] bottom-[440px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] xl:py-[15px] lg:py-[5px] rounded-full text-[#FFF] font-karla xl:text-[18px] lg:text-[12px] leading-[27px]'>Reign Forever</p>

          </div>

          {/*  section images small  */}
          <div className='block lg:hidden md:w-auto'>
            <img className='mx-auto md:w-[400px]' src={moonimageSmall} alt="image" />
          </div>

          {/*  section text content  */}
          <div className='flex float-end mx-auto 2xl:mt-[-100px] xl:mt-[-80px] lg:mt-14'>
            <p className='xl:w-[664px] text-center md:text-start text-[#333131] md:text-[20px] text-[12px] font-karla font-medium md:leading-[30px]'>Doug’s here to make crypto fun, accessible, and profitable for everyone, from the seasoned trader to the curious snewcomer. Get Doug now, or risk being left behind.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoonMisssion;