import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/authPages/Login";
import ComingSoon from "../pages/comingSoon/ComingSoon";

export const ROOT: string = '/';
export const LOGIN: string = "/login";
export const FORGOTPASSWORD: string = "/forgot-password";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: LOGIN,
      element: <Login/>,
    },
    {
      path: FORGOTPASSWORD,
      element: <ComingSoon/>,
    },
    {
      path: ROOT,
      element: <div>Home Page</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
