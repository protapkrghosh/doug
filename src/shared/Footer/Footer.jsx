import logoImg from '@/assets/banner/douglogo.png';
import ShapeImg from '@/assets/footer/Group.png';
import Container from '@/components/sections/Container/Container';
import { Button } from '@/components/ui/button';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollToTop from 'react-scroll-to-top';
import arrowUpIcon from '@/assets/footer/arrowUpIcon.svg';

const Footer = () => {
  return (
    <div className='mt-20 mb-7 md:my-[100px] lg:my-[145px]' id='whitepaper'>
      <Container>
        <div className='text-[13px] md:text-[18px] lg:text-[20px] text-[#333131] text-center font-karla font-medium'>
          <div className='flex justify-center relative'>
            {/* Shape */}
            <div className='hidden md:block'>
              <img src={ShapeImg} alt="Image" className='w-[260px] 2xl:w-[320px] absolute top-6 2xl:top-3 -left-8 lg:left-16 xl:left-48 2xl:left-72' />
            </div>

            {/* Content */}
            <div>
              <div className='flex justify-center'>
                <img src={logoImg} alt="Image" className='w-[130px] md:w-auto' />
              </div>
              <Button className="text-[20px] text-white font-karla font-normal my-5 md:my-7 px-7">GET SOME $DOUG</Button>

              <p>Copyright {new Date().getFullYear()}. The $Doug Project. All Rights Reserved.</p>

              <div className="flex justify-center items-center space-x-4 md:space-x-8 my-4 md:my-7">
                <a href="https://twitter.com/nobrainflip" target='_blank' className="bg-[#eeb10e] hover:bg-[#c9a84d] p-[15px] 2xl:p-6 rounded-full group duration-300">
                  <FaXTwitter className="text-[30px] 2xl:text-[40px] text-[#fff] group-hover:scale-110 duration-300" />
                </a>

                <a href="#" className="bg-[#eeb10e] hover:bg-[#c9a84d] p-[15px] 2xl:p-6 rounded-full mr-3 group duration-300">
                  <FaTelegramPlane className="text-[30px] 2xl:text-[40px] text-[#fff] group-hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>

          <p className='xl:w-[81%] 2xl:w-[65%] mx-auto'>Disclaimer: Please be advised that DOUG Memecoin is a cryptocurrency created for entertainment purposes. The value of $DOUG may fluctuate wildly. Please be aware of market volatility. Market shifts can lead to gains or losses. Always do your research before investing. Memes are for entertainment, but investments require serious consideration. Consult financial experts before making any investment decisions. Remember to meme responsibly.</p>

          {/* Scroll Up */}
          <div className='relative hidden md:block md:mt-10 lg:mt-20 xl:-mt-8'>
            <ScrollToTop
              smooth={true}
              top="1000"
              style={{
                // backgroundColor: "#20c99685",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                padding: "10px",
              }}
              component={<p style={{ color: "white" }}><img src={arrowUpIcon} alt="Logo" className="w-4" /></p>}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
