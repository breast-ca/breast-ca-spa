import { useUnit } from "effector-react";
import { PatientsList } from "./PatientsList";
import { parientsQuery } from "./patientsListService.api";
import { patientsListService } from ".";
import { addPatientService } from "../addPatient";

const {
  inputs,
  outputs,
  gates: { PatientsGate },
} = patientsListService;

export const PatientsListContainer = () => {
  const {
    handleAddPatient,
    patientsList,
    isLoading,
    setPageNumber,
    pageNumber,
    pageSize,
  } = useUnit({
    handleAddPatient: addPatientService.inputs.handleOpenModal,
    patientsList: parientsQuery.$data,
    isLoading: parientsQuery.$pending,
    pageNumber: outputs.$pageNumber,
    pageSize: outputs.$pageSize,
    setPageNumber: inputs.setPageNumber,
  });

  return (
    <>
      <PatientsGate />
      <PatientsList
        handleAddPatient={handleAddPatient}
        patientsList={patientsList}
        isLoading={isLoading}
        pageSize={pageSize}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};
