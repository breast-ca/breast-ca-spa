import { FC } from "react";
import { LinkSC, PenSC, Title, Wrapper } from "./PatientInfo.styled";
import { Props } from "./PatientInfo.types";
import { PatientCommonInfo } from "@/services/patients/patientProfile/PatientsProfile/PatientCommonInfo";

export const PatientInfo: FC<Props> = ({ patient, handleEdit }) => {
  return (
    <Wrapper>
      <Title>
        <LinkSC to={`/patients/${patient.id}/common`}>
          {patient.surname} {patient.name} {patient.middleName || ""}
        </LinkSC>{" "}
        {handleEdit && <PenSC onClick={() => handleEdit()} />}
      </Title>
      <PatientCommonInfo patient={patient} card={false} />
    </Wrapper>
  );
};
