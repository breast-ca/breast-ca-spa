import { sample } from "effector";
import { createGate } from "effector-react";
import { patientQuery } from "./patientProfileService.api";
import { editPatientMutation } from "../patientsList/PatientsList/addPatient/addPatientService.api";

const PatinetGate = createGate<{ id: number }>();

sample({
  clock: PatinetGate.open,
  fn: ({ id }) => id,
  target: patientQuery.start,
});

sample({
  clock: editPatientMutation.finished.success,
  fn: ({ result: { id } }) => id,
  target: patientQuery.start,
});

export const patientProfileService = {
  inputs: {},
  outputs: {},
  gates: { PatinetGate },
};
