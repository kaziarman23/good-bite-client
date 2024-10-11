import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFoods from "../Pages/AddFoods/AddFoods";
import MyFoods from "../Pages/MyFoods/MyFoods";
import RequestFoods from "../Pages/RequestFoods/RequestFoods";
import Register from "../Pages/Authintication/Register/Register";
import Login from "../Pages/Authintication/Login/Login";

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
        path: "/addFoods",
        element: <AddFoods />,
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
    ],
  },
]);

export default router;
