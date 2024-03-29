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
    <div>
      <Container>
        <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[75px] text-center font-montserrat font-bold textShadow mb-16'>HOW TO BUY</h1>

        <div className='lg:flex justify-between items-center'>
          <div className='lg:w-1/2'>
            <div className='flex relative'>
              <div>
                {/* Phantomor Solfare */}
                <div className='flex'>
                  <div>
                    <div className='w-14 h-14 bg-[#EEB10E] border-[5px] border-[#8F7F53] rounded-full flex justify-center items-center mr-4'>
                      <p className='text-[#42526D] text-[26px] font-semibold'>1</p>
                    </div>
                  </div>

                  <div>
                    <p className='text-[#111] text-[22px] font-karla font-semibold mb-2'>Download a Solana-compatible wallet like Phantomor Solfare.</p>

                    <p className='text-[#333131] text-[16px] font-karla font-normal'>Phantom and Solflare are apps for storing Solana tokens.After creating your wallet, please write your recovery phrase on paper and keep it safe.</p>
                  </div>
                </div>

                {/* Buy Some Solana */}
                <div className='flex my-8'>
                  <div>
                    <div className='w-14 h-14 bg-[#EEB10E] border-[5px] border-[#8F7F53] rounded-full flex justify-center items-center mr-4'>
                      <p className='text-[#42526D] text-[26px] font-semibold'>2</p>
                    </div>
                  </div>

                  <div>
                    <p className='text-[#111] text-[22px] font-karla font-semibold mb-2'>Buy Some Solana (SOL).</p>

                    <p className='text-[#333131] text-[16px] font-karla font-normal'>You can purchase Solana (SOL) tokens from a cryptocurrency exchange like Binance, Crypto.com, or Coinbase. Next, transfer your SOL tokens to your Solana wallet address.</p>
                  </div>
                </div>

                {/* Swap your Solana */}
                <div className='flex'>
                  <div>
                    <div className='w-14 h-14 bg-[#EEB10E] border-[5px] border-[#8F7F53] rounded-full flex justify-center items-center mr-4'>
                      <p className='text-[#42526D] text-[26px] font-semibold'>3</p>
                    </div>
                  </div>

                  <div>
                    <p className='text-[#111] text-[22px] font-karla font-semibold mb-2'>Swap your Solana (SOL) for Doug ($DOUG)</p>

                    <p className='text-[#333131] text-[16px] font-karla font-normal'>Connect your wallet to a decentralized exchange (DEX) likeJupiter. Input Doug’s ($DOUG) contract address and enter the amount you want to buy. Review the details, confirmthe swap, and enjoy your $DOUG.</p>
                  </div>
                </div>

                {/* Copied text */}
                <div className='flex justify-center md:justify-start ml-[74px] mt-8'>
                  <div className="flex justify-center items-center text-[14px] lg:text-[16px] xl:text-[18px] bg-[#EEB10E] py-3 rounded-full w-fit px-5">
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

              <div>
                <img src={shapImg} alt="Image" className='absolute -right-32 -bottom-10' />
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <img src={dougImg} alt="Image" className='w-[95%] ml-16' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;
