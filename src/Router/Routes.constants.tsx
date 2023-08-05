import { Navigate, RouteObject } from "react-router-dom";
import { GetRoutesProps } from "./Router.types";
import { MainLayout } from "@/services/mainLayout/MainLayout";

export const getRoutes = ({ isAuth }: GetRoutesProps): RouteObject[] => [
  {
    path: "*",
    element: <Navigate to={isAuth ? "/" : "/login"} />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/patients",
        element: <>patients list</>,
      },
      {
        path: "/messages",
        element: <>messages</>,
      },
      {
        path: "/search",
        element: <>search</>,
      },
    ],
  },
  {
    path: "/login",
    element: <>login</>,
  },
];
