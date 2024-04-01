import Banner from '@/components/sections/Banner/Banner';
import BirthLegend from '@/components/sections/BirthLegend/BirthLegend';
import BuyAndSell from '@/components/sections/BuyAndSell/BuyAndSell';
import DougMap from '@/components/sections/DougMap/DougMap';
import Faq from '@/components/sections/Faq/Faq';
import HowToBuy from '@/components/sections/HowToBuy/HowToBuy';
import JoinTheRevolution from '@/components/sections/JoinTheRevolution/JoinTheRevolution';
import MoonMisssion from '@/components/sections/MoonMission/MoonMission';
import Tokenomics from '@/components/sections/Tokenomics/Tokenomics';

const Home = () => {
  return (
    <>
      <Banner />
      <BirthLegend />
      <MoonMisssion />
      <Tokenomics />
      <BuyAndSell />
      <DougMap />
      <HowToBuy />
      <JoinTheRevolution />
      <Faq />
    </>
  );
};

export default Home;