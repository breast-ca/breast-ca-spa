import { sample } from "effector";
import { createGate } from "effector-react";
import { diseaseQuery } from "./diseaseProfileService.api";
import { editPatientMutation } from "../patients/addPatient/addPatientService.api";
import { editDiseaseMutation } from "./editDiseaseModal/editDiseaseModalService.api";
import { updateTNMMutation } from "./DiseaseProfilePage/updateTNM/updateTNMService.api";

const DiseaseGate = createGate<{ id: number }>();

sample({
  clock: [
    editPatientMutation.finished.success,
    editDiseaseMutation.finished.success,
    updateTNMMutation.finished.success,
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
