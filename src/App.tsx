import React from "react";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Toaster />
      <Router />
    </>
  );
};

export default App;
