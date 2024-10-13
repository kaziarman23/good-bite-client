import { useParams } from "react-router";
import UseFood from "../../CusmotHooks/UseFood";
import UseGreenToBlueBtn from "../../CusmotHooks/UseGreenToBlueBtn";
import { Link } from "react-router-dom";
import UsePurpleToPinkBtn from "../../CusmotHooks/UsePurpleToPinkBtn";
import Swal from "sweetalert2";

const FoodDetails = () => {
  // hooks
  const [food] = UseFood();

  // collecting the selected id with the help of use params
  const { id } = useParams();

  // finding the food details
  const foodItem = food.find((food) => food._id === id);

  // handling Unavailable requist
  const handleUnavailableReq = () => {
    Swal.fire({
      title: "Error!",
      text: "This food is unavailable right now !",
      icon: "error",
      background: "black",
      color: "white", 
      confirmButtonColor: "red",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="w-full h-[579px] flex justify-center items-center bg-black">
      <div className="w-4/5 h-[420px] gap-2 bg-slate-950 flex flex-col justify-center items-center text-white">
        <h1 className="font-bold text-2xl p-2">Food Details</h1>
        {/* food details */}
        <div className="w-full h-96 flex justify-center items-center">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={foodItem.foodImg}
              alt={foodItem.foodName}
              className="object-cover w-1/2 h-1/2 rounded-xl"
            />
          </div>
          <div className="w-1/2 text-left ml-3 space-y-3 text-white">
            <h1 className="text-xl font-bold">
              Food Name: {foodItem.foodName}
            </h1>
            <h3 className="text-xl">Quantity: {foodItem.quantity}</h3>
            <p className="text-xl">Expire Date: {foodItem.expireDate}</p>
            <p className="text-xl">
              Pickup Location: {foodItem.pickupLocation}
            </p>
            <p className="text-xl">Status: {foodItem.status}</p>
            <p className="text-xl">description: {foodItem.description}</p>
          </div>
        </div>
        <div className="w-full gap-5 mr-5 p-4 flex justify-end items-center">
          <Link to="/availableFoods">
            <UsePurpleToPinkBtn>Back</UsePurpleToPinkBtn>
          </Link>
          {foodItem.status === "unavailable" ? (
            <UseGreenToBlueBtn onClick={handleUnavailableReq}>
              Requist
            </UseGreenToBlueBtn>
          ) : (
            <Link to="">
              <UseGreenToBlueBtn>Requist</UseGreenToBlueBtn>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
