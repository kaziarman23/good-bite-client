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
    // sending updatedata to server
    axiosPublic
      .patch(`/foods/${loadedData._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          // reseting the form
          reset();

          // showing success alert and returning previous page
          navigate(-1);
          Swal.fire({
            title: "Success",
            text: `${loadedData.foodName}`,
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
    // reseting the form
    reset();
    // returning previous page
    navigate(-1);
  };

  return (
    <div className="relative p-4 w-full h-auto bg-black ">
      <div className="relative w-3/5 h-full p-4 mx-auto text-white rounded-lg shadow bg-gray-800 sm:p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold text-center p-3">Update Item</h1>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="foodName"
                className="block mb-2 text-sm font-medium text-white"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                id="foodName"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder=""
                defaultValue={loadedData.foodName}
                {...register("foodName")}
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-white"
              >
                Quantit
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder=""
                defaultValue={loadedData.quantity}
                {...register("quantity")}
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="pickupLocation"
                className="block mb-2 text-sm font-medium text-white"
              >
                Pickup Location
              </label>
              <input
                type="text"
                name="pickupLocation"
                id="pickupLocation"
                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                placeholder=""
                defaultValue={loadedData.pickupLocation}
                {...register("pickupLocation")}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="submit"
              value="Update product"
              className="btn border hover:bg-green-500 bg-blue-500 hover:text-white text-white"
            />
            <button
              onClick={handleCancel}
              type="button"
              className="btn hover:bg-red-700 bg-orange-500 hover:text-black text-white hover:border-red-500"
            >
              Cencel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
