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
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../Pages/MyFoods/UpdateFood";

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
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateFood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://good-bite-server.vercel.app/foods/${params.id}`),
      },
      {
        path: "/requestFoods",
        element: (
          <PrivateRoute>
            <RequestFoods />
          </PrivateRoute>
        ),
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
