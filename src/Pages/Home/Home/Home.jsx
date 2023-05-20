import useDynamicTitle from "../../../useDynamicTitle/useDynamicTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  useDynamicTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <About></About>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
