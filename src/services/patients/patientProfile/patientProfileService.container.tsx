import { useParams } from "react-router-dom";
import { PatientsProfile } from "./PatientsProfile";
import { patinetProfileService } from ".";
import { useUnit } from "effector-react";
import { patientQuery } from "./patientProfileService.api";
import { addPatientService } from "../patientsList/PatientsList/addPatient";

const { PatinetGate } = patinetProfileService.gates;

export const PatientProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { patient, isLoading, handleEdit } = useUnit({
    patient: patientQuery.$data,
    isLoading: patientQuery.$pending,
    handleEdit: addPatientService.inputs.handleOpenModal,
  });

  return (
    <>
      {id && <PatinetGate id={Number(id)} />}
      <PatientsProfile
        patient={patient}
        isLoading={isLoading}
        handleEdit={handleEdit}
      />
    </>
  );
};
