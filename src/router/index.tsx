import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import DashBoard from "../pages/DashBoard";
import Users from "../pages/Users";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import FileManager from "../pages/FileManager";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
import Blog from "../pages/Blog";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <DashBoard />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
        {
          path: "change-password/:id",
          element: <ChangePassword />,
        },
        {
          path: "file-manager",
          element: <FileManager />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ]
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
