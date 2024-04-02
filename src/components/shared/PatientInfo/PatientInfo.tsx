import { FC } from "react";
import { PenSC, Title, Wrapper } from "./PatientInfo.styled";
import { Props } from "./PatientInfo.types";
import { PatientCommonInfo } from "@/services/patients/patientProfile/PatientsProfile/PatientCommonInfo";

export const PatientInfo: FC<Props> = ({ patient, handleEdit }) => {
  return (
    <Wrapper>
      <Title>
        {patient.surname} {patient.name} {patient.middleName || ""}{" "}
        {handleEdit && <PenSC onClick={() => handleEdit()} />}
      </Title>
      <PatientCommonInfo patient={patient} card={false} />
    </Wrapper>
  );
};
