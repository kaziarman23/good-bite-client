import { useNavigate, useParams } from "react-router";
import UseFood from "../../CusmotHooks/UseFood";
import UseGreenToBlueBtn from "../../CusmotHooks/UseGreenToBlueBtn";
import { Link } from "react-router-dom";
import UsePurpleToPinkBtn from "../../CusmotHooks/UsePurpleToPinkBtn";
import Swal from "sweetalert2";
import UseAxios from "../../CusmotHooks/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const FoodDetails = () => {
  // context api
  const { user } = useContext(AuthContext);

  // states
  const axiosPublic = UseAxios();
  const navigate = useNavigate();

  // hooks
  const [food, refetch] = UseFood();

  // collecting the selected id with the help of use params
  const { id } = useParams();

  // finding the food details
  const foodItem = food.find((food) => food._id === id);

  const handleFoodRequest = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to send request for this food !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it.",
    }).then((result) => {
      if (result.isConfirmed) {
        const reqInfo = {
          foodName: foodItem.foodName,
          quantity: foodItem.quantity,
          pickupLocation: foodItem.pickupLocation,
          expireDate: foodItem.expireDate,
          foodImg: foodItem.foodImg,
          status: foodItem.status,
          description: foodItem.description,
          image: foodItem.image,
          name: foodItem.name,
          email: foodItem.email,
          requesterName: user.displayName,
          requesterEmail: user.email,
          requesterPhoto: user.photoURL,
        };

        // sending req to server
        axiosPublic
          .post(`/requests/${foodItem._id}`, reqInfo)
          .then((res) => {
            if (res.data.requestResult.insertedId) {
              // refetching the data and sending user to home
              refetch();
              navigate("/availableFoods");

              // showing alert
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your request accepted",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

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
      <div className="w-4/5 h-[520px] gap-2 bg-slate-950 flex flex-col justify-center items-center text-white">
        <h1 className="font-bold text-2xl p-2">Food Details</h1>
        {/* food details */}
        <div className="w-full h-96 flex justify-center items-center">
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src={foodItem.foodImg}
              alt={foodItem.foodName}
              className="object-cover w-2/3 h-4/5 rounded-xl"
            />
          </div>
          <div className="w-1/2 text-left ml-3 space-y-3 text-white">
            <h1 className="text-xl font-bold">Doner Name: {foodItem.name}</h1>
            <h1 className="text-xl">Food Name: {foodItem.foodName}</h1>
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
              Request
            </UseGreenToBlueBtn>
          ) : (
            <UseGreenToBlueBtn onClick={handleFoodRequest}>
              Request
            </UseGreenToBlueBtn>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
