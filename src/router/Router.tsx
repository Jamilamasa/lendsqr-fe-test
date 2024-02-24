import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/authPages/Login";

export const ROOT: string = '/';
export const LOGIN: string = "/login"

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: LOGIN,
      element: <Login/>,
    },
    {
      path: ROOT,
      element: <div>Home Page</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
