import UseFood from "../../CusmotHooks/UseFood";
import UseFoodCard from "../../CusmotHooks/UseFoodCard";

const AvailableFoods = () => {
  // hooks
  const [food] = UseFood();

  return (
    <div className="bg-black text-white w-full h-full overflow-hidden">
      <div className="w-4/5 h-full mx-auto">
        <h1 className="text-center font-bold text-2xl p-2">GOOD BITE FOODS</h1>
        <p>
          we believe that good food should never go to waste. In this section,
          you’ll find a variety of surplus food items generously donated by
          individuals, local businesses, and community organizations, ready to
          be shared with those who need them. From fresh produce to pantry
          staples and homemade meals, these items are available to help reduce
          waste and support our community. Please note that some food items may
          be marked as unavailable, as they’ve already been claimed. Our
          inventory is updated regularly, so be sure to check back often as new
          food items are added throughout the day.
        </p>

        {/* card's content */}
        <div className="grid gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {food.map((food, index) => (
            <UseFoodCard key={index} food={food}></UseFoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
