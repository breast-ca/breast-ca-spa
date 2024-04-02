import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Content,
  ContentWrapper,
  PatientInfoWrapper,
  Wrapper,
} from "./MainLayout.styled";
import { MainMenu } from "./MainMenu";
import { Props } from "./MainLayout.types";
import { MenuDrawer } from "./MenuDrawer";
import { PatientInfo } from "@/components/shared/PatientInfo";
import {
  AddPatientContainer,
  addPatientService,
} from "@/services/patients/patientsList/PatientsList/addPatient";
import { useUnit } from "effector-react";

export const MainLayout: FC<Props> = ({ handleSignOut, user, patientInfo }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { handleEditPatient } = useUnit({
    handleEditPatient: addPatientService.inputs.handleOpenModal,
  });

  return (
    <Wrapper>
      {patientInfo && <AddPatientContainer edit />}
      <MainMenu handleOpenDrawer={() => setIsDrawerOpen(true)} />
      <ContentWrapper isPatientData={Boolean(patientInfo)}>
        <Content>
          <Outlet />
        </Content>
        {patientInfo && (
          <PatientInfoWrapper>
            <PatientInfo
              patient={patientInfo}
              handleEdit={() => handleEditPatient(patientInfo)}
            />
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
