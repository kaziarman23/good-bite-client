import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import UseUnderlineBtn from "../../../CusmotHooks/UseUnderlineBtn";
import UseBorderYBtn from "../../../CusmotHooks/UseBorderYBtn";
import { BiSolidCookie } from "react-icons/bi";
import UseLogoutBtn from "../../../CusmotHooks/UseLogoutBtn";
import toast from "react-hot-toast";

const Header = () => {
  // state's
  const navigate = useNavigate();

  // Context api
  const { user, logoutUser } = useContext(AuthContext);

  // Handle Logout
  const handleLogout = () => {
    logoutUser().then(() => {
      // navigating the user
      navigate("/");

      // showing an alert
      toast.success("Logout successfull.");
    });
  };

  const navlinks = (
    <>
      <NavLink to="/">
        <UseUnderlineBtn>
          <li className="p-4 font-bold text-white hover:text-orange-600 text-base">
            Home
          </li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/availableFoods">
        <UseUnderlineBtn>
          <li className="p-4 font-bold text-white hover:text-orange-600 text-base">
            Available Foods
          </li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/addFood">
        <UseUnderlineBtn>
          <li className="p-4 font-bold text-white hover:text-orange-600 text-base">
            Add Food
          </li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/myFoods">
        <UseUnderlineBtn>
          <li className="p-4 font-bold text-white hover:text-orange-600 text-base">
            My Foods
          </li>
        </UseUnderlineBtn>
      </NavLink>
      <NavLink to="/requestFoods">
        <UseUnderlineBtn>
          <li className="p-4 font-bold text-white hover:text-orange-600 text-base">
            My Food Requests
          </li>
        </UseUnderlineBtn>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-black/80 fixed top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black text-white"
          >
            {navlinks}
          </ul>
        </div>
        <UseBorderYBtn
          title="Home Page"
          className="flex items-center gap-2 whitespace-nowrap p-2 sm:p-4"
          size="text-xs sm:text-sm md:text-xl"
        >
          <BiSolidCookie />
          Good Bite
        </UseBorderYBtn>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <UseLogoutBtn onClick={handleLogout}>Logout</UseLogoutBtn>
        ) : (
          <Link to="/register">
            <button className="px-4 py-2 rounded-2xl border-2 text-white font-bold bg-black hover:bg-[#cad0d2] hover:text-black ">
              Register
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
