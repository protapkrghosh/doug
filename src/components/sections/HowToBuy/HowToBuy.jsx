import dougImg from '@/assets/howToBuy/Doug_DALL.png';
import shapImg from '@/assets/howToBuy/Group.png';
import lineImg from '@/assets/howToBuy/Line 15.png';
import lineLgImg from '@/assets/howToBuy/Linelg.png';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import Container from '../Container/Container';
import { useState } from 'react';
import toast from 'react-hot-toast';

const HowToBuy = () => {
  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('0x4444c12f49c474b24b090d7322025b4b9961baed').then(() => {
        toast.success('Token copied');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className='2xl:mt-[150px] lg:mt-[100px] md:mt-[60px] mt-[50px] pb-[75px] 2xl:pb-10'>
      <Container>
        <p className='text-[#090909] text-center font-karla lg:text-[24px] text-[14px] font-medium lg:leading-[36px] leading-[21px] lg: mb-[15px]'>Exclusively on Solana</p>
        <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[80px] md:text-center font-montserrat font-bold textShadow mb-6 md:mb-16 hidden md:block'>HOW TO BUY</h1>

        <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[80px] md:text-center font-montserrat font-bold textShadowSm mb-6 md:mb-16 block md:hidden'>HOW TO BUY</h1>

        <div className='lg:flex justify-between items-center'>
          <div className='lg:w-1/2 relative'>
            <div>
              {/* Custom border */}
              <div>
                {/* Large device line */}
                <div className='hidden 2xl:block'>
                  <img src={lineImg} alt="Image" className='absolute left-5 2xl:left-6 top-14 h-[70px]' />
                  <img src={lineImg} alt="Image" className='absolute left-5 2xl:left-6 top-44 h-[70px]' />
                </div>

                {/* Small & medium device line */}
                <div className='block 2xl:hidden'>
                  <img src={lineImg} alt="Image" className='absolute xl:left-[16px] md:left-[17px] left-[11px] xl:top-[43px] lg:top-[47px] md:top-[50px] top-[43px] xl:w-4 lg:w-4 md:w-[13px] 2xl:h-[115px] xl:h-[140px] lg:h-[135px] md:h-[109px] h-[120px]' />
                  <img src={lineImg} alt="Image" className='absolute xl:left-[16px] md:left-[17px] left-[11px] 2xl:top-[203px] xl:top-[228px] lg:top-[226px] md:top-[200px] top-[200px] xl:w-4 lg:w-4 md:w-[13px] 2xl:h-[100px] xl:h-[100px] lg:h-[125px] md:h-[78px] h-[114px]' />
                </div>
              </div>

              <div>
                {/* Phantomor Solfare */}
                <div className='flex'>
                  <div>
                    <div className='w-10 md:w-12 2xl:w-14 h-10 md:h-12 2xl:h-14 bg-[#EEB10E] border-4 md:border-[5px] border-[#8F7F53] rounded-full flex justify-center items-center mr-4'>
                      <p className='text-[#42526D] md:text-[26px] font-semibold'>1</p>
                    </div>
                  </div>

                  <div>
                    <p className='text-[#111] text-[18px] md:text-[22px] font-karla font-semibold mb-2'>Download a Solana-compatible wallet like Phantomor Solfare.</p>

                    <p className='text-[#333131] text-[14px] md:text-[16px] font-karla font-normal'>Phantom and Solflare are apps for storing Solana tokens.After creating your wallet, please write your recovery phrase on paper and keep it safe.</p>
                  </div>
                </div>

                {/* Buy Some Solana */}
                <div className='flex my-8'>
                  <div>
                    <div className='w-10 md:w-12 2xl:w-14 h-10 md:h-12 2xl:h-14 bg-[#EEB10E] border-4 md:border-[5px] border-[#8F7F53] rounded-full flex justify-center items-center mr-4'>
                      <p className='text-[#42526D] md:text-[26px] font-semibold'>2</p>
                    </div>
                  </div>

                  <div>
                    <p className='text-[#111] text-[18px] md:text-[22px] font-karla font-semibold mb-2'>Buy Some Solana (SOL).</p>

                    <p className='text-[#333131] text-[14px] md:text-[16px] font-karla font-normal'>You can purchase Solana (SOL) tokens from a cryptocurrency exchange like Binance, Crypto.com, or Coinbase. Next, transfer your SOL tokens to your Solana wallet address.</p>
                  </div>
                </div>

                {/* Swap your Solana */}
                <div className='flex'>
                  <div>
                    <div className='w-10 md:w-12 2xl:w-14 h-10 md:h-12 2xl:h-14 bg-[#EEB10E] border-4 md:border-[5px] border-[#8F7F53] rounded-full flex justify-center items-center mr-4'>
                      <p className='text-[#42526D] md:text-[26px] font-semibold'>3</p>
                    </div>
                  </div>

                  <div>
                    <p className='text-[#111] text-[18px] md:text-[22px] font-karla font-semibold mb-2'>Swap your Solana (SOL) for Doug ($DOUG)</p>

                    <p className='text-[#333131] text-[14px] md:text-[16px] font-karla font-normal'>Connect your wallet to a decentralized exchange (DEX) likeJupiter. Input Doug’s ($DOUG) contract address and enter the amount you want to buy. Review the details, confirmthe swap, and enjoy your $DOUG.</p>
                  </div>
                </div>

                {/* Copied text */}
                <div className='flex justify-center md:justify-start md:ml-[63px] 2xl:ml-[74px] mt-8'>
                  <div className="flex justify-center items-center text-[14px] lg:text-[16px] 2xl:text-[18px] bg-[#EEB10E] py-3 rounded-full w-fit px-5">
                    <p className="text-[#333131] mr-2 md:mr-5">0x4444c12f49c474b24b090d7322025b4b9961baed</p>
                    <button onClick={() => { setCopied(!copied); copyLink() }}>
                      {
                        copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] cursor-pointer text-[#111]" /> :
                          <IoCopy className="text-[15px] md:text-[20px] cursor-pointer text-[#111]" />
                      }
                    </button>
                  </div>
                </div>
              </div>

              {/* Custom shape */}
              <div className='hidden lg:block'>
                <img src={shapImg} alt="Image" className='w-[40%] xl:w-[30%] 2xl:w-auto absolute -right-20 xl:-right-16 2xl:-right-32 bottom-14 xl:bottom-14 2xl:-bottom-10' />
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 hidden md:block'>
            <img src={dougImg} alt="Image" className='xl:w-[95%] lg:ml-16 mt-14 lg:mt-0' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;
