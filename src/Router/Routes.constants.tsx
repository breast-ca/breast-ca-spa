import { Navigate, RouteObject } from "react-router-dom";
import { GetRoutesProps } from "./Router.types";

export const getRoutes = ({ isAuth }: GetRoutesProps): RouteObject[] => [
  {
    path: "*",
    element: <Navigate to={isAuth ? "/" : "/login"} />,
  },
  {
    path: "/login",
    element: <>login</>,
  },
];
