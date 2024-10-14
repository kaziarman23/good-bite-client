import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useForm } from "react-hook-form";
import UseAxios from "../../CusmotHooks/UseAxios";
import Swal from "sweetalert2";

const AddFood = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const axiosPublic = UseAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle Submit
  const onSubmit = (data) => {
    console.log("submited data: ", data);
    const foodItemDetails = {
      foodName: data.foodName,
      quantity: data.quantity,
      pickupLocation: data.pickupLocation,
      expireDate: data.expireDate,
      foodImg: data.foodImg,
      status: data.status,
      description: data.description,
      image: data.image,
      name: data.name,
      email: data.email,
    };
    axiosPublic.post("/foods", foodItemDetails).then((res) => {
      if (res.data.insertedId) {
        // showing alert and clearing the form
        reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Food item added successfully",
        });
      }
    });
  };

  if (!user) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <p className="text-white w-80 h-80 loading loading-infinity loading-xl"></p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto bg-black">
      <div className="relative p-4 w-full h-full max-w-2xl mx-auto">
        <div className="relative p-4 rounded-lg shadow bg-gray-800 sm:p-5">
          <div className=" pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-600">
            <h3 className="text-lg font-semibold text-center text-white">
              Add Food
            </h3>
          </div>
          {/* form content */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="food-name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Food Name
                </label>
                <input
                  type="text"
                  name="foodName"
                  id="food-name"
                  className="border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Food name"
                  {...register("foodName", { required: true })}
                />

                {/* handling food Name error  */}
                {errors.foodName?.type === "required" && (
                  <p className="text-red-500">Food name is required</p>
                )}
              </div>
              {/* quantity fild */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Quantity/Per-Person
                </label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  className=" border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Food quantity"
                  {...register("quantity", { required: true, maxLength: 1000 })}
                />

                {/* handling quantity error  */}
                {errors.quantity?.type === "required" && (
                  <p className="text-red-500">Quantity fild is required</p>
                )}
                {errors.quantity?.type === "maxLength" && (
                  <p className="text-red-500">
                    we are not capable for that large amount of food.
                  </p>
                )}
              </div>

              {/* pickup location fild */}
              <div>
                <label
                  htmlFor="pickup-location"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickup-location"
                  id="pickup-location"
                  className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ocus:ring-primary-500 focus:border-primary-500"
                  placeholder="Pickup Location"
                  {...register("pickupLocation", { required: true })}
                />
                {/* handling Pickup location error  */}
                {errors.pickupLocation?.type === "required" && (
                  <p className="text-red-500">Pickup location is required</p>
                )}
              </div>

              {/* expire date fild */}
              <div>
                <label
                  htmlFor="expired-date"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Expired Date
                </label>
                <input
                  type="date"
                  name="expired-date"
                  id="expired-date"
                  className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ocus:ring-primary-500 focus:border-primary-500"
                  {...register("expireDate", { required: true })}
                />

                {/* handling Expire Date error  */}
                {errors.expireDate?.type === "required" && (
                  <p className="text-red-500">Expire date fild is required</p>
                )}
              </div>

              <div className="sm:col-span-2 space-y-3">
                {/* Food Image fild */}
                <div>
                  <label
                    htmlFor="photo"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    PhotoURL
                  </label>
                  <input
                    type="text"
                    name="foodImg"
                    id="photo"
                    className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ocus:ring-primary-500 focus:border-primary-500"
                    placeholder="Photo URL"
                    {...register("foodImg", { required: true })}
                  />

                  {/* handling photo error  */}
                  {errors.foodImg?.type === "required" && (
                    <p className="text-red-500">Food img fild is required</p>
                  )}
                </div>

                {/* status fild */}
                <div>
                  <label
                    htmlFor="status"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    status
                  </label>
                  <select
                    // defaultValue="default"
                    id="status"
                    className=" border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    {...register("status", {
                      required: true,
                      defaultValue: "Available",
                    })}
                  >
                    <option value="Available">Available</option>
                    <option value="Low">Low</option>
                    <option value="Unvailable">Unavailable</option>
                  </select>
                </div>

                {/* description fild */}
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm rounded-lg border    bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write product description here"
                  {...register("description", { required: true })}
                ></textarea>

                {/* handling description error  */}
                {errors.description?.type === "required" && (
                  <p className="text-red-500">Description fild is required</p>
                )}
              </div>
            </div>

            <div className="w-full h-40 flex items-center">
              <div className="w-1/2 avatar justify-center">
                <div className="w-24 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt={user.name} />
                  ) : (
                    <img
                      src="https://i.pinimg.com/enabled_lo/564x/dc/80/c5/dc80c5160bd01d66a163ffe15c4e5517.jpg"
                      alt="ghost image for donar"
                    />
                  )}
                  {/* handling image error  */}
                  {errors.image?.type === "required" && (
                    <p className="text-red-500">image fild is required</p>
                  )}
                  {/* Hidden input field to capture photoURL */}
                  <input
                    type="hidden"
                    value={
                      user?.photoURL ||
                      "https://i.pinimg.com/enabled_lo/564x/dc/80/c5/dc80c5160bd01d66a163ffe15c4e5517.jpg"
                    }
                    {...register("image")}
                  />
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <input
                  type="text"
                  name="name"
                  readOnly
                  className="rounded-xl bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  value={user?.displayName}
                  {...register("name", {
                    required: true,
                  })}
                />

                {user?.email ? (
                  <input
                    readOnly
                    type="email"
                    name="email"
                    value={user.email}
                    className="rounded-xl bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    {...register("email", {
                      required: true,
                    })}
                  />
                ) : (
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="rounded-xl bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    {...register("email", {
                      required: true,
                    })}
                  />
                )}
              </div>
            </div>
            <div className="border-b border-gray-600 mb-3 p-2 text-white">
              {/* have to fix it */}
              {!user?.photoURL && (
                <p>
                  we can&#39;t access your profile, that&#39;s why your are the
                  ghost.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="text-black bg-blue-700 hover:text-white hover:bg-blue-500 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
