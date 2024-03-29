import React from 'react';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import buyAndSellDoug from '@/assets/buySelll/image 390.png'
import buyAndSellDougIcon from '@/assets/buySelll/627bd88f2d30058d7aade208_svgexport-4 (2) 1.png'

const BuyAndSell = () => {
  return (
    <div className='my-[75px]'>
      <Container>
        <div className='flex justify-center items-center relative'>

          {/* text part  */}
          <div className='xl:w-3/5'>

            <div>
              <p className='2xl:text-[80px] xl:text-[67px] text-[#111] textShadow font-montserrat font-bold leading-[96px] tracking-[1.6px]'>1% BUY & SELL FEE</p>

              <p className='lg:text-[20px] mt-[25px] mb-[50px] text-[#333131] font-karla font-medium leading-[30px] 2xl:max-w-[688px] xl:w-[665px]'>Doug’s itsy-bitsy fee can potentially elevate the investment experience and outcomes. With redistribution to liquidity, marketing, and burning, the aim is to bolster a more robust and sustainable ecosystem for $DOUG meme coin buyers.</p>

              <Button className="uppercase px-6">Get some $doug</Button>

              <div className='2xl:w-auto xl:w-[280px] xl:absolute 2xl:-bottom-12 xl:-bottom-12 2xl:left-[265px] xl:left-[265px]'>
                <img src={buyAndSellDougIcon} alt="" />
              </div>
            </div>

          </div>

          {/* image part  */}

          <div className='xl:w-2/5 '>
            <div className='2xl:w-[750px] xl:w-[500px] xl:absolute 2xl:-bottom-6 xl:bottom-5 2xl:-right-6 xl:-right-12'>
              <img src={buyAndSellDoug} alt="image" />
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default BuyAndSell;