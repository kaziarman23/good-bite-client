const Statistics = () => {
  return (
    <div className="w-4/5 h-[725px] mx-auto sm:h-[800px] md:h-[850px] lg:h-[1000px] xl:h-[380px]">
      <div className="text-white flex flex-col gap-4 justify-center items-center my-10 xl:flex-row xl:gap-0">
        <div className="w-full h-full space-y-4 xl:w-1/2">
          <h1 className="text-2xl text-left xl:mb-0">
            Global Hunger Statistics
          </h1>
          <p>
            Around 735 million people around the world are facing hunger in
            2023, according to the latest data from the United Nations (UN) and
            the World Food Programme (WFP). This is an increase from around 615
            million in 2019, before the COVID-19 pandemic worsened global food
            insecurity. Over 2.4 billion people are moderately or severely food
            insecure, meaning they do not have regular access to enough
            nutritious food throughout the year. Every day, approximately 25,000
            people (including over 10,000 children) die from hunger-related
            causes. This means a child dies every 10 seconds due to hunger.
          </p>
        </div>
        <div className="w-full h-full relative flex justify-center items-center xl:w-1/2">
          <img
            src="https://i.pinimg.com/236x/41/b4/25/41b42578573a8732d735ccd4911ace26.jpg"
            alt="Statistics section image"
            className="w-3/4 h-1/2 object-cover rounded-xl md:w-4/5 md:h-3/5 lg:w-3/5 lg:h-3/5 xl:w-1/2 xl:h-1/2"
          />

          <div>
            <img
              src="https://i.pinimg.com/236x/26/3e/1a/263e1afd709575e063287e5be2f48d34.jpg"
              alt="Statistics section second image"
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-xl absolute top-2 left-4 sm:top-4 sm:left-8 lg:top-8 lg:left-12"
            />
          </div>

          <div>
            <img
              src="https://i.pinimg.com/236x/c7/81/97/c78197b78d612b2e4c0c7386b520c6d7.jpg"
              alt="Statistics section third image"
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-xl absolute bottom-2 right-4 sm:bottom-4 sm:right-8 lg:bottom-8 lg:right-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
