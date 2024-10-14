import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  // states
  const location = useLocation();

  // context api
  const { user, loading } = useContext(AuthContext);
  
  // If the user is here
  if (user) {
    return children;
  }
  
  // checking, if the user is logged in or not
  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <p className="text-white w-80 h-80 loading loading-infinity loading-xl"></p>
      </div>
    );
  }

  

  return (
    <Navigate
      to="/login"
      state={{ from: location.pathname }}
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
