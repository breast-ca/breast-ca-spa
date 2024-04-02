import { FC } from "react";
import { Title, Wrapper } from "./PatientInfo.styled";
import { Props } from "./PatientInfo.types";
import { PatientCommonInfo } from "@/services/patients/patientProfile/PatientsProfile/PatientCommonInfo";

export const PatientInfo: FC<Props> = ({ patient }) => {
  return (
    <Wrapper>
      <Title>
        {patient.surname} {patient.name} {patient.middleName || ""}
      </Title>
      <PatientCommonInfo patient={patient} />
    </Wrapper>
  );
};
