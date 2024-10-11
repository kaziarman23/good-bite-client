import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import Swal from "sweetalert2";
import UseAxios from "../../../CusmotHooks/UseAxios";

const Register = () => {
  const navigate = useNavigate();

  // Context api
  const { createUser, updateUser, googleAuthintication, githubAuthintication } =
    useContext(AuthContext);

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
    // creating user with email
    createUser(data.email, data.password).then(() => {
      // updating user
      updateUser(data.name, data.photo).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
          photo: data.photo,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res);
            if (res.data.insertedId) {
              // showing alert and navigating the user to home page
              reset();
              navigate("/");

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
                title: "Registation successfully",
              });
            }
          })
          .catch((error) => console.log(error.message, error));
      });
    });
  };

  // Register with Google
  const handleGoogleRegister = () => {
    googleAuthintication().then((data) => {
      const userInfo = {
        name: data.user?.displayName,
        email: data.user?.email,
        photo: data.user?.photoURL,
      };
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            // showing alert and navigating the user to home page
            reset();
            navigate("/");

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
              title: "Registation successfully",
            });
          }
        })
        .catch((error) => console.log(error));
    });
  };

  // Register with Github
  const handleGithubRegister = () => {
    githubAuthintication().then((data) => {
      const userInfo = {
        name: data.user?.displayName,
        email: data.user?.email,
        photo: data.user?.photoURL,
      };
      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            // showing alert and navigating the user to home page
            reset();
            navigate("/");

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
              title: "Registation successfully",
            });
          }
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="w-full h-screen bg-gray-950 flex justify-center items-center">
      <div className="w-96 h-auto bg-black p-5 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
          <h1 className="text-white text-center font-bold text-2xl">
            Register Now
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="name"
              name="name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=""
              {...register("name", { required: true })}
            />

            {/* handling name error  */}
            {errors.name?.type === "required" && (
              <p className="text-red-500">name is required</p>
            )}

            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="photoURL"
              name="photo"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
              {...register("photo")}
            />
            <label
              htmlFor="photoURL"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Photo url
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
              placeholder=" "
              {...register("email", { required: true })}
            />

            {/* handling email error  */}
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}

            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              placeholder=" "
              {...register("password", {
                required: true,
                minLength: 7,
                maxLength: 90,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{7,90}$/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                },
              })}
            />

            {/* handling password error  */}
            {errors.password?.type === "required" && (
              <p className="text-red-500">password required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                password have to bigger then 7 characters
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500">
                password have to lower then 90 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm  sm:w-auto lg:w-full px-5 py-3 text-center bg-blue-600 hover:bg-green-500 hover:text-black focus:ring-green-500"
          >
            Register
          </button>
          <p className="text-white my-3">
            Already have an account? Please{" "}
            <Link to="/login">
              <span className="hover:underline hover:text-blue-500">Login</span>
            </Link>
          </p>
          <p className="text-white my-3">or Register With</p>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={handleGoogleRegister}
              className="btn hover:text-white hover:bg-black"
            >
              <FcGoogle className="w-6 h-6" /> Google
            </button>
            <button
              onClick={handleGithubRegister}
              className="btn hover:text-white hover:bg-black"
            >
              <VscGithubInverted className="w-6 h-6" />
              Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
