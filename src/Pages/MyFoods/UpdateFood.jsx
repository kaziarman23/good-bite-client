import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import UseAxios from "../../CusmotHooks/UseAxios";
import toast from "react-hot-toast";

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

          // navigating the user to previous page
          navigate(-1);

          // showing success alert
          toast.success("${loadedData.foodName} is now updated.");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong.");
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
              className="btn border-blue-500  bg-black text-white hover:border-blue-500 hover:bg-blue-600 md:text-base"
            />
            <button
              onClick={handleCancel}
              type="button"
              className="btn border-red-500  bg-black text-white hover:border-red-700 hover:bg-red-700 md:text-base"
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
