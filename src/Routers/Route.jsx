import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFoods/AddFood";
import MyFoods from "../Pages/MyFoods/MyFoods";
import RequestFoods from "../Pages/RequestFoods/RequestFoods";
import Register from "../Pages/Authintication/Register/Register";
import Login from "../Pages/Authintication/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import FoodDetails from "../Pages/AvailableFoods/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/availableFoods/foodDetails/:id",
        element: <FoodDetails />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/myFoods",
        element: <MyFoods />,
      },
      {
        path: "/requestFoods",
        element: <RequestFoods />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
