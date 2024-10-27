const Hero = () => {
  return (
    <div className="w-full h-[741px] flex flex-col justify-center items-center bg-black xl:h-screen xl:flex-row">
      <div className="w-full h-full p-3 flex justify-center items-center md:p-0 xl:w-1/2">
        <img
          src="/heroImage.png"
          alt="hero section image"
          className="object-cover w-1/2 h-1/2 rounded-xl"
        />
      </div>
      <div className="w-full space-y-5 p-3 text-white flex text-left flex-col xl:w-1/2">
        <h1 className="text-2xl font-bold xl:text-4xl">Good Bite</h1>
        <p className="font-bold text-sm xl:text-base">
          Together, We Can End Food Waste & Feed Our People
        </p>
        <p className="mr-5">
          Join a community-driven movement to reduce food waste, share surplus
          meals, and ensure that no plate goes empty. Our platform connects
          local individuals, businesses, and organizations to redistribute
          excess food, empowering everyone to contribute to a sustainable,
          hunger-free future. Whether you have extra produce from your garden,
          surplus stock from your business, or simply want to help, there&#39;s
          a place for you here. Let’s build a stronger, greener community by
          sharing what we have, one meal at a time. Save Food. Share Love.
          Strengthen Communities.
        </p>
      </div>
    </div>
  );
};

export default Hero;
