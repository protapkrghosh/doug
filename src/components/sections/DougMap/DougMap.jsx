import sectionBg from '@/assets/dougMap/Rectangle393.png';
import LingShape from '@/assets/dougMap/Group 176.png';
import dougImg from '@/assets/dougMap/DALL4.png';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';

const DougMap = () => {
  return (
    <div id='roadmap'>
      {/***************** Small device *****************/}
      <div className='block md:hidden'>
        <div className='text-center'>
          <h1 className='text-[#111] text-[30px] font-montserrat font-extrabold textShadowSm'>$DOUG MAP</h1>
          <p className='text-[#111] text-[13px] font-medium font-montserrat mt-3 mb-7'>Road Trippin' with Doug</p>
        </div>

        <div className='flex justify-end gap-x-2 mx-5'>
          <img src={LingShape} alt="Image" className='w-[30px]' />

          <div className='w-full space-y-7'>
            {/* Phase One */}
            <div className='font-karla bg-[#dab455] bg-opacity-85 rounded-[10px] py-8 pl-6 bgDropShadow'>
              <h4 className='text-[#000] text-[20px] font-semibold uppercase'>Phase 1</h4>
              <p className='text-[#000] text-[16px] font-normal uppercase mt-3 mb-1'>GENESIS</p>

              <div className='space-y-1'>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Launch</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Community Onboarding & Airdrop</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Kick-Start Initial Token Burn</p>
                </div>
              </div>
            </div>

            {/* Phase Two */}
            <div className='font-karla bg-[#dab455] bg-opacity-85 rounded-[10px] py-8 pl-6 bgDropShadow'>
              <h4 className='text-[#000] text-[20px] font-semibold uppercase'>Phase 2</h4>
              <p className='text-[#000] text-[16px] font-normal uppercase mt-3 mb-1'>GROWTH</p>

              <div className='space-y-1'>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Launch Marketing Campaigns</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Liquidity Pool Establishment</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Strategic Partnerships & Collaborations</p>
                </div>
              </div>
            </div>

            {/* Phase Three */}
            <div className='font-karla bg-[#dab455] bg-opacity-85 rounded-[10px] py-8 pl-6 bgDropShadow'>
              <h4 className='text-[#000] text-[20px] font-semibold uppercase'>Phase 3</h4>
              <p className='text-[#000] text-[16px] font-normal uppercase mt-3 mb-1'>EVOLUTION</p>

              <div className='space-y-1'>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Community Airdrop</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>Community Engagement & Events</p>
                </div>
                <div className='flex items-center'>
                  <div className='w-2 h-2 bg-black rounded-full mr-2' />
                  <p className='text-[14px] text-[#333131] font-normal'>NFT Minting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center mt-6 mb-9'>
          <img src={dougImg} alt="Image" />
          <p className='text-[#111] text-[14px] font-medium bold font-karla -mb-1'>For more roadmap information and details</p>
          <Button className="text-[15px] text-white font-karla font-normal my-9 px-7">$DOUG WHITEPAPER</Button>
        </div>
      </div>



      {/***************** Medium & Large device *****************/}
      <div className='hidden md:block'>
        <div style={{ backgroundImage: `url(${sectionBg})` }} className='bg-no-repeat bg-cover 2xl:bg-contain bg-center'>
          <Container>
            <div className='lg:flex justify-between items-center md:py-12 lg:py-0'>
              <div className='lg:w-1/2 text-center'>
                <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[80px] md:text-center font-montserrat font-bold textShadow'>$DOUG MAP</h1>
                <p className='text-[#111] text-[24px] font-medium font-montserrat'>Road Trippin' with Doug</p>
                <img src={dougImg} alt="Image" />
                <p className='text-[#111] text-[20px] font-medium bold font-karla -mt-6'>For more roadmap information and details</p>
                <Button className="text-[20px] text-white font-karla font-normal my-9 px-7">$DOUG WHITEPAPER</Button>
              </div>

              <div className='lg:w-1/2 my-24'>
                <div className='flex justify-end gap-x-3 xl:gap-x-6'>
                  <img src={LingShape} alt="Image" className='w-[35px] xl:w-fit' />

                  <div className='w-full xl:w-[75%] space-y-7'>
                    {/* Phase One */}
                    <div className='font-karla bg-[#dab455] bg-opacity-85 rounded-[10px] py-8 pl-6 bgDropShadow'>
                      <h4 className='text-[#000] text-[24px] font-semibold uppercase'>Phase 1</h4>
                      <p className='text-[#000] text-[18px] xl:text-[20px] font-normal uppercase mt-3 mb-1'>GENESIS</p>

                      <div className='space-y-1'>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Launch</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Community Onboarding & Airdrop</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Kick-Start Initial Token Burn</p>
                        </div>
                      </div>
                    </div>

                    {/* Phase Two */}
                    <div className='font-karla bg-[#dab455] bg-opacity-85 rounded-[10px] py-8 pl-6 bgDropShadow'>
                      <h4 className='text-[#000] text-[24px] font-semibold uppercase'>Phase 2</h4>
                      <p className='text-[#000] text-[18px] xl:text-[20px] font-normal uppercase mt-3 mb-1'>GROWTH</p>

                      <div className='space-y-1'>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Launch Marketing Campaigns</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Liquidity Pool Establishment</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Strategic Partnerships & Collaborations</p>
                        </div>
                      </div>
                    </div>

                    {/* Phase Three */}
                    <div className='font-karla bg-[#dab455] bg-opacity-85 rounded-[10px] py-8 pl-6 bgDropShadow'>
                      <h4 className='text-[#000] text-[24px] font-semibold uppercase'>Phase 3</h4>
                      <p className='text-[#000] text-[18px] xl:text-[20px] font-normal uppercase mt-3 mb-1'>EVOLUTION</p>

                      <div className='space-y-1'>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Community Airdrop</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>Community Engagement & Events</p>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-4 h-4 bg-black rounded-full mr-2' />
                          <p className='xl:text-[18px] text-[#333131] font-normal'>NFT Minting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DougMap;
