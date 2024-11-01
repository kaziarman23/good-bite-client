const Hero = () => {
  return (
    <div className="w-full h-full bg-black flex flex-col justify-center items-center xl:h-screen xl:flex-row">
      <div className="w-full h-full mt-20 p-3 flex gap-3 justify-center items-center md:p-0 xl:w-1/2">
        <img
          src="https://i.pinimg.com/236x/81/7f/e3/817fe389dd32aa91aab4e0255cafc440.jpg"
          alt="hero section first img"
          className="object-cover w-1/6 h-1/2 rounded-xl"
        />
        <img
          src="https://i.pinimg.com/236x/68/99/f9/6899f9aa6b3d2817a563de22f4a6d607.jpg"
          alt="hero section second img"
          className="object-cover w-2/6 h-1/2 rounded-xl"
        />
      </div>
      <div className="w-full h-full  p-3  flex justify-center items-center text-left flex-col xl:w-1/2">
        <div className="space-y-5 text-white">
          <h1 className="text-2xl text-left font-bold hover:text-orange-500 xl:text-4xl">
            Good Bite
          </h1>
          <p className="font-bold text-sm xl:text-base">
            Together, We Can End Food Waste & Feed Our People
          </p>
          <p className="mr-5">
            Join a community-driven movement to reduce food waste, share surplus
            meals, and ensure that no plate goes empty. Our platform connects
            local individuals, businesses, and organizations to redistribute
            excess food, empowering everyone to contribute to a sustainable,
            hunger-free future. Whether you have extra produce from your garden,
            surplus stock from your business, or simply want to help,
            there&#39;s a place for you here. Let’s build a stronger, greener
            community by sharing what we have, one meal at a time. Save Food.
            Share Love. Strengthen Communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
