import React from 'react';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import buyAndSellDoug from '@/assets/buySelll/image 390.png'
import buyAndSellDougIcon from '@/assets/buySelll/627bd88f2d30058d7aade208_svgexport-4 (2) 1.png'

const BuyAndSell = () => {
  return (
    <div className='my-[75px]'>
      <Container>
        <div className='lg:flex justify-center items-center relative'>

          {/* text part  */}
          <div className='xl:w-3/5 lg:w-1/2'>

            <div>
              <p className='2xl:text-[80px] xl:text-[64px] lg:text-[45px] md:text-[60px] text-[28px] text-[#111] textShadow font-montserrat font-bold leading-[96px] xl:tracking-[1.6px] hidden md:block'>1% BUY & SELL FEE</p>

              <p className='2xl:text-[80px] xl:text-[67px] lg:text-[45px] md:text-[60px] text-[28px] text-[#111] textShadowSm font-montserrat font-bold leading-[96px] xl:tracking-[1.6px] block md:hidden -mb-6'>1% BUY & SELL FEE</p>

              <p className='text-[13px] lg:text-[20px] md:mt-[25px] mt-[10px] md:mb-[50px] mb-[24px] text-[#333131] font-karla font-medium md:leading-[30px] 2xl:max-w-[688px] xl:w-[665px]'>Doug’s itsy-bitsy fee can potentially elevate the investment experience and outcomes. With redistribution to liquidity, marketing, and burning, the aim is to bolster a more robust and sustainable ecosystem for $DOUG meme coin buyers.</p>

              <Button className="bg-[#EEB10E] hover:bg-[#c9a84d] text-[#fff] 2xl:text-[20px] font-karla px-6 2xl:px-7 py-[15px] rounded-[30px] uppercase duration-200">GET SOME $DOUG</Button>

              <div className='hidden lg:block 2xl:w-auto xl:w-[280px] lg:w-[180px] lg:absolute 2xl:-bottom-12 xl:-bottom-12 lg:bottom-10 2xl:left-[265px] xl:left-[265px] lg:left-[205px]'>
                <img src={buyAndSellDougIcon} alt="Image" />
              </div>
            </div>

          </div>

          {/* image part  */}

          <div className='xl:w-2/5 lg:w-1/2 mt-3 md:mt-0 -mb-6 md:mb-0'>
            <div className='2xl:w-[750px] xl:w-[500px] lg:w-[490px] md:w-auto w-auto lg:absolute 2xl:-bottom-6 xl:bottom-5 lg:bottom-4 2xl:-right-6 xl:-right-12 lg:-right-10'>
              <img src={buyAndSellDoug} alt="image" />
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default BuyAndSell;