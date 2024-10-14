import { Link, NavLink, useNavigate } from "react-router-dom";
import UsePurpleToBlueBtn from "../../../CusmotHooks/PurpleToBlueBtn";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import Swal from "sweetalert2";
import UseOutletRedBtn from "../../../CusmotHooks/UseOutletRedBtn";
import UseUnderlineBtn from "../../../CusmotHooks/UseUnderlineBtn";
import UseBorderYBtn from "../../../CusmotHooks/UseBorderYBtn";

const Header = () => {
  const navigate = useNavigate();
  // Context api
  const { user, logoutUser } = useContext(AuthContext);

  // Handle Logout
  const handleLogout = () => {
    logoutUser().then(() => {
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
        title: "Logout successfull",
      });
    });
  };

  const navlinks = (
    <>
      <NavLink to="/">
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-sm">Home</li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/availableFoods">
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-sm">Available Foods</li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/addFood">
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-sm">Add Food</li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/myFoods">
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-sm">My Foods</li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/requestFoods">
        <UseUnderlineBtn>
          <li className="p-2 font-bold text-white text-sm">My Food Requests</li>
        </UseUnderlineBtn>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-slate-900 glass sticky top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow glass bg-slate-900"
          >
            {navlinks}
          </ul>
        </div>
        <UseBorderYBtn title="Home Page">Good Bite</UseBorderYBtn>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <UseOutletRedBtn onClick={handleLogout}>Logout</UseOutletRedBtn>
        ) : (
          <Link to="/register">
            <UsePurpleToBlueBtn>Register</UsePurpleToBlueBtn>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
