import { sample } from "effector";
import { createGate } from "effector-react";
import { diseaseQuery } from "./diseaseProfileService.api";
import { editPatientMutation } from "../patients/patientsList/PatientsList/addPatient/addPatientService.api";
import { editDiseaseMutation } from "./editDiseaseModal/editDiseaseModalService.api";

const DiseaseGate = createGate<{ id: number }>();

sample({
  clock: [
    editPatientMutation.finished.success,
    editDiseaseMutation.finished.success,
    DiseaseGate.open,
  ],
  source: DiseaseGate.state,
  fn: ({ id }) => id,
  filter: ({ id }) => Boolean(id),
  target: diseaseQuery.start,
});

export const diseaseProfileService = {
  inputs: {},
  outputs: {},
  gates: { DiseaseGate },
};
