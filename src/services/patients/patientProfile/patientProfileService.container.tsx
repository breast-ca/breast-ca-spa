import { useNavigate, useParams } from "react-router-dom";
import { PatientsProfile } from "./PatientsProfile";
import { patinetProfileService } from ".";
import { useUnit } from "effector-react";
import { patientQuery } from "./patientProfileService.api";
import { addPatientService } from "../patientsList/PatientsList/addPatient";
import { useCallback } from "react";
import { PatientSegment } from "./PatientsProfile/PatientsProfile.types";

const { PatinetGate } = patinetProfileService.gates;

export const PatientProfileContainer = () => {
  const { id, segment } = useParams<{
    id: string;
    segment: PatientSegment;
  }>();

  const navigate = useNavigate();

  const { patient, isLoading, handleEdit } = useUnit({
    patient: patientQuery.$data,
    isLoading: patientQuery.$pending,
    handleEdit: addPatientService.inputs.handleOpenModal,
  });

  const handleChangeSegment = useCallback(
    (segment: PatientSegment) => {
      const path = `/patients/${id}/${segment}`;

      navigate(path, { replace: true });
    },
    [id, navigate]
  );

  return (
    <>
      {id && <PatinetGate id={Number(id)} />}
      <PatientsProfile
        patient={patient}
        isLoading={isLoading}
        handleEdit={handleEdit}
        segment={segment}
        handleChangeSegment={handleChangeSegment}
      />
    </>
  );
};
