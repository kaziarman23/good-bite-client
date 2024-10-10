import Hero from "./Hero";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="space-y-10 bg-black overflow-hidden">
      <Hero />
      <AboutUs />
    </div>
  );
};

export default Home;
