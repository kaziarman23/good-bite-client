import { Link } from "react-router-dom";

const UseFoodCard = ({ food }) => {
  return (
    <div className="card w-60 h-80 shadow-xl md:w-72 lg:w-60 xl:w-80 xl:h-[400px]">
      <figure className="">
        <img
          src={food.foodImg}
          alt={food.foodName}
          className="w-full h-full xl:h-60"
        />
      </figure>
      <div className="card-body bg-gray-950 text-white">
        <h2 className="card-title text-sm md:text-base lg:text-lg xl:text-xl">
          {food.foodName}
        </h2>
        <p className="text-sm md:text-base xl:text-xl">{food.pickupLocation}</p>
        <div className="card-actions justify-end">
          <Link to={`/availableFoods/foodDetails/${food._id}`}>
            <button className="btn btn-sm text-black border-blue-500 bg-blue-500 hover:text-white hover:bg-blue-600 hover:border-blue-500 md:text-base xl:btn xl:bg-blue-500 xl:border-blue-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseFoodCard;
