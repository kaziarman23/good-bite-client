const Statistics = () => {
  return (
    <div className="w-full h-full bg-black overflow-hidden xl:h-screen">
      <div className="w-full h-full p-3 mx-auto xl:w-4/5">

        <div className="w-full h-1/2 text-white flex flex-col gap-4 justify-center items-center my-10 xl:flex-row xl:gap-0">
          <div className="w-full h-full space-y-4 xl:w-1/2">
            <h1 className="text-xl text-left font-bold sm:text-center">
              Global Hunger Statistics
            </h1>
            <p className='text-base'>
              Around 735 million people around the world are facing hunger in
              2023, according to the latest data from the United Nations (UN)
              and the World Food Programme (WFP). This is an increase from
              around 615 million in 2019, before the COVID-19 pandemic worsened
              global food insecurity. Over 2.4 billion people are moderately or
              severely food insecure, meaning they do not have regular access to
              enough nutritious food throughout the year. Every day,
              approximately 25,000 people (including over 10,000 children) die
              from hunger-related causes. This means a child dies every 10
              seconds due to hunger.
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

        {/* Stats Content */}
        <div className="w-full h-1/2 my-10">
          <div className="w-full h-1/2 text-center stats stats-vertical border-2 bg-black text-white lg:stats-horizontal lg:flex shadow">
            <div className="stat">
              <div className="stat-title">Meals Provided</div>
              <div className="stat-value">74K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">New Donors</div>
              <div className="stat-value">1,500</div>
              <div className="stat-desc">↗︎ 300 (25%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Food Drives Organized</div>
              <div className="stat-value">27</div>
              <div className="stat-desc">↗︎ 4 (17%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Volunteers Joined</div>
              <div className="stat-value">650</div>
              <div className="stat-desc">↗︎ 120 (18%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Food Donation Weight</div>
              <div className="stat-value">8,200 lbs</div>
              <div className="stat-desc">↗︎ 2,000 lbs (32%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
