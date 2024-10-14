import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import UseFood from "../../CusmotHooks/UseFood";
import UseOutletRedBtn from "../../CusmotHooks/UseOutletRedBtn";
import UseGreenToBlueBtn from "../../CusmotHooks/UseGreenToBlueBtn";
import UseAxios from "../../CusmotHooks/UseAxios";
import Swal from "sweetalert2";

const MyFoods = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const axiosPublic = UseAxios();
  const [food, refetch] = UseFood();

  const foodlist = food.filter((food) => food.email === user.email);
  console.log(foodlist);

  // handle update food
  const handleUpdateFood = () => {};

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

  return (
    <div className="w-full h-screen bg-black">
      <div className="w-4/5 h-full mx-auto p-4 bg-slate-950 text-white space-y-5">
        <h1 className="text-2xl text-left font-bold">
          Mr.{user.displayName} Food List.
        </h1>
        <h5 className="text-left font-bold">
          Total Added Foods are: {foodlist.length}
        </h5>
        {/* table content */}
        <div className="overflow-x-auto overflow-y-scroll">
          <table className="table ">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th>SL:</th>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Food Quantity</th>
                <th>Pickup Location</th>
                <th>Expire date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {foodlist.map((food, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={food.foodImg}
                      alt={food.foodName}
                      className="object-cover w-16 h-16 rounded-full"
                    />
                  </td>
                  <td>
                    <h1>{food.foodName}</h1>
                  </td>
                  <td>{food.quantity}</td>
                  <td>{food.pickupLocation}</td>
                  <td>{food.expireDate}</td>
                  <th>
                    <UseGreenToBlueBtn onClick={handleUpdateFood}>
                      Update
                    </UseGreenToBlueBtn>
                    <UseOutletRedBtn onClick={() => handleDeleteFood(food._id)}>
                      Delete
                    </UseOutletRedBtn>
                  </th>
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
