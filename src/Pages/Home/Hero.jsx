const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="w-1/2 h-full flex justify-center items-center">
        <img
          src="https://i.pinimg.com/564x/c2/c1/15/c2c1158b5d2b0de3e32fb98c16db4849.jpg"
          alt="hero section image"
          className=" object-cover rounded-xl"
        />
      </div>
      <div className="w-1/2 space-y-5 text-white flex text-left  flex-col">
        <h1 className="text-4xl font-bold">Good Bite</h1>
        <p className="font-bold">
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
