import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Content, ContentWrapper, PatientInfoWrapper, Wrapper } from "./MainLayout.styled";
import { MainMenu } from "./MainMenu";
import { Props } from "./MainLayout.types";
import { MenuDrawer } from "./MenuDrawer";
import { PatientInfo } from "@/components/shared/PatientInfo";

export const MainLayout: FC<Props> = ({ handleSignOut, user, patientInfo }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Wrapper>
      <MainMenu handleOpenDrawer={() => setIsDrawerOpen(true)} />
      <ContentWrapper isPatientData={Boolean(patientInfo)}>
        <Content>
          <Outlet />
        </Content>
        {patientInfo && (
          <PatientInfoWrapper>
            <PatientInfo patient={patientInfo} />
          </PatientInfoWrapper>
        )}
      </ContentWrapper>
      <MenuDrawer
        isDrawerOpen={isDrawerOpen}
        handleClose={() => setIsDrawerOpen(false)}
        handleSignOut={handleSignOut}
        user={user}
      />
    </Wrapper>
  );
};
