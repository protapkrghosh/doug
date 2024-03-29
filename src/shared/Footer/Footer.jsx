import logoImg from '@/assets/banner/douglogo.png';
import ShapeImg from '@/assets/footer/Group.png';
import Container from '@/components/sections/Container/Container';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <div>
      <Container>
        <div className='text-[20px] text-[#333131] text-center font-karla font-medium'>
          <div className='flex'>
            {/* Shape */}
            <div>
              <img src={ShapeImg} alt="Image" />
            </div>

            {/* Content */}
            <div>
              <img src={logoImg} alt="Image" />
              <Button className="text-[20px] text-white font-karla font-normal my-9 px-7">GET SOME $DOUG</Button>
              <p>Copyright {new Date().getFullYear()}. The $Doug Project. All Rights Reserved.</p>
            </div>
          </div>

          <p>Disclaimer: Please be advised that DOUG Memecoin is a cryptocurrency created for entertainment purposes. The value of $DOUG may fluctuate wildly. Please be aware of market volatility. Market shifts can lead to gains or losses. Always do your research before investing. Memes are for entertainment, but investments require serious consideration. Consult financial experts before making any investment decisions. Remember to meme responsibly.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
