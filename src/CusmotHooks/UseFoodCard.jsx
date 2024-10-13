import { Link } from "react-router-dom";

const UseFoodCard = ({ food }) => {
  return (
    <div className="card w-80 h-[400px] shadow-xl text-black">
      <figure>
        <img src={food.foodImg} alt={food.foodName} className="w-full h-60" />
      </figure>
      <div className="card-body bg-gray-950 text-white">
        <h2 className="card-title">{food.foodName}</h2>
        <p>{food.pickupLocation}</p>
        <div className="card-actions justify-end">
          <Link to={`/availableFoods/foodDetails/${food._id}`}>
            <button className="btn text-black border-blue-500 bg-blue-500 hover:text-white hover:bg-blue-600 hover:border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseFoodCard;
