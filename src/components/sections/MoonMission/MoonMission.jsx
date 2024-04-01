import React from 'react';
import Container from '../Container/Container';
import moonimageIcon from '@/assets/moonMisson/Group.png';
import moonimageLarge from '@/assets/moonMisson/Group 190.png';
import moonimageSmall from '@/assets/moonMisson/Group 237835.png';

const MoonMisssion = () => {
  return (
    <div className='2xl:pt-[300px] xl:pt-[200px] lg:pt-[90px] md:pt-[70px] xl:mb-[190px] lg:mb-[190px] md:mb-[170px] mb-[90px]'>
      <Container>

        <div className='relative'>
          {/*  section title   */}
          <div>
            <p className='text-[#111] textShadow xl:text-[80px] md:text-[60px] text-[28px] font-bold leading-[96px] tracking-[1.6px] lg:mb-[25px] md:mb-[10px] mb-[-15px] hidden md:block'>MOON MISSION</p>

            <p className='text-[#111] textShadowSm xl:text-[80px] md:text-[60px] text-[28px] text-center font-bold leading-[96px] tracking-[1.6px] lg:mb-[25px] md:mb-[10px] mb-[-23px] block md:hidden'>MOON MISSION</p>

            <p className='text-[#333131] md:text-[24px] text-[12px] text-center md:text-start font-karla font-medium leading-[36px]'>To Infinity and Beyond!</p>
            <img className='hidden lg:block 2xl:w-[340px] xl:w-[320px] lg:w-[290px] 2xl:ml-1 xl:ml-4 lg:ml-[26px]' src={moonimageIcon} alt="image" />
          </div>

          <div>
            <div>
              {/* large device section image  */}
              <div className='hidden lg:block 2xl:ml-[-20px] xl:ml-[-20px] 2xl:mt-[-700px] xl:mt-[-550px] lg:mt-[-350px]'>
                <img src={moonimageLarge} alt="image" />
              </div>

              {/*  small device section image */}
              <div className='block lg:hidden 2xl:ml-[-20px] xl:ml-[-20px] 2xl:mt-[-700px] xl:mt-[-550px] lg:mt-[-350px]'>
                <img src={moonimageSmall} alt="image" className='w-[350px] md:w-[500px]'/>
              </div>
            </div>

            {/* botton posigition  */}
            {/* Pump to the Moon */}
            <p className='2xl:left-[211px] xl:left-[167px] lg:left-[142px] md:left-[80px] left-[59px] 2xl:bottom-[50px] xl:bottom-[37px] lg:bottom-[32px] md:bottom-[89px] bottom-[59px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] md:px-5 px-2 2xl:py-[15px] xl:py-[12px] lg:py-[5px] md:py-2 py-1 rounded-full text-[#FFF] font-karla text-[13px] md:text-[16px] xl:text-[18px] lg:text-[12px] leading-[27px] rotate-[10deg] lg:rotate-0'>Pump to the Moon</p>

            {/* Worldwide Popularity */}
            <p className='2xl:left-[408px] xl:left-[325px] lg:left-[265px] md:left-[135px] left-[93px] 2xl:bottom-[135px] xl:bottom-[106px] lg:bottom-[82px] md:bottom-[143px] bottom-[96px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] md:px-5 px-2 2xl:py-[15px] xl:py-[12px] lg:py-[5px] md:py-2 py-1 rounded-full text-[#FFF] font-karla text-[13px] md:text-[16px] xl:text-[18px] lg:text-[12px] leading-[27px] rotate-[10deg] lg:rotate-0'>Worldwide Popularity</p>

            {/* King-Sized */}
            <p className='2xl:left-[548px] xl:left-[440px] lg:left-[350px] md:left-[163px] left-[115px] 2xl:bottom-[215px] xl:bottom-[172px] lg:bottom-[132px] md:bottom-[203px] bottom-[138px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] md:px-5 px-2 2xl:py-[15px] xl:py-[12px] lg:py-[5px] md:py-2 py-1 rounded-full text-[#FFF] font-karla text-[13px] md:text-[16px] xl:text-[18px] lg:text-[12px] leading-[27px] rotate-[10deg] lg:rotate-0'>King-Sized Community</p>

            {/* Marketcap Milestone */}
            <p className='2xl:left-[700px] xl:left-[563px] lg:left-[443px] md:left-[210px] left-[145px] 2xl:bottom-[298px] xl:bottom-[239px] lg:bottom-[182px] md:bottom-[260px] bottom-[179px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] md:px-5 px-2 2xl:py-[15px] xl:py-[12px] lg:py-[5px] md:py-2 py-1 rounded-full text-[#FFF] font-karla text-[13px] md:text-[16px] xl:text-[18px] lg:text-[12px] leading-[27px] rotate-[10deg] lg:rotate-0'>$1B Marketcap Milestone</p>

            {/* DougCoin Dominance */}
            <p className='2xl:left-[820px] xl:left-[660px] lg:left-[510px] md:left-[243px] left-[169px] 2xl:bottom-[379px] xl:bottom-[306px] lg:bottom-[233px] md:bottom-[323px] bottom-[222px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] md:px-5 px-2 2xl:py-[15px] xl:py-[12px] lg:py-[5px] md:py-2 py-1 rounded-full text-[#FFF] font-karla text-[13px] md:text-[16px] xl:text-[18px] lg:text-[12px] leading-[27px] rotate-[10deg] lg:rotate-0'>DougCoin Dominance</p>

            {/* Meme Coin Takeover */}
            <p className='2xl:left-[996px] xl:left-[800px] lg:left-[625px] md:left-[283px] left-[200px] 2xl:bottom-[459px] xl:bottom-[372px] lg:bottom-[284px] md:bottom-[382px] bottom-[263px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] md:px-5 px-2 2xl:py-[15px] xl:py-[12px] lg:py-[5px] md:py-2 py-1 rounded-full text-[#FFF] font-karla text-[13px] md:text-[16px] xl:text-[18px] lg:text-[12px] leading-[27px] rotate-[10deg] lg:rotate-0'>Meme Coin Takeover</p>

            {/* Reign Forever */}
            <p className='2xl:left-[1136px] xl:left-[917px] lg:left-[713px] md:left-[325px] left-[228px] 2xl:bottom-[540px] xl:bottom-[440px] lg:bottom-[335px] md:bottom-[445px] bottom-[308px] absolute w-fit bg-[#EEB10E] xl:px-[20px] lg:px-[10px] md:px-5 px-2 2xl:py-[15px] xl:py-[12px] lg:py-[5px] md:py-2 py-1 rounded-full text-[#FFF] font-karla text-[13px] md:text-[16px] xl:text-[18px] lg:text-[12px] leading-[27px] rotate-[10deg] lg:rotate-0'>Reign Forever</p>

          </div>

          {/*  section images small  */}
          {/* <div className='block lg:hidden md:w-auto'>
            <img className='mx-auto md:w-[400px]' src={moonimageSmall} alt="image" />
          </div> */}

          {/*  section text content  */}
          <div className='flex float-end mx-auto 2xl:mt-[-100px] xl:mt-[-80px] lg:mt-14'>
            <p className='xl:w-[664px] text-center md:text-start text-[#333131] md:text-[18px] lg:text-[20px] text-[14px] font-karla font-medium md:leading-[30px]'>Doug’s here to make crypto fun, accessible, and profitable for everyone, from the seasoned trader to the curious snewcomer. Get Doug now, or risk being left behind.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoonMisssion;