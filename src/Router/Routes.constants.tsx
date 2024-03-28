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
          element: (
            <div>
              <PageHeader title="О программе" />
              <div
                style={{
                  lineHeight: "28px",
                  marginTop: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span style={{ fontFamily: "monospace" }}>
                    BreastCa [0.0.1] :{" "}
                    <span style={{ color: "red", fontFamily: "monospace" }}>
                      {" "}
                      Alpha
                    </span>
                  </span>{" "}
                </div>
                <strong>ООО "А-Тим Тек" 2024</strong>
              </div>
            </div>
          ),
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
