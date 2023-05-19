import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alltoys",
        element: <div>ALl toys</div>,
      },
      {
        path: "/mytoys",
        element: <div>My Toys</div>,
      },
      {
        path: "/addtoys",
        element: <div>Add Toys</div>,
      },
      {
        path: "/blogs",
        element: <div>BLogs</div>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
