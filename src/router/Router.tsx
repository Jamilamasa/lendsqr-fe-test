import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/Login";
import ComingSoon from "../pages/comingSoon/ComingSoon";
import Root from "../layout/Root";
import Dashboard from "../pages/dashboard/Dashboard";

export const ROOT: string = "/";
export const LOGIN: string = "/login";
export const FORGOTPASSWORD: string = "/forgot-password";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: LOGIN,
      element: <Login />,
    },
    {
      path: FORGOTPASSWORD,
      element: <ComingSoon />,
    },
    {
      path: ROOT,
      element: <Root/>,
      children: [
        { index: true, element: <Dashboard/> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
