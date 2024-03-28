import React from 'react';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import buyAndSellDoug from '@/assets/buySelll/image 390.png'

const BuyAndSell = () => {
  return (
    <div className='my-[75px]'>
      <Container>
        <div className='flex justify-center items-center'>

          {/* text part  */}
          <div className='xl:w-3/5'>

            <p className='lg:text-[80px] text-[#111] textShadow font-montserrat font-bold leading-[96px] tracking-[1.6px]'>1% BUY & SELL FEE</p>

            <p className='lg:text-[20px] mt-[25px] mb-[50px] text-[#333131] font-karla font-medium leading-[30px]'>Doug’s itsy-bitsy fee can potentially elevate the investment experience and outcomes. With redistribution to liquidity, marketing, and burning, the aim is to bolster a more robust and sustainable ecosystem for $DOUG meme coin buyers.</p>

            <Button className="uppercase px-6">Get some $doug</Button>
          </div>

          {/* image part  */}

          <div className='w-2/5 '>
            <img src={buyAndSellDoug} alt="image" />
          </div>

        </div>
      </Container>
    </div>
  );
};

export default BuyAndSell;