import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Why from "./Why";
import OurImpact from "./OurImpact";
import Investors from "./Investors";
import Reviews from "./Reviews";
import OurFocus from "./OurFocus";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <div className="space-y-10 bg-black overflow-hidden">
      <Hero />
      <hr className="w-4/5 mx-auto" />
      <AboutUs />
      <hr className="w-4/5 mx-auto" />
      <Statistics />
      <hr className="w-4/5 mx-auto" />
      <Why />
      <OurFocus />
      <OurImpact />
      <hr className="w-4/5 mx-auto" />
      <Investors />
      <hr className="w-4/5 mx-auto" />
      <Reviews />
    </div>
  );
};

export default Home;
