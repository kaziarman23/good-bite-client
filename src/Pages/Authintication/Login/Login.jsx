import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState("");

  // Context api
  const { loginUser, googleAuthintication, githubAuthintication } =
    useContext(AuthContext);

  // using useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Login with Email
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        //  reseting the form
        reset();

        // navigating the user
        const redirectTo = location?.state?.from || "/";
        navigate(redirectTo);

        // showing an alert
        toast.success("logged in successfully");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);

        // showing an alert
        toast.error("Logged in Failed. Please try again.");
      });
  };

  // Login with Google
  const handleGoogleLogin = () => {
    googleAuthintication()
      .then(() => {
        // navigating the user
        const redirectTo = location?.state?.from || "/";
        navigate(redirectTo);

        // reseting the form
        reset();

        // showing an alert
        toast.success("logged in successfully");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);

        // showing an alert
        toast.error("Logged in Failed. Please try again.");
      });
  };

  // Login with Github
  const handleGithubLogin = () => {
    githubAuthintication()
      .then(() => {
        // navigating the user
        const redirectTo = location?.state?.from || "/";
        navigate(redirectTo);

        // reseting the form
        reset();

        // showing an alert
        toast.success("logged in successfully");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);

        // showing an alert
        toast.error("Logged in Failed. Please try again.");
      });
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-11/12 h-auto bg-black border-2 p-5 rounded-xl mt-5 md:w-1/2 xl:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
          <h1 className="text-white text-center font-bold text-2xl mb-5">
            Please Login
          </h1>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="floating_email"
              name="email"
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
            Login
          </button>
          <p className="text-white my-3">
            Did&#39;t have an account? Please{" "}
            <Link to="/register">
              <span className="hover:underline text-blue-500 font-bold">
                Register
              </span>
            </Link>
          </p>
          <p className="text-white my-3">or Login With</p>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={handleGoogleLogin}
              className="btn text-white hover:text-black hover:bg-[#d4d8d8]"
            >
              <FcGoogle className="w-6 h-6" /> Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn text-white hover:text-black hover:bg-[#d4d8d8]"
            >
              <VscGithubInverted className="w-6 h-6" />
              Github
            </button>
          </div>
          {loginError && (
            <p className="text-red-600 text-center text-sm my-5">
              {loginError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
