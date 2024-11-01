import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import UseFood from "../../CusmotHooks/UseFood";
import UseGreenToBlueBtn from "../../CusmotHooks/UseGreenToBlueBtn";
import UseAxios from "../../CusmotHooks/UseAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyFoods = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const axiosPublic = UseAxios();
  const [food, refetch] = UseFood();

  // filtering the data
  const foodlist = food.filter((food) => food.email === user.email);

  // handle delete food item
  const handleDeleteFood = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/foods/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // refetching the data and showing success message
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  if (foodlist.length === 0) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center flex-col gap-3 p-4">
        <h1 className="text-white text-2xl text-center uppercase">
          No food item donated till now by you!
        </h1>
        <Link to="/addFood">
          <UseGreenToBlueBtn>Add Food</UseGreenToBlueBtn>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black p-4">
      <div className="w-full max-w-6xl min-h-full mt-20 mx-auto bg-slate-950 text-white space-y-5 p-5 rounded-xl">
        <h1 className="text-2xl text-left font-bold">
          Mr. {user.displayName}&#39;s Food List.
        </h1>
        <h5 className="text-left font-bold">
          Total Added Foods: {foodlist.length}
        </h5>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th className="p-3">SL:</th>
                <th className="p-3">Food Image</th>
                <th className="p-3">Food Name</th>
                <th className="p-3">Food Quantity</th>
                <th className="p-3">Pickup Location</th>
                <th className="p-3">Expire Date</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {foodlist.map((food, index) => (
                <tr key={index} className="border-t border-slate-700">
                  <th className="p-3">{index + 1}</th>
                  <td className="p-3">
                    <img
                      src={food.foodImg}
                      alt={food.foodName}
                      className="object-cover w-16 h-16 rounded-full"
                    />
                  </td>
                  <td className="p-3">
                    <h1>{food.foodName}</h1>
                  </td>
                  <td className="p-3">{food.quantity}</td>
                  <td className="p-3">{food.pickupLocation}</td>
                  <td className="p-3">{food.expireDate}</td>
                  <td className="p-3 space-y-2 md:space-y-0 md:space-x-2">
                    <Link to={`/updateFood/${food._id}`}>
                      <button className="btn border-yellow-500  bg-black text-white hover:border-yellow-500 hover:bg-yellow-500 md:text-base">
                        Update
                      </button>
                    </Link>
                    <button
                      className="btn border-red-500  bg-black text-white hover:border-red-700 hover:bg-red-700 md:text-base"
                      onClick={() => handleDeleteFood(food._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoods;
