const OurFocus = () => {
  return (
    <div
      className="w-4/5 h-[500px] mx-auto text-white relative bg-fixed"
      style={{
        backgroundImage: `url(https://i.pinimg.com/564x/84/ba/62/84ba624e9627ffe7f999c6c820931eeb.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full bg-black opacity-80 absolute top-0 left-0 z-10"></div>

      <div className="relative z-20 h-full flex flex-col gap-5 justify-center items-center">
        <h1 className="text-center text-4xl font-bold p-2">Our Main Focus</h1>
        <div className="flex justify-center items-center">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://i.pinimg.com/564x/84/ba/62/84ba624e9627ffe7f999c6c820931eeb.jpg"
              alt="focus image"
              className="object-cover w-1/2 h-1/2"
            />
          </div>
          <div className="w-1/2 space-y-3">
            <h1 className="text-left font-bold text-2xl">At GOOD BITE,</h1>
            <p>
              Our mission is simple yet powerful: to reduce food waste and
              create a healthier planet by redistributing surplus food. Every
              day, tons of perfectly edible food are discarded, contributing to
              environmental damage and food insecurity. Our focus is on changing
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
