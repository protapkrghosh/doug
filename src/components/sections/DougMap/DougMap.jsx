import sectionBg from '@/assets/dougMap/Rectangle393.png';
import LingShape from '@/assets/dougMap/Group 176.png';
import dougImg from '@/assets/dougMap/DALL4.png';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';

const DougMap = () => {
  return (
    <div style={{ backgroundImage: `url(${sectionBg})` }} className='bg-no-repeat bg-contain bg-center'>
      <Container>
        <div className='lg:flex justify-between items-center'>
          <div className='text-center'>
            <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[80px] md:text-center font-montserrat font-bold textShadow'>$DOUG MAP</h1>
            <p className='text-[#111] text-[24px] font-normal font-montserrat'>Road Trippin' with Doug</p>
            <img src={dougImg} alt="Image" />
            <p className='text-[#111] text-[20px] font-normal font-karla -mt-6'>For more roadmap information and details</p>
            <Button className="text-[20px] text-white font-karla font-normal my-9 px-7">$DOUG WHITEPAPER</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DougMap;
