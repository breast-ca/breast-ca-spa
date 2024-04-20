import { Navigate, RouteObject } from "react-router-dom";
import { GetRoutesProps } from "./Router.types";
import { PatientsListContainer } from "@/services/patients/patientsList";
import { PageHeader } from "@/components/PageHeader";
import { MainLayoutContainer } from "@/services/mainLayout/mainLayoutService.container";
import { LoginContainer } from "@/services/login/loginService.container";
import { PatientProfileContainer } from "@/services/patients/patientProfile/patientProfileService.container";
import { SettingsLayoutContainer } from "@/services/settingsLayout/settingsLayoutService.container";
import { UserProfileContainer } from "@/services/settings/userProfile/userProfileService.container";
import { OrganizationProfileContainer } from "@/services/settings/organizationProfile";
import { DiseaseProfileContainer } from "@/services/diseaseProfile";
import { AboutPage } from "@/services/settings/AboutPage";
import { AnalysisListContainer } from "@/services/analysis/analysisList";

export const getRoutes = ({ isAuth }: GetRoutesProps): RouteObject[] => {
  const authRoutes = [
    {
      path: "*",
      element: <Navigate to="/patients" />,
    },
    {
      path: "/",
      element: <Navigate to="/patients" />,
    },
    {
      path: "/settings",
      element: <SettingsLayoutContainer />,
      children: [
        {
          path: "/settings/profile",
          element: <UserProfileContainer />,
        },
        {
          path: "/settings/organization",
          element: <OrganizationProfileContainer />,
        },
        {
          path: "/settings/about",
          element: <AboutPage />,
        },
      ],
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
          path: "/patients/:id/:segment",
          element: <PatientProfileContainer />,
        },
        {
          path: "/disease/:id/:segment",
          element: <DiseaseProfileContainer />,
        },
        {
          path: "/messages",
          element: <PageHeader title="Консилиум" />,
        },
        {
          path: "/analysis",
          element: <AnalysisListContainer />,
        },
      ],
    },
  ];

  return isAuth
    ? authRoutes
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
