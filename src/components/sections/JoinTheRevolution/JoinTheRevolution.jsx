import React from 'react';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import JoinTheRevolutionImg from '@/assets/joinThe/image 390.png'

const JoinTheRevolution = () => {
  return (
    <div className='my-[75px]'>
      <Container>
        <div className='flex'>
          {/* images section  */}
          <div>
            <img src={JoinTheRevolutionImg} alt="" />
            <p className=' lg:mt-[30px] lg:mb-[30px] text-[#333131] text-[20px] font-semibold leading-[30px]'>Join today. Revolutionize your crypto journey. Buy now</p>
            <Button className="uppercase px-6">Get some $doug</Button>
          </div>

          {/* contant section  */}
          <div>
            <p className='text-[#111] textShadow font-montserrat text-[80px] font-bold leading-[96px] tracking-[1.6px] mb-[36px]'>JOIN THE REVOLUTION</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinTheRevolution;