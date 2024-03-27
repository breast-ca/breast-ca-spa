import { Navigate, RouteObject } from "react-router-dom";
import { GetRoutesProps } from "./Router.types";
import { PatientsListContainer } from "@/services/patients/patientsList";
import { PageHeader } from "@/components/PageHeader";
import { MainLayoutContainer } from "@/services/mainLayout/mainLayoutService.container";
import { LoginContainer } from "@/services/login/loginService.container";
import { PatientProfileContainer } from "@/services/patients/patientProfile/patientProfileService.container";

export const getRoutes = ({ isAuth }: GetRoutesProps): RouteObject[] => {
  const authToutes = [
    {
      path: "*",
      element: <Navigate to="/patients" />,
    },
    {
      path: "/",
      element: <Navigate to="/patients" />,
    },
    {
      path: "/",
      element: <MainLayoutContainer />,
      children: [
        {
          path: "/patients",
          element: <PatientsListContainer />,
        },
        {
          path: "/patients/:id",
          element: <PatientProfileContainer />,
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
  ];

  return isAuth
    ? authToutes
    : [
        {
          path: "*",
          element: <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: <LoginContainer />,
        },
      ];
};
