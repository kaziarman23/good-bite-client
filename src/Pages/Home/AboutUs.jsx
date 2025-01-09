import Carousel from "../../Components/Carousel/Carousel";

const AboutUs = () => {
  return (
    <div className="w-full h-full bg-black xl:h-screen ">
      <div className="w-full h-full mx-auto flex flex-col justify-center items-center gap-5 xl:w-4/5 xl:flex-row">
        <div className="w-full p-3 space-y-5 xl:w-1/2">
          <h1 className="text-white text-2xl font-bold text-center">
            About Us
          </h1>
          <p className="text-left text-white text-base mb-5">
            Every year, tons of perfectly good food are wasted, while many
            people struggle to find their next meal. At GoodBite, we believe we
            can change this by coming together as a community. Our platform
            makes it easy for anyone—whether you&#39;re an individual, a
            business owner, or a community group—to donate surplus food and
            share with neighbors in need. Our vision is simple: to create a
            community where excess food is redistributed, reducing waste while
            ensuring that no one goes hungry. GoodBite provides an easy-to-use
            platform where donors can post available food items, and those in
            need can quickly find and claim them. By using GoodBite, you&#39;re
            helping build a more sustainable and equitable future—one meal at a
            time. At GoodBite, every contribution matters. Whether you&#39;re
            donating, receiving, or simply spreading the word, together we can
            create a community where food waste is minimized, and everyone has
            access to fresh, nutritious meals.
          </p>
        </div>
        <div className="w-full p-3 h-[400px] xl:w-1/2">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
