const Why = () => {
  return (
    <div className="w-4/5 h-[900px] mx-auto lg:h-[900px] xl:h-[300px]">
      <div className="text-white flex flex-col justify-center items-center my-10 xl:flex-row">
        {/* <div className="w-1/2 h-full flex justify-center items-center"> */}
        <div className="w-full h-full flex justify-center items-center xl:w-1/2">
          <img
            src="https://i.pinimg.com/564x/c2/cb/99/c2cb991efab328100bc9f692e15c6368.jpg"
            alt="question section image"
            className="w-full h-[50%] object-cover rounded-xl xl:w-1/2"
          />
        </div>
        {/* <div className="w-1/2 h-full"> */}
        <div className="w-full h-full xl:1/2">
          <h1 className="text-2xl text-center p-2">
            But we are still wasting our food.
          </h1>
          <p>
            It’s alarming to think about how much food goes to waste while
            millions of people worldwide are struggling with hunger. Despite the
            well-known statistics and the urgent need to tackle food insecurity,
            we are still wasting massive amounts of food every year. In fact,
            while over 735 million people are going hungry globally, we are
            discarding enough food to feed billions. This waste doesn’t just
            affect those who go hungry—it also impacts the environment,
            depleting the water, land, and energy used to produce and transport
            food that never gets eaten. As individuals, we often throw away food
            simply because of poor planning, cooking too much, or
            misunderstanding expiration labels. At a larger scale, businesses
            discard food due to aesthetic standards, logistical inefficiencies,
            or consumer demand for excess variety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
