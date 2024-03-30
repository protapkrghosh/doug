import React from 'react';
import Container from '../Container/Container';
import moonimageIcon from '@/assets/moonMisson/Group.png';
import moonimage from '@/assets/moonMisson/Groups237835.png';

const MoonMisssion = () => {
  return (
    <div className='xl:pt-[320px] xl:mb-[190px]'>
      <Container>

        {/* section title  */}
        <div>
          <p className='text-[#111] textShadow xl:text-[80px] font-bold leading-[96px] tracking-[1.6px] mb-[25px]'>MOON MISSION</p>
          <p className='text-[#333131] text-[24px] font-karla font-medium leading-[36px]'>To Infinity and Beyond!</p>
          <img className='2xl:w-[340px] xl:w-[320px] 2xl:ml-1 xl:ml-4' src={moonimageIcon} alt="image" />
        </div>

        {/* section images  */}
        <div className='2xl:ml-[-20px] xl:ml-[-20px] 2xl:mt-[-700px] xl:mt-[-550px]'>
          <img src={moonimage} alt="image" />
        </div>

        {/* section text content */}
        <div className='flex float-end 2xl:mt-[-100px] xl:mt-[-80px]'>
          <p className='xl:w-[664px] text-[#333131] text-[20px] font-karla font-medium leading-[30px]'>Doug’s here to make crypto fun, accessible, and profitable for everyone, from the seasoned trader to the curious snewcomer. Get Doug now, or risk being left behind.</p>
        </div>
      </Container>
    </div>
  );
};

export default MoonMisssion;