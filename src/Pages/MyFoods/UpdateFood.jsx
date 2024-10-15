import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import UseAxios from "../../CusmotHooks/UseAxios";
import Swal from "sweetalert2";

const UpdateFood = () => {
  // loading data
  const loadedData = useLoaderData();

  // states
  const navigate = useNavigate();
  const axiosPublic = UseAxios();

  // use form hook
  const { register, handleSubmit, reset } = useForm();

  // handle submit
  const onSubmit = (data) => {
    console.log("on submit :", data);

    const updateInfo = {
      foodName: data.foodName,
      quantity: data.quantity,
      pickupLocation: data.pickupLocation,
    };
    // sending updated data to server
    axiosPublic
      .patch(`/foods/${loadedData._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          // resetting the form
          reset();

          // showing success alert and returning to previous page
          navigate(-1);
          Swal.fire({
            title: "Success",
            text: `${loadedData.foodName} is now updated`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle cancel
  const handleCancel = () => {
    // resetting the form
    reset();
    // returning to previous page
    navigate(-1);
  };

  return (
    <div className="relative p-4 w-full min-h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h1 className="text-2xl font-bold text-center text-white mb-6">
            Update Food Item
          </h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Food Name */}
            <div>
              <label
                htmlFor="foodName"
                className="block mb-2 text-sm font-medium text-white"
              >
                Food Name
              </label>
              <input
                type="text"
                id="foodName"
                className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-sm placeholder-gray-400 text-white"
                defaultValue={loadedData.foodName}
                {...register("foodName")}
              />
            </div>

            {/* Quantity */}
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-white"
              >
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-sm placeholder-gray-400 text-white"
                defaultValue={loadedData.quantity}
                {...register("quantity")}
              />
            </div>

            {/* Pickup Location */}
            <div className="sm:col-span-2">
              <label
                htmlFor="pickupLocation"
                className="block mb-2 text-sm font-medium text-white"
              >
                Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-sm placeholder-gray-400 text-white"
                defaultValue={loadedData.pickupLocation}
                {...register("pickupLocation")}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <input
              type="submit"
              value="Update Product"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-green-500 transition duration-300"
            />
            <button
              onClick={handleCancel}
              type="button"
              className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-red-700 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
