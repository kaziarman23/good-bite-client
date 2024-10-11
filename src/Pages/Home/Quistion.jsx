const Quistion = () => {
  return (
    <div className="w-4/5 h-auto mx-auto">
      <div className="text-white  flex justify-center items-center my-10">
        <div className="w-1/2 h-full">
          <h1 className="text-2xl text-center p-2">
            Global Hunger Statistics{" "}
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
        <div className="w-1/2 h-full flex justify-center items-center">
          <img
            src="https://i.pinimg.com/564x/55/f5/ec/55f5ec4ad769f2d7e5e1b374f531885d.jpg"
            alt="question section image"
            className="w-1/2 h-[50%] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Quistion;
