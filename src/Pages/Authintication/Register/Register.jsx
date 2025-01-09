import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import UseAxios from "../../../CusmotHooks/UseAxios";
import toast from "react-hot-toast";

const Register = () => {
  // state
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");

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
    createUser(data.email, data.password)
      .then(() => {
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
              if (res.data.insertedId) {
                // clear the error state
                setRegisterError("");

                // clearing the form
                reset();

                // navigating the user
                navigate("/");

                // showing alert
                toast.success("Registation successfull.");
              }
            })
            .catch((error) => {
              console.log(error.message, error);
              setRegisterError(error.message);
              reset();

              // showing alert
              toast.error("Registation Failed. Please try again.");
            });
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setRegisterError(
            "This email is already in use. Please use a different email or log in."
          );
        } else {
          setRegisterError("An unexpected error occurred. Please try again.");
        }
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
          if (res.data.insertedId) {
            // clearing the error state
            setRegisterError("");

            // reseting the form
            reset();
            // navigating the user
            navigate("/");

            // showing alert
            toast.success("Register successfull.");
          }
        })
        .catch((error) => {
          setRegisterError(error.message);
          toast.error("Register Failed. Please try again.");
        });
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
            // clearing the error state
            setRegisterError("");

            // clearing the form
            reset();

            // navigating the user
            navigate("/");

            // showing alert
            toast.success("Register successfull.");
          }
        })
        .catch((error) => {
          setRegisterError(error.message);
          toast.error("Register Failed. Please try again.");
        });
    });
  };

  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">
      <div className="w-11/12 h-auto bg-black border-2 p-5 rounded-xl mt-20 md:w-1/2 xl:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
          <h1 className="text-white text-center font-bold text-2xl mb-5">
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
            className="w-full font-bold border-2 rounded-lg text-sm px-5 py-3 text-center uppercase border-blue-600 bg-black text-blue-500 hover:bg-blue-700 hover:text-white hover:border-blue-700"
          >
            Register
          </button>
          <p className="text-white my-3">
            Already have an account? Please{" "}
            <Link to="/login">
              <span className="hover:underline text-blue-500 font-bold">
                Login
              </span>
            </Link>
          </p>
          <p className="text-white my-3">or Register With</p>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={handleGoogleRegister}
              className="btn text-white hover:text-black hover:bg-[#d4d8d8]"
            >
              <FcGoogle className="w-6 h-6" /> Google
            </button>
            <button
              onClick={handleGithubRegister}
              className="btn text-white hover:text-black hover:bg-[#d4d8d8]"
            >
              <VscGithubInverted className="w-6 h-6" />
              Github
            </button>
          </div>
          {registerError && (
            <p className="text-red-600 text-center text-sm my-5">
              {registerError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
