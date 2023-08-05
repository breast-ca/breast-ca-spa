import { Navigate, RouteObject } from "react-router-dom";
import { GetRoutesProps } from "./Router.types";
import { MainLayout } from "@/services/mainLayout/MainLayout";
import { PatientsListContainer } from "@/services/patients/patientsList";
import { PageHeader } from "@/components/PageHeader";

export const getRoutes = ({ isAuth }: GetRoutesProps): RouteObject[] => [
  {
    path: "*",
    element: <Navigate to={isAuth ? "/patients" : "/login"} />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/patients",
        element: <PatientsListContainer />,
      },
      {
        path: "/messages",
        element: <PageHeader title="Консилиум" />,
      },
      {
        path: "/search",
        element: <PageHeader title="Поиск" />,
      },
    ],
  },
  {
    path: "/login",
    element: <>login</>,
  },
];
