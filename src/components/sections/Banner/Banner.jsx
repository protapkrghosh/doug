import dougIcon from '@/assets/banner/Group 192.png';
import Container from '../Container/Container';

const Banner = () => {
  return (
    <div>
      <Container>
        <div className='md:flex justify-between items-center'>
          <div>
            <div className='flex items-center'>
              <p className='text-[22px] text-[#111] font-karla font-semibold mr-2'>Top dawg swagger. Alpha dog attitude.</p>
              <img src={dougIcon} alt="Image" className='w-4'/>
            </div>

            <h1 className='text-[#111] text-[140px] font-montserrat font-bold textShadow'>$DOUG</h1>
            <p className='text-[#333131] text-[20px] font-karla font-normal'>Doug's taking over! Adios Myro, Doug’s in town. Pepe who? Out with the old, in with Doug. Don't miss the boat, folks!</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
