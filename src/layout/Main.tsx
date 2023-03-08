import React from "react";
import { RouterProvider } from "react-router-dom";
import Header from "../components/Header";
import router from "../routers/router";

const Main: React.FC = (): JSX.Element => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default Main;
