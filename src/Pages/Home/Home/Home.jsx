import useDynamicTitle from "../../../useDynamicTitle/useDynamicTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Follow from "../Follow/Follow";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useDynamicTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <About></About>
      <Follow></Follow>
    </div>
  );
};

export default Home;
