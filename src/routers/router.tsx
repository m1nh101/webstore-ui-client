import React from "react";
import {
  createBrowserRouter,
  LoaderFunction,
  RouteObject,
} from "react-router-dom";
import { About, Contact, Home, Menu } from "../pages";

const getRouter = (
  path: string,
  element: React.ReactNode,
  children?: Array<RouteObject>,
  loader?: LoaderFunction
): RouteObject => {
  return {
    path,
    element,
    children,
    loader,
  } as RouteObject;
};

const mainRouter: Array<RouteObject> = [
  getRouter("/", <Home />),
  getRouter("/about", <About />),
  getRouter("/menu", <Menu />),
  getRouter("/contact", <Contact />),
  getRouter("*", <>Not Found</>),
];

const router = createBrowserRouter(mainRouter);

export default router;
