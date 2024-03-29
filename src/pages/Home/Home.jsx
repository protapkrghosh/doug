import Banner from '@/components/sections/Banner/Banner';
import BirthLegend from '@/components/sections/BirthLegend/BirthLegend';
import BuyAndSell from '@/components/sections/BuyAndSell/BuyAndSell';
import HowToBuy from '@/components/sections/HowToBuy/HowToBuy';
import JoinTheRevolution from '@/components/sections/JoinTheRevolution/JoinTheRevolution';

const Home = () => {
  return (
    <>
      <Banner />
      <BirthLegend />
      {/* <BuyAndSell /> */}
      <HowToBuy />
      {/* <JoinTheRevolution /> */}
    </>
  );
};

export default Home;