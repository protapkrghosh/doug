import legentDoug from '@/assets/birthOfLegend/image 390.png';
import shape from '@/assets/birthOfLegend/Group.png';
import Container from '../Container/Container';

const BirthLegend = () => {
  return (
    <div className='overflow-hidden mt-14 md:mt-[175px] lg:mb-[75px] lg:pb-16 xl:pb-0'>
      <Container>
        <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[75px] text-center font-montserrat font-bold textShadow mb-16 hidden md:block'>BIRTH OF A LEGEND</h1>

        <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[75px] text-center font-montserrat font-bold textShadow mb-16 block md:hidden'>BIRTH OF A LEGEND</h1>

        <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
          <div className='lg:w-1/2'>
            <img src={legentDoug} alt="Image" className='md:w-[80%] xl:w-[90%] 2xl:w-auto mx-auto lg:mx-0' />
          </div>

          <div className='lg:w-1/2 relative -mt-14 lg:mt-0'>
            <div>
              <h1 className='text-[24px] md:text-[45px] xl:text-[55px] 2xl:text-[65px] text-center md:text-start font-montserrat legendShadow font-bold md:leading-[80px] w-[80%] md:w-full mx-auto hidden lg:block'>Meet Doug – Pug Perfection</h1>

              <h1 className='text-[24px] md:text-[45px] xl:text-[55px] 2xl:text-[65px] text-center md:text-start font-montserrat textShadowSm font-bold md:leading-[80px] w-[80%] md:w-full mx-auto block lg:hidden'>Meet Doug – Pug Perfection</h1>

              <div className='text-[14px] md:text-[18px] 2xl:text-[20px] text-[#333131] text-center md:text-start font-karla font-normal md:w-[95%] 2xl:w-[99%]'>
                <p className='my-3 md:my-6'>Doug, the curious pug, wandered away from home and stumbled upon a group of crypto-loving squirrels. Intrigued by their discussions of blockchain riches and treats, Doug joined their ranks to soak up their mad crypto skills.</p>

                <p>With his newfound skillset and a knack for sniffing out crypto opportunities, Doug’s on a mission.</p>
              </div>
            </div>

            <img src={shape} alt="Image" className='absolute top-9 lg:top-24 xl:top-9 -right-10 lg:-right-[110px] xl:-right-[120px] 2xl:-right-[155px] hidden lg:block' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BirthLegend;
