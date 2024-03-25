import { useUnit } from "effector-react";
import { PatientsList } from "./PatientsList";
import { addPatientService } from "./PatientsList/addPatient";

export const PatientsListContainer = () => {
  const { handleAddPatient } = useUnit({
    handleAddPatient: addPatientService.inputs.handleOpenModal,
  });

  return <PatientsList handleAddPatient={handleAddPatient} />;
};
