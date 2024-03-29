import dougIcon from '@/assets/banner/Group 192.png';
import dougImg from '@/assets/banner/image385.png';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { useState } from 'react';
import toast from 'react-hot-toast';

const Banner = () => {
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
    <div className='mt-10 mb-6 md:mb-[75px]'>
      <Container>
        <div className='md:flex justify-between items-center'>
          <div className='md:w-1/2'>
            <div className='flex justify-center md:justify-start items-center'>
              <p className='xl:text-[22px] text-[#111] font-karla font-semibold mr-2'>Top dawg swagger. Alpha dog attitude.</p>
              <img src={dougIcon} alt="Image" className='w-4' />
            </div>

            <h1 className='text-[#111] text-[100px] xl:text-[140px] text-center md:text-start font-montserrat font-bold textShadow -mt-3 -mb-2'>$DOUG</h1>
            <p className='text-[#333131] xl:text-[20px] text-center md:text-start font-karla font-normal'>Doug's taking over! Adios Myro, Doug’s in town. Pepe who? Out with the old, in with Doug. Don't miss the boat, folks!</p>

            <div className='flex justify-center md:justify-start mt-10 mb-9'>
              <Button className="uppercase px-6">Get some $doug</Button>
            </div>

            {/* Copied text */}
            <div className='flex justify-center md:justify-start'>
              <div className="flex justify-center items-center text-[14px] lg:text-[16px] xl:text-[18px] bg-[#fcf3db] py-3 rounded-full w-fit px-5">
                <p className="text-[#333131] mr-2 md:mr-5">0x4444c12f49c474b24b090d7322025b4b9961baed</p>
                <button onClick={() => { setCopied(!copied); copyLink() }}>
                  {
                    copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] cursor-pointer text-[#EEB10E]" /> :
                      <IoCopy className="text-[15px] md:text-[20px] cursor-pointer text-[#EEB10E]" />
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <img src={dougImg} alt="Image" className='md:scale-125 lg:scale-110' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
