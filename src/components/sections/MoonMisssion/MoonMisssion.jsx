import React from 'react';
import Container from '../Container/Container';

const MoonMisssion = () => {
  return (
    <div>
      <Container>
        {/* section title  */}

        <div>
          <p className='text-[#111] textShadow 2xl:text-[80px] font-bold leading-[96px] tracking-[1.6px] mb-[25px]'>MOON MISSION</p>
          <p className='text-[#333131] text-[24px] font-karla font-medium leading-[36px]'>To Infinity and Beyond!</p>
        </div>

        {/* section images  */}
        <div></div>

        {/* section text content */}
        <div>
          <p className='xl:w-[664px] text-[#333131] text-[20px] font-karla font-medium leading-[30px]'>Doug’s here to make crypto fun, accessible, and profitable for everyone, from the seasoned trader to the curious snewcomer. Get Doug now, or risk being left behind.</p>
        </div>
      </Container>
    </div>
  );
};

export default MoonMisssion;