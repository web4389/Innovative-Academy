import { createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import AdminHome from "./Components/AdminHome";
import Home from "./Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
