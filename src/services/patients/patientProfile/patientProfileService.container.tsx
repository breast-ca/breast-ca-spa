import { useParams } from "react-router-dom";
import { PatientsProfile } from "./PatientsProfile";
import { patinetProfileService } from ".";
import { useUnit } from "effector-react";
import { patientQuery } from "./patientProfileService.api";

const { PatinetGate } = patinetProfileService.gates;

export const PatientProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { patient, isLoading } = useUnit({
    patient: patientQuery.$data,
    isLoading: patientQuery.$pending,
  });

  return (
    <>
      {id && <PatinetGate id={Number(id)} />}
      <PatientsProfile patient={patient} isLoading={isLoading} />
    </>
  );
};
