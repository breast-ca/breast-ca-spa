import { useUnit } from "effector-react";
import { PatientsList } from "./PatientsList";
import { parientsQuery } from "./patientsListService.api";
import { patientsListService } from ".";
import { addPatientService } from "./PatientsList/addPatient";

const {
  gates: { PatientsGate },
} = patientsListService;

export const PatientsListContainer = () => {
  const { handleAddPatient, patientsList, isLoading } = useUnit({
    handleAddPatient: addPatientService.inputs.handleOpenModal,
    patientsList: parientsQuery.$data,
    isLoading: parientsQuery.$pending,
  });

  return (
    <>
      <PatientsGate />
      <PatientsList
        handleAddPatient={handleAddPatient}
        patientsList={patientsList}
        isLoading={isLoading}
      />
    </>
  );
};
